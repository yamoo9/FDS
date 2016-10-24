###### Front-End Develop SCHOOL

# DAY 17

```scss
@mixin transition($param: all 0.4s) {
  -webkit-transition: $param;
  -moz-transition: $param;
  -o-transition: $param;
  transition: $param;
}

body {
  @include transition(opacity 0.4s ease);
}
```