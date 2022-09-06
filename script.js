document.getElementById("page").onmousemove = function(e) {
    document.getElementById("magnify").style.top = e.pageY*1 + "px";
    document.getElementById("magnify").style.left = e.pageX*1 + "px";
}

document.getElementById("page").ontouchmove = function(e) {
    document.getElementById("magnify").style.top = e.touches[0].pageY*1 -350 + "px";
    document.getElementById("magnify").style.left = e.touches[0].pageX*1 -350 + "px";
}