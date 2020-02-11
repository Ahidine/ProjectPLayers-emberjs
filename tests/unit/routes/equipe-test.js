import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | equipe', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:equipe');
    assert.ok(route);
  });
});
