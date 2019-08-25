const watcher = require('./myWatcher');


describe('My watcher test', function () {
    it('emit an event inside the watcher', function () {
        const myWatcher = new watcher();
        myWatcher.on('customer',(n)=>{
            console.info(n);
        });

        myWatcher.emitEvent();
    });
});