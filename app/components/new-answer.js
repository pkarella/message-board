import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
     var params = {
       name: this.get('name'),
       newAnswer: this.get('newAnswer'),
       inquiry: this.get('inquiry')
    };
     this.set('addNewAnswer', false);
     this.sendAction('saveAnswer', params);
   }
  }
});
