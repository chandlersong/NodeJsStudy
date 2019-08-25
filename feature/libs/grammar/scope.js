const events = require('events');

describe('variable scope', function () {
    it('variable has been changed', function () {
        const eventWatcher = new events.EventEmitter();

        let color = 'green';
        eventWatcher.on('run', () => {
            console.info(`${color}`);
        });

        color = 'blue';

        eventWatcher.emit('run');
    });

    it('variable not changed', function () {
        const eventWatcher = new events.EventEmitter();

        let color = 'green';
        eventWatcher.on('run', (color => () => {
            console.info(`${color}`)
        })(color));
        color = 'blue';

        eventWatcher.emit('run');
    });
});