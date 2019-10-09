$(document).ready(function(){
    $("nav ul li a").click(function(){
     $("html, body").animate({
         'scrollTop':$(this.hash).offset().top
     },1000)

     $("nav").css({
         "position":"fixed",
         "top":"0px"
     });

     $("nav ul li a").eq(0).click(function(){
         $("nav").css("position","static");
     })
    });
});