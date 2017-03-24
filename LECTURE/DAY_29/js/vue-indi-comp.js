/*! vue-indi-comp.js © yamoo9.net, 2017 */
(function(global, Vue){
  'use strict';

  var counter = {
    count: 0
  };

  Vue.component('simple-counter', {
    template: `
      <button
        @click="updateCount"
        type="button">{{number + counter.count}}</button>
    `,
    props: ['number'],
    data: function() {
      return {
        // 데이터 공유
        // 객체 참조
        // counter: counter
        counter: {
          count: 0
        }
      };
    },
    methods: {
      updateCount: function() {
        this.counter.count += this.number;
        console.log('updateCount 실행');
        this.$emit('listen');
      }
    }
  });

  var app = new Vue({
    el: '#app',
    methods: {
      healing: function() {
        console.log('아들아 내가 듣고 있다.');
      }
    }
  });

})(window, window.Vue);


new Vue({
  el: '#counter-event-example',
  methods: {
    updateTotal1: function() {
      this.total += 1;
    },
    updateTotal2: function() {
      this.total += 2;
    }
  },
  data: {
    total: 0
  },
  // 지역 컴포넌트 등록
  components: {
    'button-counter': {
      data: function() {
        return {
          count: 0
        }
      },
      props: ['name'],
      template: `
        <button @click="updateCount">{{count}}</button>
      `,
      methods: {
        updateCount: function() {
          this.count += 1;
          if (this.name === 'c1') {
            this.$emit('callme1');
          }
          if (this.name === 'c2') {
            this.$emit('callme2');
          }
        }
      }
    }
  }
})
