

var Portofolio = {};

Portofolio.UI = {
  init: function(){
    
    offset = $(".main-navbar").offset().top; //Called only once for initial offset for top
    
  },
  scrolled: function(){
      
      
      var curr_position=$(window).scrollTop();
    
      if(curr_position > offset){
	//$('.main-navbar').addClass('resize');
        //$('.main-navbar').css({'position':'fixed','top':0,width:'0%'}); Unable when I am done with MP
        $('.main-navbar').css({'position':'fixed','top':0,width:'100%',height:'10%','margin-top':'0px','font-size':'0.6em'});
        //$('a').css({'padding':'0px','padding-left': '10px', 'padding-top': '20px'}); This also
      }

      else{
        
	//$('.main-navbar').removeClass('resize');
        $('.main-navbar').css({'position':'fixed','top':0,width:'100%',height:'15%','font-size':'0.9em'});
        //$('a').css({'padding':'20px'});
      }
    
    if(curr_position<939){
      $('.menu').removeClass('highlight');
      $('#mebutton').addClass("highlight");
      
    }
    else if(curr_position>939&&curr_position<1690){
      $('.menu').removeClass('highlight');
      $('#pastbutton').addClass("highlight");
    }
    else if(curr_position>1690){
      $('.menu').removeClass('highlight');
      $('#experiencebutton').addClass("highlight");
    }
    else
      $('.menu').removeClass('highlight');
   
    
      
    
    
      
  },
  clickedScroll: function(id){
    
    
      $('html, body').animate({
          scrollTop: $("#"+id).offset().top
      }, 2000); 
    
  },
  
  centeringVert: function(){
    $('#mecontent').css({'margin-top' : $(this).height()/2});
    

  }
  



};



$(document).ready(function () {
  Portofolio.UI.init();
  
  
  
  
  $(window).scroll(function(){
    Portofolio.UI.scrolled();
  });
  
  
  $(".menu").click(function(event) {
    
    var clicked_id=event.target.id;
    
    clicked_id=clicked_id.replace('button',' ');
    clicked_id.trim();
    
    Portofolio.UI.clickedScroll(clicked_id);
  
  });
  $("#next").click(function(event) {
    var factor = $('#past').scrollLeft();
    if(factor==3612){ $('#past').animate({"scrollLeft":"0"});}
    else{$('#past').animate({"scrollLeft":"+=516"});}
  });
  $("#previous").click(function(event) {
    var factor = $('#past').scrollLeft();
    if(factor!=0){ 
      
      $('#past').animate({"scrollLeft":"-=516"});
    
    }

  });
  
  
  $('.experience').click(function(event){
      $('.modalDialog').css({'display':'block'});
  });
  

  
  
});






