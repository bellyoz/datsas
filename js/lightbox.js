$(document).ready(function(){
	alert("holi");
	

});

var lightbox = function(){
	$("body").append("<div id = 'popup' ></div>");
	$('#popup').css(function(){
		width : $(window).width() + "px",
        height : $(window).height() + "px",
        opacity : "0.4",
        filter : "alpha(opacity=40)",
        position : "absolute",
        background : "#000",
        left : "0px",
        top : "0px",
        z-index:  "100000"
	});
	//$("body").append("<div id='popup'><div class='cerrar'><a href='javascript:void(0)'><span class='icon-cross'></span></a></div><div id='popup_contenido'>luisrodriguez.pe</div></div>");
}