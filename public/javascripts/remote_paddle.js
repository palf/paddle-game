var touch_area = document.getElementById("touch_area");
var hammertime = Hammer(touch_area, {
  transform: false
});


var start_position = {};


hammertime.on("dragstart", function(event) {

})


hammertime.on("touch drag", function(event) {
  var widthPosition = (event.gesture.center.pageX - 20) / (touch_area.offsetWidth);
  var heightPosition = (event.gesture.center.pageY) / (touch_area.offsetHeight);
  on_gesture(heightPosition);
})


hammertime.on("dragend", function(event) {
    // on_gesture(event);
})


var on_gesture = function(data) {
  console.log(data);
}



