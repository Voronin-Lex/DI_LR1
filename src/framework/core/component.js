export class Component{
    constructor(config){
        this.template = config.template
        this.selector = config.selector
        this.el = null;

    }

    render(){
        this.el = document.querySelector(this.selector)
        if(!this.el) throw new Error(`component with selector ${this.selector} wasn't found `)
        this.el.innerHTML = this.template
    }
}
