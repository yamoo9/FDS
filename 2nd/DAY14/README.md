###### Front-End Develop SCHOOL

# DAY 14

### 플렉시블 박스 Flexbox: CSS Layout Module

- 키노트(Keynote)
- 데몬스트레이션(Demonstration)

### Sass 프리프로세싱

- 키노트(Keynote)
- 데몬스트레이션(Demonstration)

---

### 1. 유연한 그리드 시스템(Flexible Grid System)

#### 그리드 시스템 모듈

- `container`
- `row`(`grid`)
- `col`(`cell`)
- `gutters` | `gutter-before` | `gutter-after`

#### 컬럼 모듈

- `col-1of2`(`col--1-2`)
- `col-1of3`(`col--1-3`)
- `col-2of3`(`col--2-3`)
- `col-1of4`(`col--1-4`)
- `col-2of4`(`col--2-4`)
- `col-3of4`(`col--3-4`)

#### 유틸리티 모듈

- `offset`(`prefix`|`suffix`)
- `push`|`pull`
- `isolate`

-

### 2. 반응형 그리드 시스템(Responsive Grid System)

#### 워크프로세스

- __Mobile First__<br>
Mobile → Tablet → Desktop
- __Desktop First__<br>
Desktop → Tablet → Mobile

#### 중단점 모듈 프리픽스

- `s` | `xs`(`mobile`)
- `s` | `sm`(`mobile`)
- `m` | `md`(`tablet`)
- `l` | `lg`(`desktop`)
- `l` | `xl`(`wide`)

#### 컬럼 모듈

- `{s}-1of2`(`{xs}--1-2`)
- `{m}-1of3`(`{sm}--1-3`)
- `{l}-2of3`(`{md}--2-3`)
- `{s}-1of4`(`{lg}--1-4`)
- `{m}-2of4`(`{xl}--2-4`)
- `{l}-3of4`(`{xs}--3-4`)

#### 유틸리티 모듈

- `{xs}-hidden`

```css
/* 그리드 시스템 유틸리티 모듈 */
.column[class*="-push-"],
.column[class*="-pull-"] { position: relative; }

@media only screen and (max-width: 767px) {
  .m1-2,
  .m2-4 { width: 50%; }
  .m1-3 { width: 33.3333%; }
  .m2-3 { width: 66.6666%; }
  .m1-4 { width: 25%; }
  .m3-4 { width: 75%; }

  .m-full { width: 100%; }

  .m-push--1-2,
  .m-push--2-4 { left: 50%; }
  .m-push--1-3 { left: 33.3333%; }
  .m-push--2-3 { left: 66.6666%; }
  .m-push--1-4 { left: 25%; }
  .m-push--3-4 { left: 75%; }

  .m-pull--1-2,
  .m-pull--2-4 { right: 50%; }
  .m-pull--1-3 { right: 33.3333%; }
  .m-pull--2-3 { right: 66.6666%; }
  .m-pull--1-4 { right: 25%; }
  .m-pull--3-4 { right: 75%; }

  .m-prefix--1-2,
  .m-prefix--2-4 { margin-left: 50%; }
  .m-prefix--1-3 { margin-left: 33.3333%; }
  .m-prefix--2-3 { margin-left: 66.6666%; }
  .m-prefix--1-4 { margin-left: 25%; }
  .m-prefix--3-4 { margin-left: 75%; }

  .m-suffix--1-2,
  .m-suffix--2-4 { margin-left: -50%; }
  .m-suffix--1-3 { margin-left: -33.3333%; }
  .m-suffix--2-3 { margin-left: -66.6666%; }
  .m-suffix--1-4 { margin-left: -25%; }
  .m-suffix--3-4 { margin-left: -75%; }

  .m-hide { display: none; }
}
```

-

### 3. 플렉스박스 모던 기술을 사용한 그리드 시스템(Flexbox Grid System)

지금까지의 CSS 레이아웃은 `float` 또는 `position` 등을 사용하여 제작했습니다. 그러나 이러한 기술들은 요구되는 레이아웃을 구현하기에는 각각 취약점을 가지고 있습니다.

`float`의 경우는 해제(clear)를 설정하지 않을 경우 다음에 위치한 요소에 영향을 미치는 문제가 있으며, 이 문제를 해결하기 위한 방법을 사용할 경우 `::before`, `::after`를 사용하기에 다른 용도로는 사용될 수 없는 문제 또한 가집니다.

`position`의 경우는 그리드 시스템보다는 각 객체 간 정밀한 위치 조정에 더 많이 사용되고 있습니다. 그리드 시스템에는 적합하지 않기 때문이죠.

Flexbox는 이러한 문제를 모두 해결하는 모던 레이아웃 CSS 모듈입니다. Flexbox를 사용한 그리드 시스템은 아래 나열된 요구사항을 모두 충족합니다.

#### 그리드 시스템 요구사항

- 기본적으로 행(`row`)의 각 그리드 셀(`cell`)은 같은 폭과 높이를 가짐.
- 더 세심한 조정을 위한 각각의 그리드 셀(`cell`) 크기 클래스 속성을 추가. 클래스 속성이 없으면 남은 공간을 자동 배분.
- 반응형 그리드(Responsive Grid)를 위한 미디어쿼리 프리픽스 클래스 속성을 그리드 셀에 적용 가능.
- 각 행의 콘텐츠를 수평 방향(`left` | `center` | `right`)으로, 각 그리드 셀은 수직 방향(`top` | `middle` | `bottom`)으로 정렬 가능.
- 모든 그리드 셀에 동일한 설정을 원한다면 행에 이를 제어하기 위한 클래스 속성을 추가하는 것으로 불 필요한 반복을 제거.
- 중첩된 그리드 레이아웃이 가능.

#### 플렉스박스 그리드시스템

- 유연한 그리드(Fluid grid)
- 반응형 그리드(Responsive grid)
- 스마트 컬럼(Smart columns)
- 거터 제거(Gutterless)
- 중첩 그리드 레이아웃(Subgrids)
- 순서 변경(Reverse order)
- 정렬(Alignment)
- 감춤(Hide)



-

### 참고 자료

#### Inline Block

`inline-block` 요소 사이 간격을 제거하는 방법

- https://css-tricks.com/fighting-the-space-between-inline-block-elements/
- https://davidwalsh.name/remove-whitespace-inline-block


#### Flexbox

- [The Flex Grid](http://jeroenoomsnl.github.io/the-flex-grid/)
- [Core Flex Grid](https://splintercode.github.io/core-flex-grid/)
- [Flex Grid](https://github.com/ptb/flexgrid)
- [Flexbox Grid](http://flexboxgrid.com/)
- [Better, Simpler Grid Systems](https://philipwalton.github.io/solved-by-flexbox/demos/grids/)