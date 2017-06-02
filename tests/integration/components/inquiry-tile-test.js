import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('inquiry-tile', 'Integration | Component | inquiry tile', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{inquiry-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#inquiry-tile}}
      template block text
    {{/inquiry-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
