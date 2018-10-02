//плагин прокрутки к якорям

$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
});


$(function() {  

     $(".clients__btn--second").click(function() { 
	  $(".clients__text--first").fadeOut();
      $(".clients__text--second").fadeIn(1000); 
     }); 

     $(".clients__btn--third").click(function() { 
	  $(".clients__text--first").fadeOut();
      $(".clients__text--second").fadeOut(); 
	  $(".clients__text--third").fadeIn(1000);
     }); 
	
	 $(".clients__btn--first").click(function() {
      $(".clients__text--second").fadeOut(); 
	  $(".clients__text--third").fadeOut();
	  $(".clients__text--first").fadeIn(1000);
	 })

     }); 