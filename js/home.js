$(document).ready(function() {


});
setTimeout(alert("asdfbasd"), 3000);
function start(){
  $(".side-bar").css("filter","blur(10px)");
  $(".tag-box").css("filter","blur(10px)");
  $(".option").css("filter","blur(10px)");
}
function end(){
  $(".side-bar").css("filter","blur(0px)");
  $(".tag-box").css("filter","blur(0px)");
  $(".option").css("filter","blur(0px)");
}
$(".search-icon").click(function() {
    $(".search-box").css({"animation-play-state": "running"});
    //$(".search-box").delay(5000).css("animation-play-state", "paused");
});
