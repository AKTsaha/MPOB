$(document).ready(function() {
  start();
});
document.getElementById('title').addEventListener("webkitAnimationEnd", end);//activate after animation complete
function start(){//blur on loading page
  $(".side-bar").css("filter","blur(15px)");
  $(".tag-box").css("filter","blur(15px)");
  $(".option").css("filter","blur(15px)");
}
function end(){//un blur after animatin complete
  $(".side-bar").css("filter","blur(0px)");
  $(".tag-box").css("filter","blur(0px)");
  $(".option").css("filter","blur(0px)");
}
$(".search-icon").click(function() {
    $(".search-box").css({"animation-play-state": "running"});
});
$(".page-no").click(function(e){
    console.log(e.target.innerText);
    
});
