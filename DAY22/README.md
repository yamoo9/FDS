###### Front-End Develop SCHOOL

# DAY 22

### [Sass](http://sass-lang.com/) (`Syntactically Awesome Style Sheets`) 환경설정

__Sass → CSS__ 컴파일 [CLI](http://ko.wikipedia.org/wiki/%EB%AA%85%EB%A0%B9_%EC%A4%84_%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4 "Command Line Interface") 환경 구성

![](https://raw.githubusercontent.com/yamoo9-Lab/sass-workflow/2015.11/IMAGES/Sass.png)

-

### 플랫폼 (구동 환경)

##### 플랫폼 설치

- [Ruby](https://www.ruby-lang.org/ko/)
- [Node.js](https://nodejs.org/) __★__

##### 플랫폼 별, Sass

- [Ruby Sass](http://sass-lang.com/) (컴파일 속도가 느림...)
- [Node Sass](https://github.com/sass/node-sass/) __★__

-

### CLI 명령어 인터페이스

- 디렉토리 이동 및 생성하기<br>
`cd`, `mkdir`

- 파일 생성<br>
`touch`, `echo`

- 내용 확인<br>
`cat`

- 목록 출력<br>
`ls`, `ls -1`

- 이동/이름 변경<br>
`mv`

- 복제<br>
`cp`

- 제거<br>
`rmdir`, `rm`, `rm -rf`

-

```sh
$ cd     # 디렉토리 이동 (change directory)
$ mkdir  # 디렉토리 생성 (make directory)
$ touch  # 파일 생성 (make files)
$ ls     # 목록 출력 (list view)
$ rm     # 파일 제거 (remove files)
$ rmdir  # 빈 디렉토리 제거 (remove empty directory)
$ rm -r  # 하위 디렉토리 지우는 옵션(--recursive)
$ rm -f  # 강제 제거 옵션(--force)
$ rm -rf # 하위 디렉토리까지 강제로 제거 옵션
```

-

### node-sass

#### 1. 설치

```sh
$ npm install node-sass --global
```

#### 2. [CLI 사용법](https://github.com/sass/node-sass#command-line-interface/)

> `node-sass [options] <input> [output]`
> `cat <input> | node-sass > output`

##### 2-1. 파일 변환

```sh
# node-sass [Sass 파일 이름] [컴파일 될 CSS 파일 이름]
$ node-sass sass/style.scss css/style.css
```

##### 2-2. 폴더 내 파일 변환

```sh
$ node-sass sass/ --output css/
```

##### 2-3. 변경 사항 관찰(Watch) 후 파일 변환

```sh
# node-sass -watch sass/ --output css/
$ node-sass -w sass/ -o css/
```

##### 2-4. 옵션

```sh
--help                     도움말 정보 출력
-v, --version              버전 정보 출력

-w, --watch                폴더/파일 변경 관찰 변환
-r, --recursive            폴더 내부 하위 폴더 안의 파일까지 모두 변환
-o, --output               출력 폴더 설정

--output-style             CSS 출력 스타일 설정 (nested | expanded | compact | compressed)
--indent-type              CSS 출력 들여쓰기 설정 (space | tab)
--indent-width             들여쓰기(스페이스 또는 탭) 폭 개수 설정 (MAX: 10)
--precision                프로그래밍 처리 과정에서 출력될 소수점 자리 수 설정
-i, --indented-syntax      Sass 코드를 스트림(stdin) 데이터로 처리 (vs scss)

-q, --quiet                오류를 제외하고는 기록을 멈춤(억제)
--linefeed                 줄바꿈 스타일 설정 (cr | crlf | lf | lfcr)

-x, --omit-source-map-url  소스맵(Source Map) URL을 출력 파일 주석으로 설정 안함
--source-comments          디버그(Debug) 정보를 출력에 포함
--source-map               소스맵(Source Map) 방출
--source-map-contents      맵 파일 안에 콘텐츠를 포함
--source-map-embed         소스매핑 URL을 데이터 URI에 포함
--source-map-root          소스맵이 방출될 기본 경로 설정
```

-

### 기타/참고

- [sass-guidelin.es](http://sass-guidelin.es/ko/)
- [sassmeister.com](http://www.sassmeister.com/)
- [내가 Sass를 선택한 이유](https://windtale.net/blog/why-i-choose-sass/)