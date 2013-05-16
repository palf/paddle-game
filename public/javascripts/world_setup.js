window.requestAnimFrame = (function(){
  return function(callback, element){
    window.setTimeout(callback, 1000 / 60);
  };
})();


document.addEventListener("DOMContentLoaded", function() {
  init();

  (function loop(animStart) {
    update(animStart);
    draw();
    requestAnimFrame(loop);
  })();
}, false);


var SCALE = 10;
var NULL_CENTER = {x:null, y:null};

var bodyDefinitions = {};
var gameWorld = null;

var ctx = document.getElementById("world").getContext("2d");
var canvasWidth = ctx.canvas.width;
var canvasHeight = ctx.canvas.height;
var canvas = {
  center : {
    x : (canvasWidth / 2) / SCALE,
    y : (canvasHeight / 2) / SCALE
  }
}




var socket = io.connect();
socket.on("paddle data", function (data) {
  // console.log(data);
  var paddle = data['paddle']
  var yPosition = data['y_position']
  paddle = 'left';
  yPosition = data;
  movePaddle(paddle, yPosition);
});


function init() {
  for (var i = 0; i < initialState.length; i++) {
    var entityDefinition = initialState[i];
    bodyDefinitions[entityDefinition.id] = Entity.build(entityDefinition);
  }

  paddleWorld = new PaddleWorld();

  paddleWorld.addLeftPaddle();
  paddleWorld.addRightPaddle();
  paddleWorld.addBall();

  gameWorld = new GameWorld(60, false, canvasWidth, canvasHeight, SCALE);
  gameWorld.setBodies(bodyDefinitions, true);
  gameWorld.applyImpulse('ball', 0, 10);
}


function movePaddle(paddle, yPosition) {
  // console.log(paddle, yPosition);
  var id = 'left_paddle';
  var paddle = bodyDefinitions[id];


  var body = this.getBodyAt(x, y);

  var md = new b2MouseJointDef();
  md.target.Set(x, y);
  md.collideConnected = true;
  md.maxForce = 300.0 * body.GetMass();
  this.mouseJoint = this.world.CreateJoint(md);
  body.SetAwake(true);




  console.log(gameWorld);
  gameWorld.applyImpulse(id, -90, 10);

};


function update(animStart) {
  gameWorld.update();
  var bodiesState = gameWorld.getState();

  for (var id in bodiesState) {
    var entity = bodyDefinitions[id];
    if (entity) entity.update(bodiesState[id]);
  }
}


function draw() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  for (var id in bodyDefinitions) {
    var entity = bodyDefinitions[id];
    entity.draw(ctx);
  }
}
