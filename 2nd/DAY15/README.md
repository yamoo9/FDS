

```sh
# 전역 설치 (Global Install)
# $ npm install --global node-sass
$ npm i -g node-sass

# 지역 설치 (Local Install)
$ npm install node-sass

# Sass 폴더 변환 실행 명령
$ node-sass --watch --recursive sass --output css
$ node-sass -w -r sass -o css --output-style expanded --source-map ./map

Wrapper around libsass

Usage:
  node-sass [options] <input.scss>
  cat <input.scss> | node-sass [options] > output.css

Example: Compile foobar.scss to foobar.css
  node-sass --output-style compressed foobar.scss > foobar.css
  cat foobar.scss | node-sass --output-style compressed > foobar.css

Example: Watch the sass directory for changes, compile with sourcemaps to the css directory
  node-sass --watch --recursive --output css
    --source-map true --source-map-contents sass

Options
  -w, --watch                Watch a directory or file
  -r, --recursive            Recursively watch directories or files
  -o, --output               Output directory
  -x, --omit-source-map-url  Omit source map URL comment from output
  -i, --indented-syntax      Treat data from stdin as sass code (versus scss)
  -q, --quiet                Suppress log output except on error
  -v, --version              Prints version info
  --output-style             CSS output style (nested | expanded | compact | compressed)
  --indent-type              Indent type for output CSS (space | tab)
  --indent-width             Indent width; number of spaces or tabs (maximum value: 10)
  --linefeed                 Linefeed style (cr | crlf | lf | lfcr)
  --source-comments          Include debug info in output
  --source-map               Emit source map
  --source-map-contents      Embed include contents in map
  --source-map-embed         Embed sourceMappingUrl as data URI
  --source-map-root          Base path, will be emitted in source-map as is
  --include-path             Path to look for imported files
  --follow                   Follow symlinked directories
  --precision                The amount of precision allowed in decimal numbers
  --error-bell               Output a bell character on errors
  --importer                 Path to .js file containing custom importer
  --functions                Path to .js file containing custom functions
  --help                     Print usage info
```