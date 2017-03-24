/*! vue-demo.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  var Brand = {
    template: `
      <h1 class="app-brand">{{brand_content}}</h1>
    `,
    data: function() {
      return {
        brand_content: 'Vue Js Component'
      }
    }
  };

  var Header = {
    template: `
      <header class="app-header">
        <app-brand></app-brand>
      </header>
    `,
    components: {
      'app-brand': Brand
    }
  }



  // 전역 컴포넌트 등록
  // Vue.component 스태틱 메서드

  // Vue.component('app-brand', brand);

  // Vue.component('app-header', {
  //   template: `
  //     <header class="app-header">
  //       <app-brand></app-brand>
  //     </header>
  //   `
  // });


  // Vue.component('app-custom-el', {
  //   // 컴포넌트 템플릿
  //   template: `
  //     <ul>
  //       <li v-for="item of items">
  //         <span v-text="item"></span>
  //       </li>
  //     </ul>
  //   `,
  //   data: function() {
  //     return {
  //       items: [1, 3, 5, 7]
  //     };
  //   },
  //   mounted: function() {
  //     console.log('mounted');
  //   }
  // });

  var app = new Vue({
    el: '#app',
    // 지역 컴포넌트 등록
    components: {
      'app-header': Header,
      // 'app-brand': Brand,
    }
  });

  global.app = app;

})(window, window.Vue);
