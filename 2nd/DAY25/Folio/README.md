###### DEMO

## Folio News Twitter Section

![RWD View](News,-Twitter-Section---Folio.jpg)

### 프로젝트 모듈 설치

```sh
# NPM 모듈 전역 설치
$ npm i -g node-sass group-css-media-queries csso
```

##### 프로젝트에 사용된 NPM 모듈

- [node-sass](https://www.npmjs.com/package/node-sass)
- [group-css-media-queries](https://www.npmjs.com/package/group-css-media-queries)
- [csso](https://www.npmjs.com/package/csso)

-

#### 실행 명령어

##### 1. Sass

`Sass` 파일을 저장할 때 마다 `Sass` → `CSS` 변환 과정을 수행합니다.

```sh
$ npm run sass
```

##### 2. Group Css Media Queries

`Sass`를 사용하면서 여기 저기에 생성된 미디어쿼리 구문을 각각 그룹으로 묶어줍니다.

```sh
$ npm run mq-group
```

##### 3. CSS Optimization

생성된 `CSS` 파일을 압축(최적화)합니다.

```sh
$ npm run css-opt
```

##### 4. Build

`2. Group Css Media Queries`, `3. CSS Optimization` 과정을 동시 수행합니다.

```sh
$ npm run build
```