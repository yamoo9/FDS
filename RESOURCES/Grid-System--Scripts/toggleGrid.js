/*! toggleGrid.js © yamoo9.net, 2015 */
(function(global){
	'use strict';

	global.toggleGrid = function(container, className) {
		if (!container) { console.error('컨테이너에 해당되는 CSS 선택자를 입력해주세요.'); }
		var container = document.querySelector(container);
		className = className || 'grid';
		document.onkeydown = function(e) {
			var key = e.keyCode || e.which;
			// 사용자가 입력한 키가 Shift + G 키라면... 토글 그리드 실행
			// g === 71
			// d === 68 (Windows, Chrome 사용자)
			if (key === 71 && e.shiftKey === true) {
				container.classList.toggle(className);
			}
		}
	};

})(window);
