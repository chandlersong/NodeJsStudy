const assert = require('assert');

describe('Basic Mocha String Test', function () {
    it('should return number of charachters in a string', function () {
        assert.strictEqual("Hello".length, 5);
    });
});