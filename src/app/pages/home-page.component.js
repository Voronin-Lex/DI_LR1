import {WFMComponent} from "../../framework/index";
import {router} from "../../framework/tools/router";


class HomePageComponent extends WFMComponent{
    constructor(config){
        super(config)
    }

    events(){
        return {
            'click .js-link': 'goToTabs'
        }
    }
    goToTabs(event){
        event.preventDefault()
        router.navigate('tabs')
    }
}

export const homePageComponent = new HomePageComponent({
    selector : "app-home-page",
    template : `
<div class="row">
        <div class="col s6 offset-s3" style="margin-top: 40px;">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Главная страница</span>
              <p>Нихуя.</p>
            </div>
            <div class="card-action">
              <a href="#not-existing-path" class="js-link">Съебать</a>
            </div>
          </div>
        </div>
      </div>`
})