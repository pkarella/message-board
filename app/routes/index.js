import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
    inquiries: this.store.findAll('inquiry'),
    answers: this.store.findAll('answer')
 });
 },
 actions: {
    saveInquiry(params) {
      var newInquiry = this.store.createRecord('inquiry', params);
      newInquiry.save();
      this.transitionTo('index');
    }
}
});
