// TypeScript
var Tab = (function () {
    function Tab(name) {
        this.name = name;
    }
    return Tab;
}());
var t = new Tab('my-tab');
console.log(t.name);
