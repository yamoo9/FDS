###### Front-End Develop SCHOOL

# 특강(Special Lecture)

### 프로젝트-킷(ProjectKit) 제작 과정 설명 및 사용법

__사전에 제작된 프로젝트-킷을 제공하고, 내용을 설명하면서 공부합니다.__ 프로젝트-킷을 제작하는 과정을 진행하며 특강을 진행하기에는 시간이 너무~ 부족합니다. 그래서 어떻게 구성했으며, 어떤 일을 수행하는지, 어떻게 업무를 추가하는지에 대해 이야기 해봅니다.

- [x] __Task Runner__ ː `Gulp`
- [x] __Server__ ː `BrowserSync`
- [x] __JavaScript Bundler__ ː `Webpack`
- [x] __Transpiler(Compiler)__ ː `Babel`
- [x] __CSS Pre Processor__ ː `Sass & Sourcemaps`
- [x] __CSS Autoprefixer__ ː `Add CSS Browsers Prefix`
- [x] __HTML Optimizer__ ː `HTML Minification`
- [x] __Images Optimizer__ ː `Image Optimization`
- [x] __Sprite Images__ ː `Generate Sprite Images`
- [x] __Icon Fonts__ ː `Generate Icon Fonts`
- [x] __Framework__ ː `Angular v1.x`
- [x] __Library__ ː `jQuery v3.x`

-

#### 프로젝트-킷(ProjectKit) 다운로드 및 인스톨

[ProjectKit.zip](https://github.com/yamoo9/FDS/raw/master/2nd/Special%20Lecture/ProjectKit.zip)을 다운로드 받아 압축을 푼 후, 아래 명령을 CLI 환경에서 실행하여 의존 모듈을 모두 설치합니다. (※ [Node.js](http://nodejs.org/) 설치 필요)

```sh
# 전역에서 실행 가능하도록 gulp 모듈을 설치합니다. (이미 설치되어 있다면 이 과정은 생략)
$ npm install --global gulp

# 프로젝트에 필요한 의존 모듈을 모두 설치합니다.
$ npm install
```

-

#### 명령어

##### 기본 업무

설정된 모든 업무를 자동으로 수행합니다. 설정된 모든 업무는 `tasks` 디렉토리에서 살펴볼 수 있습니다. 새로운 업무를 추가할 경우, `tasks` 디렉토리에 추가합니다.

```sh
$ gulp
```

__설정된 수행 업무 리스트__

- __clean__         <br>생성된 디렉토리를 제거합니다.
- __iconfonts__     <br>아이콘폰트를 생성합니다.
- __sprites__       <br>스프라이트 이미지를 생성합니다.
- __move-fonts__    <br>`src/fonts` 폴더를 `dist`로 이동시킵니다.
- __html__          <br>`src` 디렉토리에서 HTML 파일을 찾아 압축한 후, `dist`로 이동시킵니다.
- __sass__          <br>Sass → CSS 업무를 수행한 후, 브라우저 접두사를 붙여 `dist/css`로 출력합니다. (소스맵 생성)
- __webpack__       <br>JavaScript 파일들을 번들링을 수행한 후, `dist/js`로 출력합니다. (소스맵 생성)
- __images__        <br>이미지 포멧(`jpg`,`jpeg`,`gif`,`png`,`svg`) 파일들을 최적화(Optimization)하여 `dist/images`로 출력합니다.
- __watch__         <br>HTML/Sass/JavaScript 파일을 관찰하여 변경 사항이 발생하면 프리프로세싱/번들링을 수행합니다.
- __browser-sync__  <br>웹서버 테스트 환경(LiveReload, Browser Sync 등)을 구동합니다.

-

##### 빌드 업무

빌드 업무가 수행되면 `dist`가 아닌, `build` 디렉토리에 파일들이 생성됩니다. 기본 명령과 차이점은 관찰/서버 업무를 수행하지 않으며, Sass 소스맵, JavaScript 번들링 소스맵을 생성하지 않습니다. 그리고 JavaScript 번들링 결과는 압축이 됩니다.

```sh
$ gulp build
```

-

##### 제거 업무

제거 업무가 수행되면 생성된 디렉토리/파일 모두를 제거합니다. 추가로 제거해야 할 디렉토리/파일이 생길 경우, [`config.js`](ProjectKit/config.js) 파일에서 [`remove_list`](ProjectKit/config.js#L180)를 찾아 경로를 문자열로 추가합니다.

```sh
$ gulp clean
```

-

##### 아이콘 폰트 생성 업무

`src/iconfonts` 디렉토리에 아이콘 폰트로 생성하고자 하는 `svg` 파일을 배치시킨 후, 명령어를 실행하면 아이콘 폰트와 SCSS 파일이 `src/fonts` 디렉토리 안에 자동 생성됩니다.

```sh
gulp iconfonts
```

※ [`src/iconfonts/template/_icons.scss`](ProjectKit/src/iconfonts/template/_icons.scss) 파일은 템플릿 파일입니다. 내용을 수정하면 생성될 아이콘 폰트 SCSS 파일에 반영됩니다.

-

##### 스프라이트 시트 생성 업무

`src/sprites` 디렉토리에 스프라이트 이미지로 생성하고자 하는 `png` 파일을 배치시킨 후, 명령어를 실행하면 스프라이트 이미지와 SCSS 파일이 `src/images/sprites` 디렉토리 안에 자동 생성됩니다.

```sh
$ gulp sprites
```

__스프라이트 시트 생성 결과__

```sh
# Before
src/sprites/icons
├── AmericanExpress.png
├── AmericanExpress@2x.png
├── ...
├── wishlist.png
└── wishlist@2x.png
```

```sh
# After
src/images/sprites/
├── _icons.scss
├── icons.png
└── icons@2x.png
```

__사용자 정의 스프라이트시트 SCSS 템플릿 설정__

[`src/sprites/template.hbs`](ProjectKit/src/sprites/template.hbs) 파일을 수정하면 수정된 내용을 토대로 사용자정의 스프라이트시트 SCSS 파일이 생성됩니다.

```hbs
.{{{spritesheet_info.name}}} {
  background-image: url({{{spritesheet.escaped_image}}});
}

{{#if retina_spritesheet}}
@media
  (-webkit-min-device-pixel-ratio: 2),
  (min--moz-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
  .{{{spritesheet_info.name}}} {
    background-image: url({{{retina_spritesheet.escaped_image}}});
    background-size: {{spritesheet.px.width}} {{spritesheet.px.height}};
  }
}
{{/if}}

{{#each sprites}}
.{{{../spritesheet_info.name}}}__{{{name}}}{{pseudo_class}} {
  background-position: {{px.offset_x}} {{px.offset_y}};
  width: {{px.width}};
  height: {{px.height}};
}
{{/each}}
```

---

### ECMAScript 2015(ES6)

ES6를 공부하기 쉽게 제작된 [ES6 Cheatsheet](./ECMAScript_2015.md)를 살펴보면서 공부합니다.

---

### ScrollMagic + GreenSock

[ScrollMagic](./ScrollMagic.md)을 살펴보고 패럴럭스 웹사이트 디자인을 공부해보세요.
