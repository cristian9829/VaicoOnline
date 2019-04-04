// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require rails-ujs
//= require activestorage
//= require turbolinks
// barra de navegacion blanco
function navDark(element){
	$("#effect-container-nav").removeClass("container-effect-hide")
	$("#effect-container-nav").addClass("container-effect-show")

	/*Color de la letra y fondo del navbar*/
	$(element).addClass("bg-third")
	$(element).addClass("navbar-dark")
	$(".nav-link").addClass("text-white")
	$(".nav-item .btn").removeClass("btn-outline-primary").addClass("btn-primary")
	/*Efecto padding navbar*/
	$(element).addClass("effect-nav-dark")
	$(element).removeClass("remove-efect-nav-dark")
}


// barra de navegacion transparente
function navTransparent (element){
	$("#effect-container-nav").removeClass("container-effect-show")
	$("#effect-container-nav").addClass("container-effect-hide")

	$(".nav-link").removeClass("text-white")
	$(".nav-item .btn").removeClass("btn-primary").addClass("btn-outline-primary")

	$(element).addClass("navbar-light")
	$(element).removeClass("bg-third navbar-dark")
	$(element).css({
		"background":"transparent",
		"transition":"background 2.50s"
	});
	$(element).removeClass("effect-nav-dark")
	$(element).addClass("remove-efect-nav-dark")
}

function navSm(){
	$("nav").css("background-color","#2A3462");
	$("nav .container .logo").hide();
	$("nav .container .logo-white").show();
}



$(document).ready(function(){ 
	$( window ).resize(function(){
    sizeWindow = $( window ).width();
    sizeMovil = 480;
    if (sizeWindow <= sizeMovil ) { /*Styles y events in device size screen movil*/
      console.log("movil")
      if ($(window).scrollTop() >= 0){
				navSm();
			}
  	}else{
  		console.log("normal")
  	}
  });

	$(window).scroll(function(){
		if ($(window).scrollTop() >= 15){
		  navDark("#nav-home");
		}else{
		  navTransparent("#nav-home"); 	
		}
	});
})

