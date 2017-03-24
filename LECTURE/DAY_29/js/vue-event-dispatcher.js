/*! vue-event-dispatcher.js © yamoo9.net, 2017 */

(function(global, Vue){
  'use strict';

  // 이벤트 관리자 객체
  var ev_dispatcher = new Vue();

  // console.group('Vue 인스턴스 메소드');
  //   console.log(!!Vue.prototype.$emit);
  //   console.log(!!Vue.prototype.$on);
  //   console.log(!!Vue.prototype.$off);
  // console.groupEnd('Vue 인스턴스 메소드');

  // Vue 인스턴스 생성
  global.app = new Vue({
    el: '#app',
    components: {
      'app-listener': {
        template: `
          <p>listener count: {{ listener_count }}</p>
        `,
        data: function() {
          return {
            listener_count: 1
          };
        },
        methods: {
          updateListenerCount: function(v) {
            this.listener_count *= v;
          }
        },
        created: function() {
          ev_dispatcher.$on('listen', function(v) {
            console.log(this.$root);
          });
        }
      },
      'app-fire': {
        data: function() {
          return {
            add_count: 2
          }
        },
        template: `
          <button
            type="button"
            class="app-fire"
            @click="notiListener">
            App Fire
          </button>
        `,
        methods: {
          notiListener: function() {
            // 누구한테? 일을 시킬 것인가?
            // ev_dispatcher (vue 인스턴스)
            ev_dispatcher.$emit('listen', this.add_count);
          }
        }
      }
    }
  });

})(window, window.Vue);
