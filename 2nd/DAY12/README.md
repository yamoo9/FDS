###### Front-End Develop SCHOOL

# DAY 12

### 접근성

- WCAG 2.x
  1. 인식의 용이성
  1. 운용의 용이성
  1. 이해의 용이성
  1. 견고성
- WAI-ARIA 1.x

[수업자료 키노트](https://drive.google.com/file/d/0B_nI53HQaYcNa1NyTWxrcjBSSG8/view?usp=sharing)

### 플렉시블 박스 Flexbox: CSS Layout Module

- 키노트(Keynote)
- 데몬스트레이션(Demonstration)

---

## 접근성
- 접근성은 유니버셜 디자인  > 소수가 아닌 다수, 기계도 이해하기 위함이다.
- 접근성 준수는 프론트엔드 포지션만의 일이 아니므로 사전에 다른 포지션에게 필요성을 충분히 이해시키고 고민하고 공조해야 한다.

<br>

## 1. 장애인 차별 금지 및 권리구제 등에 관한 법률
> 전자 정보와 비전자 정보를 이용하고 그에 접근함에 있어서 장애를 이유로 차별받지 않아야 한다.<br>
> 장애인, 고령자 외에도 OS 등의 기술환경도 고려되어야 함.
<br>

### # 국가정보화 기본법 시행령
#####   a. 모든 콘텐츠는 시각, 청각 등의 장애유형에 관계없이 사용자가 인식할 수 있을 것 ( _인식의 용이성_ )
#####   b. 시각, 청각 장애인 등 사용자가 운용할 수 있는 방법으로 제시되어 있을 것 ( _운용의 용이성_ )
#####   c. 사용자가 쉽게 이해할 수 있도록 콘텐츠나 제어방식을 구성할 것 ( _이해의 용이성_ )
#####   d. 콘텐츠는 다양한 방법의 기술로 접근할 수 있도록 견고하게 만들 것 ( _기술의 견고성_ )


> 장애와 장애인의 차이 <br>
> : 일시적인 장애는 누구나 가질 수 있지만, 장애인은 장기간 장애를 가지고 있는 사람.


`참고)` [웹 접근성 기술 백서](http://inside.olleh.com/html/WebAccessibility/2013%EB%85%84%20%EC%9B%B9%20%EC%A0%91%EA%B7%BC%EC%84%B1%20%EA%B8%B0%EC%88%A0%20%EB%B0%B1%EC%84%9C_(%EC%A3%BC)KT.pdf)

<br>

## 2. 한국 웹 접근성 콘텐츠 지침 2.0 (KWCAG 2.0)

* HTML, RIA 다양한 기술 고려
* 4개의 원칙, 13개의 지침
* 검사 항목(22가지)을 구체적으로 제시
* 지침에 대한 실무 사례 제공
* 유연성, 검증 가능성에 관한 업그레이드   e.g) NHN의 NWCAG

<br>

### 2.1 인식의 용이성

#### 2.1.1 대체텍스트

    - 영문 이니셜 사용 시 . 으로 구분 또는 lang 속성사용
    - <img> 사용시 alt 반드시 제공. alt가 없으면 src 파일명을 읽는다.
    - title 속성은 모바일에서 무용지물
    - 웹툰 등 대체텍스트 정보가 긴 경우 longdesc 속성을 사용
    - map 영역에도 적절한 alt, title 속성값이 필요하다.


※ 대체 텍스트 제공 기법 (Image Replcement) <br>
> 1. WA IR 기법 <br>
>  : position 속성을 사용하여 성능상 이슈가 있다<br>
> 2. Phark Method <br>
>  : text-indent를 이용하여 화면 바깥으로(-9999px만큼 내어 쓰기) 빼내어 보이지 않게 하는 방법<br>

`참고)` 다음 널리 - [http://darum.daum.net/convention/css/css_ir](http://darum.daum.net/convention/css/css_ir)


#### 2.1.2 멀티미디어 대체 수단

    - 자막/원고/수화 제공
    - 플레이어 콘트롤러 제공
    - 다양한 언어, 화질, 플랫폼별 고려하여 제공

> 열린 자막<br>
> : 영상 자체에 자막이 입혀진 것<br>
> 닫힌 자막<br>
> : 소리정보까지 제공. 사용자가 자막을 on/off 할 수 기능을 제공한 자막


#### 2.1.3 명료성

    - 색으로만 구분되는 콘텐츠 주의 ( 모양의 구분 제공 )
    - 명확하게 인식 가능한 지시 사항 제공
    - 텍스트/배경 콘텐츠 명도 대비 준수
    - 고대비 모드 제공 , 브라우저에서 이미지는 반전되지 않으므로 사용상 주의
    - 캡차는 시각 장애인이 인식하기 어려우므로 음성듣기 기능을 제공
    - 자동재생 배경음악 사용 주의 > 바로 멈춤기능 제공

> 4.5:1 을 꼭 지켜야하나?<br>
> : 24(18pt) 이상, 굵은 18px(14pt) 환경에선 명도 대비 3:1

<br>

### 2.2 운용의 용이성

#### 2.2.1 키보드 접근성

    - 키보드로 내비게이션을 운용할 수 없다
    - 탭, 엔터, 스페이스 키만으로 운용
    - 마우스가 올라왔을때 focus가 와야하며 툴팁과 같은 시각적 표시가 있어야 한다.
    - focus를 못받는 요소에는 onclick 이벤트를 주지 않아야 한다.
    - 방향키, 스페이스, page up/down 등의 키보드 탐색을 지원해야 한다.

* tabindex 속성값을 주면 `<div>`, `<span>` 요소와 같이 포커스를 못받는 요소에게 포커스를 줄 수 있다.

#### 요소에 마우스 오버, 포커싱 시 툴팁 띄우기 예시
```html
<style>
    .tooltip{
      position: relative;
      padding: 1em;
    }
    .tooltip:hover .tooltip-content,
    .tooltip:focus .tooltip-content
    {
      display: block;
    }
    .tooltip-content{
      display: none;
      position: absolute;
      top: 20px;
      left: 60px;
      width: 140px;
      padding: 0.5em 1em;
      border: 1px solid;
    }
  </style>
</head>
<body>
  <div class="tooltip" role="tooltip" tabindex="0">
    구독게시판 
    <span class="tooltip-content">즐겨찾기 게시판의 소식을 네이버 ME에서 모아보세요!</span>
  </div>

  <script>
    var tooltip = document.querySelector(".tooltip");
    tooltip.onkeydown = function(event){
      // esc 키를 누르면 툴팁 제거
      if(event.keyCode === 27){ 
        tooltip.querySelector(".tooltip-content").style.display = "none";
      }
    }
    tooltip.onblur = function(event){
      tooltip.querySelector(".tooltip-content").removeAttribute("style");
    }
  </script>
</body>

```

> 404페이지
> - 홈링크 제공
> - 사용자가 의도한 페이지정보, 검색, 페이지 이탈 기능 등을 제공해야 한다.

#### 2.2.2 충분한 시간 제공

#### 2.2.3 광 과민성 발작 예방

#### 2.2.4 쉬운 내비게이션

---

# HTML & CSS

## Flexbox

    - Block 레이아웃 : 문서 배치
    - Inline 레이아웃 : 텍스트 배치
    - Table 레이아웃 : 표 배치
    - Positioning 레이아웃 : 격리된 배치
    - Flex 레이아웃 : 유연한 배치, 모바일에 유리
    - Grid 레이아웃 : 큰 화면에 적합. 현재는 지원 브라우저가 거의 없다.

![flex-direction-terms](https://www.w3.org/TR/2014/WD-css-flexbox-1-20140925/images/flex-direction-terms.svg)

출처 : [W3C - CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/2014/WD-css-flexbox-1-20140925/#box-model)

* flex container : flex 아이템을 감싸는 부모 요소
* flex item : flex container 안에 포함된 자식 요소
* main axis : item 이 정렬되는 주축
* cross axis : 주축에 교차가 되는 축

#### # 컨테이너와 관련된 속성들

 - display : flex		      —> block 처럼 동작
 - display : inline-flex	—> inline 처럼 동작
 - justify-content 		    —> 주축( main-axis )의 방향으로 컨텐츠를 정렬
 - flex-direction		      —> 주축의 방향을 설정 (row, row-reverse, column, column-reverse) 		
 - flex-wrap			        —> 자식을 감싸는 방식(nowrap, wrap, wrap-reverse(자식이 떨어지는 순서 방향을 반대로))

#### # 컨텐츠와 관련된 속성들

 - align-items 		—> 자식들의 정렬 (start, end, center)
 - align-content  —> 자식들을 통합적으로 관리
 - order          —> 자식들의 순서를 변경. 마크업 자체의 구조가 바뀌는 것이 아니기 때문에 웹 접근성 준수에도 좋습니다.
 - flex-basis     —> 주축의 방향이 row일 경우 자식 컨텐츠의 넓이를, 주축의 방향이 column 일 경우 자식 컨텐츠의 높이를 조절하게 됩니다. width 속성과 비슷합니다.
 - align-self     —> 개별 자식의 align을 조절하여 따로 따로 움직일 수록 할 수 있습니다.

#### # Shorthand
```
flex-flow : <flex-direction> <flex-wrap>;
flex: initial === flex: 0(flex-grow) 1(flex-shrink) auto(flex-basis);
```

<br><br>

`참고)`

- [A Visual Guide to CSS3 Flexbox Properties](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)
- [Flexbox playground](https://codepen.io/enxaneta/full/adLPwv/)
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Solved by Flexbox](https://philipwalton.github.io/solved-by-flexbox/)
- [flexibility](https://github.com/jonathantneal/flexibility)
