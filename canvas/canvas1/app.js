/**
 * 2018-3-18 Jifeng Cheng
 * 使用js创建canvas
 */
var CANVAS_WIDTH = 200, CANVAS_HEIGHT = 200;
window.onload = function() {
  createCanvas();
}

function createCanvas() {
  document.body.innerHTML = "<canvas id=\"myCanvas\" width=\""+CANVAS_WIDTH+"\" height=\""+CANVAS_HEIGHT+"\"></canvas>"
}