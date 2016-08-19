###### Front-End Develop SCHOOL

# DAY 37

### [자바스크립트 애니메이션](http://javascript.info/tutorial/animation)

### [자바스크립트 기반 애니메이션 프레임](https://msdn.microsoft.com/ko-kr/library/hh920765(v=vs.85).aspx)

과거에 사용되던 `setTimeout` 및 `setInterval` 방법은 애니메이션을 과도하게 그려 CPU 주기가 낭비되었으며, 추가 전력이 사용되었다. 또한 웹 사이트가 보이지 않을 때, 특히 웹 사이트가 배경 탭의 페이지를 사용하거나 브라우저가 최소화된 경우에도 애니메이션이 종종 발생한다. 뿐만 아니라 애니메이션에서 10밀리초의 JavaScript 타이머 확인을 사용할 경우 여기 표시된 대로 타이밍 불일치가 발생. 여러모로 사용하지 않는 것이 최선이다. 이러한 문제를 해결하기 위해 등장한 새로운 애니메이션 프레임 방법이 `requestAnimationFrame`이다.

- `window.requestAnimationFrame`
- `window.cancelAnimationFrame`

#### [크로스 브라우징 이슈](http://caniuse.com/#search=requestAnimationFrame)

- IE 10+ 지원

#### [크로스 브라우징을 위한 애니메이션 프레임 사용 방법](http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/)

```js
window.requestAnimationFrame = (function(){
  return window.requestAnimationFrame ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame ||
         window.oRequestAnimationFrame ||
         function(callback) {
           window.setTimeout(callback, 1000 / 60); // 60 FPS
         };
})();

window.cancelAnimationFrame = (function(){
  return window.cancelAnimationFrame ||
         window.webkitCancelAnimationFrame ||
         window.mozcanCelAnimationFrame ||
         window.oCancelAnimationFrame ||
         function(id) {
           window.clearTimeout(id);
         };
})();
```

-

### [자바스크립트 애니메이션 FPS 제어](http://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe)

[Controlling fps with requestAnimationFrame?](http://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe)

-

### jQuery v3.x

- [jquery-core-3-0-upgrade-guide](http://jquery.com/upgrade-guide/3.0/#jquery-core-3-0-upgrade-guide)
- [whats-new-jquery-3-0](https://codebrahma.com/whats-new-jquery-3-0/)
- [jquery-3-1-0-released-no-more-silent-errors](https://blog.jquery.com/2016/07/07/jquery-3-1-0-released-no-more-silent-errors/)