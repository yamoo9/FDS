/*! y9.map.js © yamoo9.net, 2017 */

(function(global, y9){
  'use strict';

  var map = Array.prototype.map;

  y9.map = function(data, callback) {
    map.call(data, callback);
  };

})(this, (this.y9 = this.y9 || function(){}) );
