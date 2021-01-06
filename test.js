var d= document.getElementsByClassName("cen");
window.onscroll=function(){
    var sc = window.scrollY;
    $(".cen").css({"height":200+(sc/5),
                    "width":200+(sc/5),
                   "transform":"rotate("+((sc*10)/360)+"deg)"
                  });
}

    
