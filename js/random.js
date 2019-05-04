$(document).ready(function(){
    $("button").click(function(){
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        var foodimg = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg'];
        $("H1").text($("#choices li").eq(randomChildNumber).text());
        $("#food").attr('src', foodimg[randomChildNumber]);
        $("#food").removeAttr("hidden"); 
    });
});