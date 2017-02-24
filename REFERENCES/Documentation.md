## Node, NPM 설치

## 프로젝트 디렉토리 생성

```sh
# 프로젝트 디렉토리 생성
$ mkdir Documentation
$ cd Documentation
# package.json 생성
$ npm init -y
$ echo "{}" > package.json
```

## 전역/지역 개발 모듈 설치

- jsdoc
- sassdoc

```sh
# 전역 설치
$ npm install --global jsdoc sassdoc
# 지역 설치
$ npm install --save-dev jsdoc sassdoc
```

jsdoc, sassdoc 코멘트(주석)가 설정된 파일 준비

```sh
# jsdoc 사용법
$ jsdoc {파일 경로/파일 이름.js} # ./out/ 생성
# sassdoc 사용법
$ sassdoc {파일 경로} # ./sassdoc/ 생성
```

-

## Documentation 디렉토리 제거

```sh
$ rm -rf {디렉토리 이름}

$ cd ../
$ rm -rf Documentation
```
