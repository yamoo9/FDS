this.FDS = (function(){

  var forEach = Array.prototype.forEach;

  // 외부에서 접근이 불가능한 생성자 함수
  function Tab(el) {
    this.el           = document.querySelector(el);
    this.tabs         = null;
    this.panels       = null;
    this.panelWrapper = null;
    this.active_index = 0;
    this.init();
  }

  Tab.prototype = {
    'init': function(){
      // console.log('애플리케이션 초기화');
      // this.el <- .tab-container

      // <div class="tab-container">
      this.el.classList.add('tab-container');

      // <ul class="tab-list">
      this.el.querySelector('ul').classList.add('tab-list');

      // <a class="tab">
      this.tabs = this.el.querySelectorAll('a');
      forEach.call(this.tabs, function(tab){
        tab.classList.add('tab');
      });

      // <div class="tab-panel-wrapper">
      var wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'tab-panel-wrapper');

      // <div class="tab-panel">
      this.panels = this.el.querySelectorAll('div');
      forEach.call(this.panels, function(panel){
        panel.classList.add('tab-panel');
        wrapper.appendChild(panel);
      });

      // 나중에 붙이는 이유
      this.el.appendChild(wrapper);

      //
      this.activeTab(this.active_index);

    },
    'removeTabs': function() {
      forEach.call(this.tabs, function(tab){
        tab.classList.remove('active');
      });
    },
    'activeTab': function(active_index) {
      this.active_index = active_index;
      this.removeTabs();
      this.tabs.item(this.active_index).classList.add('active');
    }
  };

  return {
    'Tab': Tab
  };

})(this);