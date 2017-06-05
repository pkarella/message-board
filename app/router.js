import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('question');
  this.route('inquiry', {path: '/inquiry/:inquiry_id'});
});

export default Router;
