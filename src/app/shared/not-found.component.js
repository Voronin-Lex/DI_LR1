import {WFMComponent} from 'framework';

class NotFound extends WFMComponent {
    constructor(config) {
        super(config)
    }
}

export const notFound = new NotFound({
    selector: "app-not-found",
    template: `
    <div class="not-found_block">
    <div>
    <h2 class="red darken-1">Страница не найдена</h2>
    <a href="#">перейти на главную</a>
</div>
</div>`,
    styles: `
    .not-found_block {display: flex; align-items: center; justify-content: center; }
`
});