$(document).ready(function(){
    var w=window.innerWidth - 50;
    if(w>720){
        w=720;
    }
    console.log(w);
    var c=document.getElementById("myFrame");
    c.width=w;
});