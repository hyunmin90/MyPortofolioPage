

var Portofolio = {};

Portofolio.UI = {
  init: function(){
    
    offset = $(".main-navbar").offset().top; //Called only once for initial offset for top
    
  },
  scrolled: function(){
      
      
      var curr_position=$(window).scrollTop();

      if(curr_position > offset){
	//$('.main-navbar').addClass('resize');
        $('.main-navbar').css({'position':'fixed','top':0,width:'0%'});
      }

      else{
	//$('.main-navbar').removeClass('resize');
        $('.main-navbar').css({'position':'relative', width:'100%'});
      }
    
      
  },
  clickedScroll: function(id){
    
     alert(id); 
      $('html, body').animate({
          scrollTop: $("#"+id).offset().top
      }, 2000); 
    
  }
  



};



$(document).ready(function () {
  Portofolio.UI.init();
  $(window).scroll(function(){
    Portofolio.UI.scrolled();
  });
  
  $("a").click(function(event) {
    
    var clicked_id=event.target.id;
    
    clicked_id=clicked_id.replace('button',' ');
    clicked_id.trim();
    
    Portofolio.UI.clickedScroll(clicked_id);
  
  });
  
});




