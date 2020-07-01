$(function () {
    commonUI.init();
    if($('#mainPage').length) { mainUI.init(); }
});

// common UI
var commonUI = {
    init: function() {
        this.test();
    },
    test: function() {
        console.log('commonPage');
    }
}
// main UI
var mainUI = {
    init: function() {
        this.test();
    },
    test: function() {
        console.log('mainPage');
    }
}