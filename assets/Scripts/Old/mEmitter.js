const EventEmitter = require('events');

class mEmitter {
    constructor() {
            this._emiter = new EventEmitter();
            this._emiter.setMaxListeners(100);
            this.listenerMap = new Map();
        }
    emit(...args)
    {
        this._emiter.emit(...args);
    }

    registerEvent(eventName, method, owner) {
        this._emiter.on(eventName, method);
        if (owner) {
            if (!this.listenerMap.has(owner)) {
                this.listenerMap.set(owner, []);
            }
            for (let detail of this.listenerMap.get(owner)) {
                if (detail.eventName === eventName) {
                    console.log("Event existed");
                    return;
                }
            }
            this.listenerMap.get(owner).push({ eventName, method });
        }
    }

    registerOnce(event, listener){
        this._emiter.once(event, listener);
    }

    removeEvent(event, listener) {
        this._emiter.removeListener(event, listener);
    }

    removeAllEvents(owner) {
        if (!this.listenerMap.has(owner)) {
            return;
        }

        const listeners = this.listenerMap.get(owner);

        listeners.forEach(({ eventName, method }) => {
            this.eventEmitter.removeListener(eventName, method);
        });

        this.listenerMap.delete(owner);

        console.log(`Listener remain: ${this.listenerMap}`);
    }

    destroy(){
        this._emiter.removeAllListeners();
        this._emiter = null;
        mEmitter.instance = null;
    }
}
mEmitter.instance = null;
module.exports = mEmitter;
