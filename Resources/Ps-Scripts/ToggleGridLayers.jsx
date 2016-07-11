/**
 * ------------------------------------------------------------------
 * toggleGridLayers.jsx @ yamoo9.net 2015
 * ------------------------------------------------------------------
 */
#target photoshop

// 그리드 토글 레이어(그룹) 이름 설정
var gridLayerName = 'GRID',

	main = function() {
		// 문서가 열려지 있는지 확인
		if( documents.length ) {

			// 열려진 문서가 존재한다면 실행
			(function(activeDocument){

				// gridLayerName, toggleType 미설정 시, 사용자에게 확인 처리
				if (typeof gridLayerName == 'undefined') {
					gridLayerName = prompt('토글하고자 하는 레이어 이름을 입력해주세요.', 'GRID');
				}

				// 그룹 레이어 토글 함수 실행
				toggleGridGroupLayer(activeDocument, gridLayerName);

			})(app.activeDocument);

		} else {
			alert("현재 열려진 문서가 존재하지 않습니다.\nToggleGridLayers 기능을 사용하려면\n열려진 문서가 존재해야 합니다.");
		}
	};

main();


/* ------------------------------------------------------------------
 * 그룹 레이어 토글 함수
 * ------------------------------------------------------------------ */
function toggleGridGroupLayer(ref, name) {
	var groups = ref.layerSets;
	for(var i=0, l=groups.length; i<l; i++) {
		var group = groups[i];
		if ( group.name.toLowerCase() === name.toLowerCase() ) {
			group.visible = !group.visible;
			break;
		} else {
			toggleGridGroupLayer(group, name);
		}
	}
}