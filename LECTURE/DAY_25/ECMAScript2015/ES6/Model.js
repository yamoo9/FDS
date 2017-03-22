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
let _dataList = new WeakMap();

class Model {
  // constructor <function>
  constructor(data=[]) {
    // 비공개 멤버 _dataList에 값을 설정
    _dataList.set(this, data);
  }
  // static methods <function.prop>
  static resetDataList() {}
  // instance methods <prototype>
  init() {}
  getDataList() {
    // 비공개 멤버 _dataList를 반환
    return _dataList.get(this);
  }
  getData(id) {
    let dataList = _dataList.get(this);
    for (let data of dataList) {
      if ( data.id && data.id === id) { return data; }
    }
  }
  setData(id, data) {
    let dataList = _dataList.get(this);
  }
  updateData() {}
  deleteData() {}
}

// class 를 사용하여 instance를 생성하는 문법
let music_list = new Model([
  {}
]); // Model {}
