###### Front-End Develop SCHOOL

# DAY 07

### IT 해외 취업 가이드 : "Where do you wanna work?"

1. [미국에서 IT전문가로 일하게 된다는 것은 취업 이상의 의미가 있다.](http://www.hanbit.co.kr/network/series/series_view.html?cms_code=CMS2884820763&hcs_idx=5)
1. [미국에서 IT 전문가로 일한다는 것(1) - 경쟁력 있는 경력 쌓기](http://www.hanbit.co.kr/network/category/category_view.html?cms_code=CMS9261785013)
1. [미국에서 IT 전문가로 일한다는 것(2) - 미국에서 IT 직종이 매력적인 이유](http://www.hanbit.co.kr/network/category/category_view.html?cms_code=CMS8350238194)

-

### 모듈러 디자인(Modular Design) === 모던 디자인

> 지난 몇 년동안, 반응형 디자인에 대한 논쟁은 미묘하게 변화했다. 페이지를 디자인하는것이 아니라, 패턴을 디자인 하는것에 집중하게 되었다.
> 작고, 재사용 가능한 요소들이 큰 시스템을 구성한다는 사실을 이해했다. 나는  내 디자인에 대한 생각이 모던 웹을 위한 매우 좋은 방식이라는 것을 알아냈다.<br>
>
> [─ 웹 앱과 웹 사이트의 다른점 5가지](http://www.hanbit.co.kr/network/category/category_view.html?cms_code=CMS3377712179)

CSS, JavaScript를 공부하면서 우리는 **모듈(Module) 구성 및 재 사용에 대해 많은 연구와 실습을 진행**해볼 것입니다.

---

### CSS 선택자 Quiz

Q. id="parent"인 요소의 자식 중 class="child" 인 요소를 찾아, 그 중 1번째를 제외한 나머지 형제 요소들을 찾는 선택자.

A. 강사가 선택한 Good 답변
- `#parent > .child + .child`
- `#parent > .child ~ .child`

```css
/* 아래와 같이 답변한 사람은 문제를 바로 이해하고 풀이한 사람 */
#parent > .child + .child
#parent > .child ~ .child

/* 아래와 같이 답변한 사람은 결과는 같으나, 향후 오류를 발생할 가능성이 있는 코드를 작성한 사람 */
#parent > .child ~ *
#parent > div ~ .child

/* 아래와 같이 답변한 사람은 진도를 너무 앞서간 사람 */
#parent > div.child:first-child ~ div.child
#parent > .child:first-of-type ~ .child
#parent > .child:first-child ~ div
#parent > .child:nth-of-type(n+2)
```

-

### 진행 내용

- CSS 선택자
- CSS 선택자 우선 순위
- CSS 박스모델
- CSS 상속
- CSS 타이포그래피 속성

-

### CSS 선택자

수업 중 정리 예정...

유형 | 선택자 | 설명
--- | --- | ---
**일반 선택자** | E | 요소 선택자
 | E(P) E(C) | 자손 선택자
**속성 선택자** | [attr^="value"] | 시작하는 속성 값이 일치하는 경우 선택
        | [attr$="value"] | 끝나는 속성 값이 일치하는 경우 선택
        | [attr*="value"] | 속성 값을 포함하는 경우 선택
        | [attr\|="value"] | 하이픈(-)으로 구분되는 단어가 일치할 때 선택
        | [attr~="value"] | 공백으로 구분되는 단어가 일치할 때 선택
**가상 클래스** | :link | <a> 요소의 기본 상태
         | :visited | <a> 요소의 방문한 상태
         | :hover | 요소에 마우스 커서가 올라간 상태
         | :active | 요소를 마우스 커서로 누른 상태
         | :focus | 요소에 키보드 포커스가 적용된 상태
         | :nth-child(an + b) | 부모 요소의 자식 요소 중, 수학 표현식에 따른 계산 결과를 처리 후 선택
         | :first-child | 부모 요소의 첫번째 자식 요소일 경우 선택
         | :last-child | 부모 요소의 마지막 자식 요소일 경우 선택
         | :only-child | 부모 요소의 유일한 자식 요소일 경우 선택
         | :not(selector) | () 안의 선택자를 제외한 나머지 대상 요소 선택
         | :nth-last-child(an + b) | 부모 요소의 자식 요소 중, 수학 표현식에 따른 계산 결과를 처리 후 선택 (뒤로부터 색인)
         | :nth-of-type(an + b) | 동일한 유형 중, 수학 표현식에 따른 계산 결과를 처리 후 선택
         | :nth-last-of-type(an + b) | 동일한 유형 중, 수학 표현식에 따른 계산 결과를 처리 후 선택 (뒤로부터 색인)
**가상 요소** | :root | 루트 요소 선택
        | :empty | 요소 내 내용이 빈 경우 선택
        | :target | 문서의 URI의 조각 식별자(/#id)를 가진 요소 선택
        | :enabled | 폼 요소 컨트롤 중 활성화
        | :disabled |
        | :checked |
        | :invalid |
        | :read-only |
        | :read-write |
        | :optional |
        | :out-of-range |

#### 선택자 참고 자료

- [W3C, Selectors Level 3](https://www.w3.org/TR/selectors/#selectors)
- [MDN, Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
- [lang-pseudo Selector](https://www.w3.org/TR/selectors/#lang-pseudo)

-

### 기타/참고

- [ISO Language Codes](http://www.w3schools.com/tags/ref_language_codes.asp)
- [CSS 레이아웃을 배웁시다](http://ko.learnlayout.com/toc.html)