###### Front-End Develop SCHOOL

# DAY 19

### Image Trimming & Slicing

1. Photoshop Action
1. Photoshop Image Assets Generator
1. Photoshop Exports

####Photoshop Action

포토샵 action을 이용한다

![Photoshop Export Action](../Assets/PhotoShop_Export_Action.jpg)

 - 창(window) 항목의 액션(action) 선택
 - 처음 액션을 등록한다면 그룹을 먼저 만들기를 추천
 - 새로운 액션을 등록한다(export x1). 자동으로 녹화가 시작된다면 정지를 누른다
 - `녹화 시작`
 - 선택된 이미지 레이어 우클릭 - 레이어 복제(duplicate)
 - 다른 것은 건드리지 않고! 대상이 될 곳을 새로운 문서로 바꾼다
 - 이미지 - 재단(trim) - 투명 픽셀을 기준으로 좌우상하 모두 선택하여 자른다
 - 처음은 x1 배율 이므로 별도의 편집 없이 파일 - 웹용 내보내기(Save for Web)
 - 저장할 곳을 지정하고 save
 - 새로 열린 레이어를 닫기 - 저장 하지 않음
 - `녹화 정지`

여기까지 한다면 자동으로 export 된 이미지를 볼 수 있다. 하지만 현재 녹화된 액션은
같은 이름의 파일로 계속 덮어쓰기 때문에 문제가 있다.

 - 액션 항목에서 우측 상단 메뉴 탭을 누르고 메뉴항목 삽입(Insert Menu Item) 클릭
 - 창이 하나 뜨고, 그 상태에서 파일 - 웹용 내보내기 클릭, 방금 뜬 창 확인 버튼 클릭
 - 드래그로 순서를 조정한다

여기까지 왔다면 x1 비율 이미지를 뽑아낼 액션을 만들게 된것이다.
다음으로 2배, 3배율 만들어보자

 - 방금 만든(export x1)를 복제하고 이름을 변경한다(export x2)
 - 닫기 상태의 체크박스를 해제하고 새로운 이미지 레이어를 선택한 후 액션을 실행한다.
 - 제대로 실행 됬다면 새로운 레이어가 뜬 상태에서 멈췄을 것이다.
 - `녹화 시작`
 - 이미지 - 이미지 사이즈로 들어가서 크기를 두배로 키운다.(포토샵 최신버전의 경우)
 - 혹은 캔버스 사이즈를 두배로 늘리고, 이미지를 스마트 오브젝트로 변환 후, 캔버스에 맞게 크기를 키워 내보낸다.(포토샵 최신 버전이 아닐 경우)
 - 닫기 - 저장 안함
 - `녹화 정지`
 - 메뉴 항목 삽입 - 웹용 내보내기 과정을 추가하여 닫기 위로 순서를 올려준다




####Photoshop Image Assets Generator

포토샵 설정(preference) - 일반(general) - 플러그인 - enable generator 체크

 - 파일 - 생성(generate) - image asset
 - 이제부터 label 작업이 필요
 - 이미지 레이어에서 레이어이름을 변경함으로 작업이 진행 된다
 - 이름.png, 200% 이름+식별이름.png, 300% 이름.png[bit[optional]]



####Image Formats for Web

 - gif
  - 256 가지 색상만 표현 가능
  - 애니메이션 지원
 - jpg/jpeg
  - 배경사진(투명x)
  - 256^3 가지 색상 표현력
  - 엄청난 압축률, 투명 이미지 불가능
 - png
  - 8 비트 : 255색, gif와 같으나 애니매이션은 지원하지 못한다
  - 24 비트: 용량이 크다. 투명 영역이 없다면 jpg 권장, 색표현이 좋다
 - svg
  - IE 하위호환 안됨(VML 대체)
  - gradient, effect 같이 화려한 것은 되도록 피한다(용량이 크므로)

-

**기타 : HTML5 요소를 이용하여 이미지와 텍스트를 묶어 줄때**

```html
<div>
  <img src="" alt="">
  <p>Brand Logo</p>
</div>
<!-- 의미 없는 묶음 -->

<figure>
  <img src="" alt="">
  <figcaption>Brand Logo</figcaption>
</figure>
```

