###### Front-End Develop SCHOOL

## CSS 병합/압축 도구

1. [Node.js](https://nodejs.org/en/download/) 설치

2. `package.json`코드 복사/붙여넣고 저장

```json
{
  "name": "combine-css",
  "version": "1.0.0",
  "description": "CSS 병합/압축 도구",
  "scripts": {
    "start": "npm run install",
    "install": "npm install -g css-combine csso",
    "combine-min": "npm run combine && npm run min",
    "combine": "css-combine css/style.css > css/bundle.css",
    "min": "csso css/bundle.css -o css/bundle.min.css"
  },
  "keywords": [
    "css",
    "combine",
    "minify"
  ],
  "author": "yamoo9"
}
```

3. 명령어 도구 (cmd, powershell, [cmder](http://cmder.net/)) 열고, `npm start` 명령어 실행

4. 명령어 목록
  - `combine`: CSS 파일 병합
  - `min`: 병합된 CSS 파일 압축
  - `combine-min`: `combine` + `min` 동시 수행
