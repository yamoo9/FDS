/*! toggleGrid.js @ 2017, yamoo9.net */
var doc = document;
var body = doc.body;

doc.addEventListener('keyup', toggleGrid);

function toggleGrid(e) {
    if (e.keyCode === 38 && e.shiftKey) {
        body.classList.toggle('show-grid');
    }
}