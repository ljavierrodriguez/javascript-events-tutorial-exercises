/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************************************!*\
  !*** ./exercises/06-add-listener-with-js/index.js ***!
  \****************************************************/
window.onload = function myLoadFunction() {
  alert("The website just finished loading!"); //some code here

  var theGreen = document.querySelector('#theGreen');
  theGreen.addEventListener('click', myListenerFunction);
}; //the listener function here


function myListenerFunction() {
  alert("woohoo!");
}
/******/ })()
;
//# sourceMappingURL=index.js.map