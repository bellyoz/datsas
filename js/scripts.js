$(document).ready(function(){
	$("#nav").addClass("nav-menu");
	$("#nav").addClass("navbar-default");
	tam();
	scroll();
	team();
	new WOW().init();
	
	/*$("#img1").click(function(){
         lightbox(1); 
    });
    $("#img2").click(function(){
         lightbox(2); 
    });*/
});

var tam = function(){
	$(window).resize(function(){ 
		
		if($(window).width()<= 768){
		
			$("#nav").removeClass("navbar-default");
			$("#nav").removeClass("nav-menu");
			$("#nav").addClass("navbar-inverse");
		}else{
			$("#nav").removeClass("navbar-inverse");
			$("#nav").addClass("nav-menu");
			$("#nav").addClass("navbar-default");
		}
	})
} 
var scroll = function(){
	$(window).scroll(function(){
		if($(window).width()<= 768){
			$("#nav").removeClass("navbar-default");
			$("#nav").removeClass("nav-menu");
			$("#nav").addClass("navbar-inverse");
		}else{
			if($(window).scrollTop() <= 90){
				$("#nav").removeClass("navbar-inverse");
				$("#nav").addClass("nav-menu");
				$("#nav").addClass("navbar-default");
				
			}else{
				$("#nav").removeClass("navbar-default");
				$("#nav").removeClass("nav-menu");
				$("#nav").addClass("navbar-inverse");
			}
		}
	});
}
var team = function(){
	$('.team').each(function(){

	}).hover(function(){
		$(this).find(".text").slideDown("slow");
		$(this).find(".text").css("display","initial");	
	},function(){
		$(this).find(".text").slideUp("slow");
	});

	 
    
}
var lightbox = function(id){

	$('#'+id+' .popup_bg').css({
		"width": $(window).width() + "px",
        "height" : $(window).height() + "px",
        "opacity" : "0.4",
        "filter" : "alpha(opacity=40)",
        "position" : "absolute",
        "background" : "#000",
       "left" : "0px",
       "top" : "0px",
       "z-index":  "100000",
      	"display":  "initial"
	});
	$('#'+id+' .popup').css("display","initial");

	$(".popup_bg").click(function(){
		$(".popup, .popup_bg").fadeOut(1000,function(){
            $(".popup, .popup_bg").css("display","none");
         })
         
	})
	
	
   
}