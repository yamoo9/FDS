/*! vue-understanding-components.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  // 전역 컴포넌트 등록하고 쓰다가...
  // 왜 분리해야 하는지 깨닫게 되면...
  // 그 때 그 때 그 때 하세요.

  var app = new Vue({
    el: '#app',
    components: {
      appHeader: {
        props: ['content'],
        template: `
          <header class="app-header">
            <app-brand content="hi, today good day"></app-brand>
            <p>{{content}}</p>
          </header>
        `,
        components: {
          appBrand: {
            props: ['content'],
            template: `
              <h1 class="app-brand">{{content}}</h1>
            `,
            data: function() {
              return {};
            }
          }
        }
      }
    }
  });

  global.app = app;

})(window, window.Vue);
