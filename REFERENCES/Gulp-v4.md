###### Front-End Develop SCHOOL

# Gulp v4.x

### 0. Gulp 이전 버전 제거

```sh
$ npm uninstall --global gulp # 전역 Gulp 제거
$ npm uninstall gulp          # 로컬 Gulp 제거 (프로젝트 디렉토리에서)
```

-

### 1. [Gulp v4 설치 및 시작하기](https://github.com/gulpjs/gulp/blob/4.0/docs/getting-started.md)

```sh
$ npm install --global gulp-cli  # 전역에 gulp-cli 설치, npm i -g gulp-cli
```

```sh
// NPM
$ npm install --save-dev gulpjs/gulp.git#4.0  # 로컬 디렉토리에 gulp v4 설치

// Yarn
$ yarn add --dev gulpjs/gulp.git#4.0
```

#### gulpfile.js 파일 생성

Gulp 모듈 로드 및 기본 업무 등록

```js
// Gulp 모듈 로드
const gulp = require('gulp');

// Gulp 기본 업무 등록
gulp.task('default', ()=>{
  console.log('Gulp 업무 시작...');
});
```

명령 프롬프트에서 `gulp` 기본 업무 실행

```sh
$ gulp

# Gulp 업무 시작...
```

-

### 2. [Gulp v4 API 살펴보기](https://github.com/gulpjs/gulp/blob/4.0/docs/API.md)

메소드 | 설명
--- | ---
`gulp.task`     | 수행할 업무를 정의
`gulp.src`      | 매칭되는 1개 이상의 소스 파일을 설정
`gulp.dest`     | 업무가 수행된 결과물을 출력할 위치(디렉토리) 설정
`gulp.watch`    | 파일 변경 시(지속적 관찰), 업무 처리 설정
`gulp.parallel` | 병렬 방식으로 업무 수행 설정
`gulp.series`   | 직렬 방식으로 업무 수행 설정
`gulp.symlink`  | 업무가 수행된 결과물 심볼릭 링크(symlinks) 설정
`gulp.lastRun`  | 마지막으로 업무가 실행된 시간 정보(timestamp)를 가져옴
`gulp.tree`     | 등록된 업무들의 트리를 반환
`gulp.registry` | 등록된 사용자 정의 레지스트리를 로드하여 업무에 추가 설정

-

#### 2.1 gulp.task([name,] fn)

gulp-cli, `gulp.series`, `gulp.parallel`, `gulp.lastRun`에서 실행될 업무를 등록한다.

```js
// 업무 등록 방법 1
gulp.task(function someTask() {...});

// 업무 등록 방법 2
var someTask = gulp.task('someTask');
```

-

#### 2.2 gulp.src

##### gulp.src(globs[, options])

globs 문법에 매칭되는 파일들을 소스로 설정한다. 이 메소드는 [스트림](http://nodejs.org/api/stream.html) 또는 [비닐](https://github.com/wearefractal/vinyl-fs) 데이터를 반환한다.

```js
gulp.src('client/templates/*.pug')
    .pipe(pug())
    .pipe(minify())
    .pipe(gulp.dest('build/minified_templates'));
```

※ [globs](https://github.com/isaacs/node-glob) 문법이란?

```js
// 1개 이상 설정할 경우 배열(Array) 문법을 사용한다.
gulp.src(['*.js', '!b*.js', 'bad.js']);
```

-

#### 2.3 gulp.dest(path[, options])

각 파이프에 설정된 업무를 마친 결과물을 산출하기 위한 디렉토리 설정이다. 필요할 경우, 2개 이상의 다른 디렉토리로 결과를 출력할 수 있다.
단, 출력되는 디렉토리는 생성되어 있어야 한다.

```js
gulp.src('./client/templates/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./build/templates'))
    .pipe(minify())
    .pipe(gulp.dest('./build/minified_templates'));
```

-

#### 2.4 gulp.watch(globs[, opts][, fn])

설정된 파일들을 관찰한 후, 변경 사항이 발생하면 등록/설정된 업무들을 진행한다.

```js
gulp.watch('js/**/*.js', gulp.parallel('concat', 'uglify'));
```

아래와 같은 방법을 사용하면 이벤트 처리도 가능하다.

```js
var watcher = gulp.watch('js/**/*.js', gulp.parallel('concat', 'uglify'));
watcher.on('change', function(path, stats) {
  console.log('파일 ' + path + '이 변경되었습니다.');
});

watcher.on('unlink', function(path) {
  console.log('파일 ' + path + '이 제거되었습니다.');
});
```

-

#### 2.5 gulp.parallel(...tasks)

병렬 처리로 등록된 업무들을 진행한다. (비동기 방식)

```js
gulp.task('one', function(done) {
  // 첫번째 처리 업무 등록
  done();
});

gulp.task('two', function(done) {
  // 두번째 처리 업무 등록
  done();
});

gulp.task('default', gulp.parallel('one', 'two', function(done) {
  // 세번째 처리 업무 등록
  done();
}));
```

-

#### 2.6 gulp.series(...tasks)

직렬 처리로 등록된 업무들을 진행한다. (동기 방식)

```js
gulp.task('one', function(done) {
  // 첫번째 처리 업무 등록
  done();
});

gulp.task('two', function(done) {
  // 두번째 처리 업무 등록
  done();
});

gulp.task('default', gulp.series('one', 'two', function(done) {
  // 세번째 처리 업무 등록
  done();
}));
```

-

#### 2.7 gulp.symlink(folder[, options])

기능적으로는 `gulp.dest` 메소드와 유사하나, 디렉토리에 결과물을 복제하는 대신 심볼릭 링크를 생성한다는 점이 다르다.

-

#### 2.8 gulp.lastRun(taskName, [timeResolution])

작업이 성공적으로 실행 된 마지막 시간(작업이 시작된 시간)의 타임 스탬프를 반환한다. 작업이 아직 실행되지 않은 경우 `undefined`를 반환한다.

```js
gulp.lastRun('someTask', 1000) // 1426000004000 반환
gulp.lastRun('someTask', 100)  // 1426000004300 반환
```

-

#### 2.9 gulp.tree(options)

등록 처리된 업무 트리를 반환한다. 예를 들어 아래와 같은 업무가 등록되어 있을 경우

```js
gulp.task('one', function(done) {
  // 첫번째 처리 업무 등록
  done();
});

gulp.task('two', function(done) {
  // 두번째 처리 업무 등록
  done();
});

gulp.task('three', function(done) {
  // 세번째 처리 업무 등록
  done();
});

gulp.task('four', gulp.series('one', 'two'));

gulp.task('five',
  gulp.series('four',
    gulp.parallel('three', function(done) {
      // 세번째 업무 처리하면서 동시적으로 콜백 함수 실행
      done();
    })
  )
);
```

아래와 같이 업무 트리를 출력한다.

```js
gulp.tree();

// output: [ 'one', 'two', 'three', 'four', 'five' ]

// ------------------------------------------------------

gulp.tree({ deep: true });

/*output: [
   {
      "label":"one",
      "type":"task",
      "nodes":[]
   },
   {
      "label":"two",
      "type":"task",
      "nodes":[]
   },
   {
      "label":"three",
      "type":"task",
      "nodes":[]
   },
   {
      "label":"four",
      "type":"task",
      "nodes":[
          {
            "label":"<series>",
            "type":"function",
            "nodes":[
               {
                  "label":"one",
                  "type":"task",
                  "nodes":[]
               },
               {
                  "label":"two",
                  "type":"task",
                  "nodes":[]
               }
            ]
         }
      ]
   },
   {
      "label":"five",
      "type":"task",
      "nodes":[
         {
            "label":"<series>",
            "type":"function",
            "nodes":[
               {
                  "label":"four",
                  "type":"task",
                  "nodes":[
                     {
                        "label":"<series>",
                        "type":"function",
                        "nodes":[
                           {
                              "label":"one",
                              "type":"task",
                              "nodes":[]
                           },
                           {
                              "label":"two",
                              "type":"task",
                              "nodes":[]
                           }
                        ]
                     }
                  ]
               },
               {
                  "label":"<parallel>",
                  "type":"function",
                  "nodes":[
                     {
                        "label":"three",
                        "type":"task",
                        "nodes":[]
                     },
                     {
                        "label":"<anonymous>",
                        "type":"function",
                        "nodes":[]
                     }
                  ]
               }
            ]
         }
      ]
   }
]
*/
```

-

#### 2.10 gulp.registry([registry])

사용자 정의 레지스트리를 정의하거나, 업무에 추가하는 설정을 한다.

gulpfile.js

```js
var gulp = require('gulp');

// myCompanyTasksRegistry.js 에 등록된 사용자 정의 레지스트리를 로드
var companyTasks = require('./myCompanyTasksRegistry.js');

// 사용자 정의 리지스트리 등록
gulp.registry(companyTasks);

gulp.task('one', gulp.parallel('someCompanyTask', function(done) {
  console.log('in task one');
  done();
}));
```

myCompanyTasksRegistry.js

```js
var util = require('util');

var DefaultRegistry = require('undertaker-registry');

// 사용자 정의 레지스트리 생성자 함수(Class) 정의
function MyCompanyTasksRegistry() {
  DefaultRegistry.call(this);
}

// DefaultRegistry 능력을 MyCompanyTasksRegistry 생성자(Class)에 상속
util.inherits(MyCompanyTasksRegistry, DefaultRegistry);

// MyCompanyTasksRegistry 생성자의 프로토타입 확장 (인스턴스 메소드 정의)
MyCompanyTasksRegistry.prototype.init = function(gulp) {
  gulp.task('clean', function(done) {
    done();
  });
  gulp.task('someCompanyTask', function(done) {
    console.log('performing some company task.');
    done();
  });
};

// 생성자(Class)로부터 생성된 인스턴스 객체 반환(외부에 공개)
module.exports = new MyCompanyTasksRegistry();
```

---

### 3. Gulp v4이 이전 버전과 달라진 점

아래 코드는 v4에서 새로 생긴 `gulp.parallel()` 메소드를 사용하고 있는데 이는 병렬 실행됨을 의미한다.
즉, `styles`, `scripts` 업무가 동시 수행되는 것이다. 그런데 문제는 `clean` 업무가 중복 실행되는 문제를 보여준다.
각각의 업무가 수행될 때마다 `clean` 업무가 중복실행된다는 이야기이다.

```js
gulp.task('default', gulp.parallel('styles', 'scriptes'));
gulp.task('styles', gulp.parallel('clean', ()=>{...}));
gulp.task('scripts', gulp.parallel('clean', ()=>{...}));

gulp.task('clean', ()=>{...});
```

위 코드는 다음과 같은 방법으로 문제를 해결할 수 있다. v4에서 새로 생긴 `gulp.series()` 메소드를 사용하면 업무들을
직렬적으로 관리할 수 있다. 이리 함으로서 `clean` 업무를 먼저 수행한 후, 완료가 되면 `styles`, `scripts` 업무를
병렬 수행한다.

```js
gulp.task('default',
  gulp.series('clean', gulp.parallel('styles', 'scripts'),
  ()={...});
);

gulp.task('styles', ()=>{...});
gulp.task('scripts', ()=>{...});

gulp.task('clean', ()=>{...});
```

#### Gulp v3 + run-sequence 모듈 조홥 VS Gulp v4

```js
// Gulp v3 + run-sequence
gulp.task('build', function(){
  return runSequence(
    'clean',
    ['sass', 'copy-assets'],
    'index'
  );
});

// -----------------------------------------

// Gulp v4
gulp.task('build',
  gulp.series(
    'clean',
    gulp.parallel('sass', 'copy-assets'),
    'index'
  )
);
```

-

#### 달라진 점 요약

###### sourcemaps 기본 지원

개선된 `vinyl-fs`를 통해 `gulp-sourcemaps`를 사용하지 않고도 아래와 같이 `gulp.src` 메서드를 사용할 때 옵션을 주어 소스맵을 처리할 수 있게 된다.

```js
var gulp   = require('gulp');
var minify = require('gulp-uglify');

gulp.task('uglify', function () {
  return gulp.src('js/**/*.js', {sourcemaps: true})
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});
```

###### 순차 혹은 동시 수행을 위한 gulp.series, gulp.parallel

Gulp v3에서는 업무를 순차적으로 수행하기 위해서 아래와 같이 의존성을 결정하는 두번째 파라메터를 통해서 처리해왔다.

```js
//가장 먼저 실행되는 task
gulp.task('first', function () {...});

// first task를 실행한 뒤에 실행하는 task들
gulp.task('second1', ['first'], function () {...});
gulp.task('second2', ['first'], function () {...});

// 가장 마지막에 실행하는 task
gulp.task('third', ['second1', 'second2'], function () {...});
```

Gulp v4 에서는 업무의 실행 순서를 보다 명시적으로 지정할 수 있도록 `gulp.series`, `gulp.parallel`가 추가된다.
위의 예를 `gulp.series`, `gulp.parallel`를 사용해서 아래와 같이 개선할 수 있다.

```js
gulp.task('third', gulp.series('first', gulp.parallel('second1', 'second2'), function () {..}));

// 이제는 아래의 task들에 더이상 dependency가 필요하지 않다.
gulp.task('second1', function () {...});
gulp.task('second2', function () {...});
gulp.task('first', function () {...});
```

###### 증분 빌드(Incremental build)를 위한 gulp.lastRun

증분 빌드는 반복되는 빌드 속도를 개선하기 위한 최선의 방법 중 하나로 매 빌드마다 모든 파일을 처리하는 것이 아니라 변경된 파일에 대해서만 처리하는 것이다. Gulp v3 에서는 아래와 같이 `gulp-cached`와 같은 플러그인을 활용해서 이를 구현했다. `gulp-cached`는 `timestamp`와 실제 컨텐츠를 모두 체크해서 변경된 파일만 스트림으로 흘러가게 한다.

```js
var gulp = require('gulp');
var cached = require('gulp-cached');
var jshint = require('gulp-jshint');

gulp.task('jshint', function () {
  return gulp.src('js/**/*.js')
    .pipe(cached('jshint'))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.watch('js/**/*.js', ['jshint']);
```

Gulp v4에서는 파일을 가져올 때 새로운 플래그를 통해 증분 빌드를 직접 구현할 수 있다. `since` 옵션은 `timestamp`를 확인해서 파일을 가져올 때 변경된 파일만 가져오게 된다. `since` 옵션과 함께 사용하게 되는 것이 `gulp.lastRun` 메서드이다. 위의 예는 아래와 같이 바뀔 수 있을 것이다. `gulp.cached`를 사용했을 때와 달리 파일을 가져오는 과정 조차도 생략되기 때문에 파일이 많을 수록 시간이 많이 절약되게 된다.

```js
var gulp   = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jshint', function () {
  return gulp.src('js/**/*.js', {since: gulp.lastRun('jshint')})
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.watch('js/**/*.js', ['jshint']);
```

###### 증분 빌드를 위해 여전히 플러그인이 필요한 부분

Gulp가 종료되고 나면 기존에 실행했던 정보들이 모두 사라지기 때문에 다시 실행할 때는 오래걸릴 수 밖에 없게 된다. 이런 경우에는 여전히 `gulp-newer`와 같은 플러그인이 필요하다.

```js
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var newer = require('gulp-newer');

gulp.task('images', function () {
  return gulp.src('images/**/*')
    .pipe(newer('dist'))
    .pipe(imagemin())
    .pipe(gulp.dest('dist'));
});
```

`gulp-newer` 플러그인은 `source stream` 상의 파일들이 `dist` 폴더의 결과물보다 더 최신의 `timestamp`를 가진 경우에만 스트림으로 흘려보낸다. `gulp-cached`와는 달리 파일 변경 감지를 하지 않는 케이스에서 자주 사용된다.

`gulp-cached` 플러그인을 사용할 때는 캐시된 파일들까지 모두 원래 스트림으로 채워져야 할 때가 있는데, 이 때에 사용하는 플러그인이 `gulp-remember` 플러그인이다. 이때 아래와 같이 `gulp.lastRun` 메서드와 함께 사용하면 보다 효율적이다.

```js
gulp.task('uglify', function () {
  return gulp.src('js/**/*.js', {since: gulp.lastRun('uglify')})
    .pipe(cached('scripts'))
    .pipe(uglify())
    .pipe(remember('scripts'))
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('dest'));
});
```

처음 이 업무를 실행할 때는 `gulp.lastRun`의 기준이 없기 때문에 `gulp.src`에서 필터링 없이 모든 파일이 선택되게 된다. 이후 `gulp-cached`를 통해 이 모든 파일이 캐싱되고 이후 변경이 있는 파일들만 압축(uglify)을 하게 된다. 압축은 변경된 파일만 하지만 병합(concat)은 모든 JavaScript 파일에 대해 해야하므로 이때 `gulp-remember` 플러그인을 통해 이전에 캐싱된 파일들과 변경된 파일의 스트림이 모두 합쳐져 병합되게 된다.


###### Passthrough source streams

대부분의 경우 `gulp.src`를 통해서 스트림을 생성하기 때문에 업무의 시작은 `gulp.src`가 될 때가 많다. 하지만 Gulp v4부터는 `passthrough` 플래그를 사용하면 `gulp.src`를  파이프라인의 어디에도 들어갈 수 있게 된다.

```js
var gulp   = require('gulp');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

gulp.task('scripts', function () {
  return gulp.src('src/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'))
    .pipe(gulp.src('vendor/**/*.js', {passthrough: true}))
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('dest/js'));
});
```

위의 예를 살펴보면, 직접 작성한 JavaScript 파일을 `gulp.src`를 통해 가져와서 JSHint를 돌린 후에, 다시 `gulp.src`를 통해 JSHint가 필요없는 vendor JavaScript 파일을 `passthrough` 플래그를 통해 스트림에 추가하고 압축(uglify)과 병합(concat)을 수행하는 것을 볼 수 있다.

`passthrough` 플래그는 프리프로세서(preprocessor)를 사용하는 경우, 아래와 같이 응용할 수 있다.

```js
gulp.task('styles', function () {
  return gulp.src('styles/main.scss')
    .pipe(sass())
    .pipe(gulp.src('styles/**/*.css'), {passthrough: true})
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist'));
});
```

-

### 3. [Gulp CLI](https://github.com/gulpjs/gulp/blob/4.0/docs/CLI.md)

#### Tasks

```sh
$ gulp <task1> <task2> ...
```

#### Flags

- `-v`, `--version`            : Gulp CLI/로컬 버전 출력
- `--gulpfile <gulpfile path>` : gulpfile로 사용하고자 하는 파일 이름 설정
- `-T`, `--tasks`              : 등록된 Gulp 업무 리스트 출력
- `--tasks-simple`             : 등록된 Gulp 업무 리스트 간단하게 출력
- `--color`                    : 기본 값. Gulp 처리 결과를 컬러를 반영하여 출력
- `--no-color`                 : Gulp 처리 결과를 컬러를 반영하지 않고 출력
- `-S`, `--silent`             : 모든 Gulp 기록(Logging)을 중지

---

### 4. 참고 자료

- [gulpjs.com](http://gulpjs.com/)
- [Gulp v4, Github](https://github.com/gulpjs/gulp/tree/4.0/docs)
- [Gulp 4: The new task execution system - gulp.parallel and gulp.series](https://fettblog.eu/gulp-4-parallel-and-series/)
- [Migrating to gulp 4 by example](https://blog.wearewizards.io/migrating-to-gulp-4-by-example?utm_campaign=chrome_series_introtogulp_031616&utm_source=chromedev&utm_medium=yt-annt)
- [Gulp 4.0 어떤 것들이 달라졌을까?](http://programmingsummaries.tistory.com/393)
