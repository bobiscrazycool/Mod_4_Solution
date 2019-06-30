(function(window){
var sayBye = {};
var Word = "Good Bye";
sayBye.speak = function (name) {
  console.log(Word + " " + name);
}
window.byeSpeaker = byeSpeaker;
})(window);
