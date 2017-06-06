import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  newAnswer: DS.attr(),
  inquiry: DS.belongsTo('inquiry', { async: true})
});
