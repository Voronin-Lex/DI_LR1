import {_} from '../../tools/util'

export class Component {
    constructor(config) {
        this.template = config.template;
        this.selector = config.selector;
        this.el = null;
    }

    render() {
        this.el = document.querySelector(this.selector);
        if (!this.el) throw new Error(`component with selector ${this.selector} wasn't found `);
        this.el.innerHTML = this.template;

        initEvents.call(this);
    }

}

function initEvents() {
    if (_.isUndefined(this.events)) return;

    let events = this.events();
    Object.keys(events).forEach(key => {
        let listener = key.split(' ');

        this.el.querySelector(listener[1])
            .addEventListener(listener[0], this[events[key]].bind(this))
    })
}
