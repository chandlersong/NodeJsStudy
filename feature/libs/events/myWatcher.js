const event = require('events');

class MyWatcher extends event.EventEmitter {

    emitEvent() {
        this.emit('customer', 2)
    }
}

module.exports = MyWatcher;