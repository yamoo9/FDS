/*! HTMLAudioElement.extension.js © yamoo9.net, 2017 */
;(function(global){
  'use strict';

  var Audio = global.HTMLAudioElement;
  Audio.fn  = Audio.prototype;

  // HTMLAudioElement.prototype 객체 확장

  if ( !Audio.fn.stop ) {
    Audio.fn.stop = function() {
      this.pause();
      this.currentTime = 0;
    };
  }

  if ( !Audio.fn.getProgress ) {
    Audio.fn.getProgress = function(preciusion) {
      var percent = this.currentTime / this.duration * 100;
      return percent.toFixed( preciusion || 0 );
    }
  }

  if ( !Audio.getReadableTime ) {
    Audio.getReadableTime = function(seconds){
      var min, sec;
      seconds = Math.floor( seconds );
      min = Math.floor( seconds / 60 );
      min = min >= 10 ? min : '0' + min;
      sec = Math.floor( seconds % 60 );
      sec = sec >= 10 ? sec : '0' + sec;
      return min + ':' + sec;
    };
  }

})(window);
