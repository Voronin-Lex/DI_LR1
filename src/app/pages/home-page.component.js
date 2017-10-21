import {WFMComponent, router} from "framework";

class HomePageComponent extends WFMComponent{
    constructor(config){
        super(config)

        this.data = {
            title: "Главная страница работает!",
            linkTitle: "Съебать"
        }
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
        <div class="col s6 offset-s3 home_block">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{{title}}</span>
              <p>Нихуя.</p>
            </div>
            <div class="card-action">
              <a href="#not-existing-path" class="js-link">{{linkTitle}}</a>
            </div>
          </div>
        </div>
      </div>`,

    styles: `
    .home_block {margin-top: 40px;}
`
})