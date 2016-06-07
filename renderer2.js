var canvas = document.getElementById('target');
var context = canvas.getContext('2d');

const ipcRenderer = require('electron').ipcRenderer;
function draw(){


//here we want to grab the canvas data from main.js
//and print it to target canvas

    window.requestAnimationFrame(draw)
}
draw();
ipcRenderer.on("copy_context", function(event, args) {
    console.log(args);
    context = args[0]; // but args[0] maybe null
});
