var Portofolio={};Portofolio.UI={init:function(){offset=$(".main-navbar").offset().top},scrolled:function(){var a=$(window).scrollTop();a>offset?($(".main-navbar").css({position:"fixed",top:0,width:"0%"}),$("a").css({padding:"0px","padding-left":"10px","padding-top":"2px"})):($(".main-navbar").css({position:"relative",width:"100%"}),$("a").css({padding:"20px"}))},clickedScroll:function(a){alert(a),$("html, body").animate({scrollTop:$("#"+a).offset().top},2e3)}},$(document).ready(function(){Portofolio.UI.init(),$(window).scroll(function(){Portofolio.UI.scrolled()}),$(".menu").click(function(a){var b=a.target.id;b=b.replace("button"," "),b.trim(),Portofolio.UI.clickedScroll(b)}),$("button").click(function(){var a=$("#past").scrollLeft();$("#past").animate(3500==a?{scrollLeft:"0"}:{scrollLeft:"+=516"})})});