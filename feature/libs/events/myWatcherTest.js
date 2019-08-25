const watcher = require('./myWatcher');


describe('My watcher test', function () {
    it('should return number of charachters in a string', function () {
        const myWatcher = new watcher();
        myWatcher.on('customer',(n)=>{
            console.info(n);
        });

        myWatcher.emitEvent();
    });
});