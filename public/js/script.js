var Portofolio={};Portofolio.UI={init:function(){offset=$(".main-navbar").offset().top},scrolled:function(){var a=$(window).scrollTop();$(".main-navbar").css(a>offset?{position:"fixed",top:0,width:"100%",height:"10%","margin-top":"0px","font-size":"0.6em"}:{position:"fixed",top:0,width:"100%",height:"15%","font-size":"1.3em"}),939>a?($(".menu").removeClass("highlight"),$("#mebutton").addClass("highlight")):a>939&&1690>a?($(".menu").removeClass("highlight"),$("#pastbutton").addClass("highlight")):a>1690?($(".menu").removeClass("highlight"),$("#experiencebutton").addClass("highlight")):$(".menu").removeClass("highlight")},clickedScroll:function(a){$("html, body").animate({scrollTop:$("#"+a).offset().top},2e3)}},$(document).ready(function(){Portofolio.UI.init(),$(window).scroll(function(){Portofolio.UI.scrolled()}),$(".menu").click(function(a){var b=a.target.id;b=b.replace("button"," "),b.trim(),Portofolio.UI.clickedScroll(b)}),$("#next").click(function(){var a=$("#past").scrollLeft();$("#past").animate(3612==a?{scrollLeft:"0"}:{scrollLeft:"+=516"})}),$(".experience").click(function(){$(".modalDialog").css({display:"block"})})});