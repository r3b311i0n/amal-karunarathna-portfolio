const assert = require('assert');

const app = require('../src/app/app.component');

describe('#App', () => {
    describe('#karmaTester()', () => {
        it('should work', () => {
            assert.equal(0, app.App.karmaTester());
        })
    });
});
