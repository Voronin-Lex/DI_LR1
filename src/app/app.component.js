import {WFMComponent} from "../framework/index";

class AppComponent extends WFMComponent{
    constructor(config){
        super(config);
    }
}

export const appComponent = new AppComponent({
    selector: "app-root",
    template: `
    <div>
    <h4>App component works</h4>
    <h6>Roxy</h6>
    </div>
`
})