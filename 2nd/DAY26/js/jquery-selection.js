/*! jquery-selection.js © yamoo9.net, 2016 */

/**
 * --------------------------------
 * Module A: Setting
 */
var fds = (function(global, jQuery){
  'use strict';

  // jQuery 사용 가능
  // 외부에서 접근이 불가능한 private jQuery

  var $ = jQuery;
  var $target;

  // 요소(타입) 선택자
  $target = $('article');

  // 그룹핑
  $target = $('img, h2, li');

  // 자손(하위) 선택자
  $target = $('[class^="post-"] ul');

  // 자식 선택자
  // $target = $('li', $target);
  $target = $('ol > li');

  // 클래스 선택자
  $target = $('.reset-list');

  // 멀티 클래스 선택자
  $target = $('.reset-list.clearfix');

  // 아이디 선택자
  $target = $('#page');

  // 유니버셜 선택자
  $target = $('article *');

  // 인접 형제 선택자
  // 인접한 1개만 선택
  $target = $('img + *');

  // 일반 형제 선택자
  // 다음에 나오는 모든 형제들 선택
  $target = $('.clearfix ~ p');

  // 속성 선택자
  $target = $('[title]');
  $target = $('[src]');

  // 속성 선택자 일치
  $target = $('[alt="one"]');

  // 속성 선택자 시작
  $target = $('[title^="article"]');

  // 속성 선택자 끝
  $target = $('[class$="hidden"]');

  // 속성 선택자 공백 구분(~)
  $target = $('[title~="article"]');

  // 속성 선택자 (|)
  $target = $('[lang^="en"]');

  // 속성 선택자 *
  $target = $('[src*="?"]');

  // 멀티 속성 선택자 [][]
  $target = $('[id*="N"][class="brand"]');

  // :target
  $target = $(':target');

  // $target = $('article h2:first-child');

  // 선택된 집합(요소)에 클래스 속성 설정
  $target.addClass('selected');


  ////////////////////
  // jQuery Filters //
  ////////////////////

  // :first
  // :last
  // :eq(number)
  // :lt(number)
  // :gt(number)
  // :header
  // :contains(text)
  // :not(selector)
  // :has(selector)
  // :parent
  // :empty

  // jQuery.fn === jQuery.prototype
  // jQuery 플러그인 제작
  $.fn.gt = function(n) {
    return this.slice(n+1);
  };

  // :hidden
  // :visible
  // :animated

  return {
    $: jQuery // 비공개 멤버인 jQuery에 접근 가능한 유일한 방법: 특권 부여
  };

})(this, this.jQuery.noConflict(true));

//////////////////////////////////////////
// this.jQuery.noConflict(true) 처리 결과
//////////////////////////////////////////
// $ != jQuery
// jQuery === undefined
// fds.$ === jQuery
//////////////////////////////////////////

/**
 * --------------------------------
 * Module B: using `fds`
 */
(function(fds){
  'use strict';
  var jQuery_version = fds.$().jquery;

  console.log('jQuery_version:', jQuery_version);

})(this.fds);