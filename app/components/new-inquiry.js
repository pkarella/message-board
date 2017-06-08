import Ember from 'ember';

export default Ember.Component.extend({
  addNewInquiry: false,
  actions: {
    inquiryFormShow() {
      this.set('addNewInquiry', true);
    },
    saveInquiry() {
     var params = {
       author: this.get('author') ? this.get('author') : "",
       greatQuestion: this.get('greatQuestion') ? this.get('greatQuestion') : "",
       notes: this.get('notes') ? this.get('notes') : ""
     };
     this.set('addNewInquiry', false);
     this.sendAction('saveInquiry', params);
   }
  }
});
