import {WFMModel} from "../framework/index";
import {appComponent} from "./app.component";

class AppModule extends WFMModel{

    constructor(config){
        super(config)
    }
}

export const appModule = new AppModule({
    components: [
        appComponent
    ]
})