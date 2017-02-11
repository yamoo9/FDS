###### Front-End Develop SCHOOL

# line-height

지난 수업 시간에 CSS 라인 간격(행간) 조절 시에 단위를 붙이지 말라고 이야기 드렸었죠. 기억하시나요? :slightly_smiling_face:
이유로 `em`, `%` 단위 등을 붙일 경우 상속(Inheritance) 과정에서 문제가 발생한다고 이야기 드렸습니다.
관련 아티클이 다시 한 번 그 부분을 강조하고 있어 링크 글을 올립니다.

요컨데 __행간 조정(line-height) 시에는 절대! 절대! 절대! 단위를 붙이지 마세요__

http://allthingssmitty.com/2017/01/30/nope-nope-nope-line-height-is-unitless

해당 내용을 보다 원인과 결과에 맞춰 작성된 MDN 아티클도 함께 읽어보시면 좋아요 ^^

> 요소의 글자 크기에 따라 비례하여 반응하는 단위 없는 숫자 값을 사용해야 하는 이유는?
> 이 방법이 유일하게 CSS 상속 과정에 따른 행간 처리 결과에 문제가 발생하지 않도록 하는 완벽한 방법이기 때문이다.

https://developer.mozilla.org/en-US/docs/Web/CSS/line-height#Prefer_unitless_numbers_for_line-height_values

문제 발생 예시는 아래 링크를 클릭해서 확인해보세요. 단위가 있고 없고에 따라 다른 결과를 초래한다는 사실을...

https://jsfiddle.net/api/mdn/
