import { Component, Input} from '@angular/core';

export class Lang {
    lang: string;
}


@Component({
    selector: 'gameinfo-main',
    templateUrl: 'cat_school/cat_school1.html',
})
export class cat_schoolComponent {
    @Input() langTemp: string;

}

@Component({
    selector: 'my-app',
    templateUrl: 'app/gameinfo.root.html',
})

export class AppComponent {
    private onActLang: string;
    private langList: any;
    private lMenuList: any;
    constructor() {
        this.langList = LANGLIST
        this.lMenuList = LMENULIST
        this.onActLang = 'zh-tw';
    };
    onSelLang(lang: string): void {
        this.onActLang = lang;
    };
}

const LANGLIST = [
    { lang: 'zh-tw', sub: '中文' },
    { lang: 'en-us', sub: 'English' },
    { lang: 'jp-ja', sub: '日本語' }
];
const LMENULIST = [{
    index: 0,
    active: false,
    lMenu: 'Overview',
    button: [
        { lang: 'zh-tw', sub: '' },
        { lang: 'en-us', sub: '' },
        { lang: 'jp-ja', sub: '' }
    ]
}, {
    index: 1,
    active: true,
    lMenu: 'Introduction',
    button: [
        { lang: 'zh-tw', sub: '遊戲介紹' },
        { lang: 'en-us', sub: 'Introduction' },
        { lang: 'jp-ja', sub: 'ゲームの説明' }
    ]
}, {
    index: 2,
    active: true,
    lMenu: 'Information',
    button: [
        { lang: 'zh-tw', sub: '遊戲資訊' },
        { lang: 'en-us', sub: 'Information' },
        { lang: 'jp-ja', sub: 'ゲーム情報' }
    ]
}, {

    index: 4,
    active: true,
    lMenu: 'Screenshot',
    button: [
        { lang: 'zh-tw', sub: '遊戲畫面' },
        { lang: 'en-us', sub: 'Screenshot' },
        { lang: 'jp-ja', sub: 'ゲーム画面' }
    ]
}, {
    index: 5,
    active: true,
    lMenu: 'Game music',
    button: [
        { lang: 'zh-tw', sub: '遊戲音樂' },
        { lang: 'en-us', sub: 'Game music' },
        { lang: 'jp-ja', sub: 'ゲームミュージック' }
    ]
}, {
    index: 5,
    active: true,
    lMenu: 'Cartoon',
    button: [
        { lang: 'zh-tw', sub: '遊戲漫畫' },
        { lang: 'en-us', sub: 'Cartoon' },
        { lang: 'jp-ja', sub: 'ゲームやコミック' }
    ]
}, {
    index: 5,
    active: true,
    lMenu: 'Download',
    button: [
        { lang: 'zh-tw', sub: '遊戲下載' },
        { lang: 'en-us', sub: 'Download' },
        { lang: 'jp-ja', sub: 'ゲームのダウンロード' }
    ]
}, {
    index: 5,
    active: true,
    lMenu: 'Cat Discourse',
    button: [
        { lang: 'zh-tw', sub: '貓咪感言' },
        { lang: 'en-us', sub: 'Cat Discourse' },
        { lang: 'jp-ja', sub: '猫の言葉' }
    ]
}, {
    index: 5,
    active: true,
    lMenu: 'Copyright',
    button: [
        { lang: 'zh-tw', sub: '著作聲明' },
        { lang: 'en-us', sub: 'ブックステートメント' },
        { lang: 'jp-ja', sub: 'Copyright' }
    ]
}, {
    index: 5,
    active: true,
    lMenu: 'For Streamer',
    button: [
        { lang: 'zh-tw', sub: '實況說明' },
        { lang: 'en-us', sub: 'For Streamer' },
        { lang: 'jp-ja', sub: 'ライブ解説' }
    ]
}, {
    index: 5,
    active: true,
    lMenu: 'Contact',
    button: [
        { lang: 'zh-tw', sub: '聯絡我們' },
        { lang: 'en-us', sub: 'Contact' },
        { lang: 'jp-ja', sub: 'お問い合わせ' }
    ]
}]
