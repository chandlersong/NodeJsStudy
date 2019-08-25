const async = require('async');

async.series([]);

describe('Flow control', function () {
    it('sequence', function () {
        async.series([
            callBack => {
                console.info("I am first");
                callBack();
            },
            callBack => {
                console.info("I am second");
                callBack(); //must be called
                console.info("after call back");
            },
            callBack => {
                console.info("I am third");
                callBack();
            }
        ]);

    });
});