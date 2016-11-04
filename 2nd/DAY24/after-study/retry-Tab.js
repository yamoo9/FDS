(function(){
  'use strict';

  window.$ = function(selector) {
    return document.querySelector(selector);
  };

})();

(function(){
  'use strict';

  function Tab( element ) {
    // this === Tab {}
    this.el = element;
  }

  window.Tab = Tab;

})();

(function(Tab){
  'use strict';

  var my_tab = new Tab( $('.my-tab') );

  console.log('my_tab.el:', my_tab.el);

})(window.Tab);