var canvas, ctx, mousePos, mouseButton, circleX, circleY;
var radius = 15;

window.onload = function init() {
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  ctx.fillStyle = "green";
  circleX = canvas.width/2;
  circleY = canvas.width/2;

  canvas.addEventListener('mousemove', function (evt) {
    mousePos = getMousePos(canvas, evt);
    console.log(mousePos.x + ", " + mousePos.y);
  }, false);

    canvas.addEventListener('mouseup', function (evt) {
      mouseButton = evt.button;
      requestAnimationFrame(drawCircle);
  }, false);
};

function drawCircle() {
  alert("click!");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(mousePos.x, mousePos.y, radius, 0, 2*Math.PI, false);
  console.log("Circle coords: " + mousePos.x + ", " + mousePos.y);
  ctx.fill();
}

function getMousePos(canvas, evt) {
    // necessary to take into account CSS boudaries
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}




