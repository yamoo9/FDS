"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*! Model.js © yamoo9.net, 2017 */

// Class Model
// Instance
// - CRUD
// - get()
// - post()
// - put()
// - delete()

// PRIVATE
// dataList 공개하지 않음
var _dataList = new WeakMap();

var Model = function () {
  // constructor <function>
  function Model() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Model);

    // 비공개 멤버 _dataList에 값을 설정
    _dataList.set(this, data);
  }
  // static methods <function.prop>


  _createClass(Model, [{
    key: "init",

    // instance methods <prototype>
    value: function init() {}
  }, {
    key: "getDataList",
    value: function getDataList() {
      // 비공개 멤버 _dataList를 반환
      return _dataList.get(this);
    }
  }, {
    key: "getData",
    value: function getData(id) {
      var dataList = _dataList.get(this);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = dataList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var data = _step.value;

          if (data.id && data.id === id) {
            return data;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "setData",
    value: function setData(id, data) {
      var dataList = _dataList.get(this);
    }
  }, {
    key: "updateData",
    value: function updateData() {}
  }, {
    key: "deleteData",
    value: function deleteData() {}
  }], [{
    key: "resetDataList",
    value: function resetDataList() {}
  }]);

  return Model;
}();

// class 를 사용하여 instance를 생성하는 문법


var music_list = new Model([{}]); // Model {}