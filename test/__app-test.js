const assert = require('assert');

const App = require('../src/app/app.component');

describe('#App', () => {
    describe('#karmaTester()', () => {
        it('should work', () => {
            const app = new App.App({});

            assert.equal(0, app.karmaTester());
        })
    });
});
