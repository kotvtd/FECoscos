const EventEmitter = require('events');

class mEmitter {
    constructor() {
            this._emiter = new EventEmitter();
            this._emiter.setMaxListeners(100);
        }
    emit(...args)
    {
        this._emiter.emit(...args);
    }

    registerEvent(event, listener) {
        this._emiter.on(event, listener);
    }

    registerOnce(event, listener){
        this._emiter.once(event, listener);
    }

    removeEvent(event, listener) {
        this._emiter.removeListener(event, listener);
    }

    removeAllEvent(target){
        if(!target.events){
            return;
        }
        target.events.forEach(element => {
            this.removeEvent(element.event, element.callback);
        });
        target.events = [];
        console.log("delete");
    }

    destroy()
    {
        this._emiter.removeAllListeners();
        this._emiter = null;
        mEmitter.instance = null;
    }
}
mEmitter.instance = null;
module.exports = mEmitter;
