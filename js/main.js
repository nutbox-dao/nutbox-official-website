(function ($) {
 "use strict";
 
	jQuery(window).on('load', function() {
		jQuery("#status").fadeOut();
		jQuery("#preloader").delay(350).fadeOut("slow");
	});
    jQuery('.mobile-menu nav').meanmenu({
        meanScreenWidth: "992",
    });


    $( ".lng-in" ).on("click",function() {
    	$(".lng-out").addClass("lng-out-class")
	    $( ".lng-out" ).slideToggle("slow");

	});

smoothScroll.init();



/*--------------------------
scrollUp
---------------------------- */	
	// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {       
        $('#return-to-top').fadeIn(200);   
    } else {
        $('#return-to-top').fadeOut(200);  
    }
});
$('#return-to-top').click(function() {     
    $('body,html').animate({
        scrollTop : 0                
    }, 500);
});


	/*----------------------------
		wow js active
		------------------------------ */
			new WOW().init();
	
 
/*----------------------------
owl active
------------------------------ */  
	$(".blog-slider").owlCarousel({
		autoPlay: false, 
		slideSpeed:2000,
		pagination:false,
		navigation:true,	  
		items : 3,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [992,2],
		itemsTablet: [768,2],
		itemsMobile : [480,1],
	});

  $(".tokes-chart-slider").owlCarousel({
    autoPlay: false, 
    slideSpeed:2000,
    pagination:false,
    navigation:true,    
    items : 1,
    /* transitionStyle : "fade", */    /* [This code for animation ] */
    navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [992,1],
    itemsTablet: [768,1],
    itemsMobile : [479,1],
  });


	
  // Main Slider Animation
  
  (function( $ ) {

  	if(!isPc()) {
  		$("#wd_scroll_wrap_4").hide();
  		$(".wd_scroll_wrap_6").hide();
  	}

	//Function to animate slider captions 
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	//Variables on page load 
	var $myCarousel = $('#carousel-example-generic'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
		
	//Initialize carousel 
	$myCarousel.carousel();
	
	//Animate captions in first slide on page load 
	doAnimations($firstAnimatingElems);
	
	//Pause carousel  
	$myCarousel.carousel('pause');
	
	
	//Other slides to be animated on carousel slide event 
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});  

	
})(jQuery);

	
	//Single page scroll js
	$('#cssmenu ul li a').on('click' , function(e){
	  $('#cssmenu ul li').removeClass('active');
	  $(this).parent().addClass('active');
	  var target = $('[section-scroll='+$(this).attr('href')+']');
	  e.preventDefault();
	  var targetHeight = target.offset().top-parseInt('80', 10);
	  $('html, body').animate({
	   scrollTop: targetHeight
	  }, 1000);
	});
	
	$(window).scroll(function() {
	  var windscroll = $(window).scrollTop();
	  var target = $('#cssmenu ul li');
	  if (windscroll >= 0) {
	   $('[section-scroll]').each(function(i) {
		if ($(this).position().top <= windscroll + 90) {
		 target.removeClass('active');
		 target.eq(i).addClass('active');
		}
	   });
	  }else{
	   target.removeClass('active');
	   $('#cssmenu ul li:first').addClass('active');
	  }

	});

	
		// Menu js for Position fixed
	$(window).scroll(function(){
		var window_top = $(window).scrollTop() + 1; 
		if (window_top > 800) {
			$('.gc_main_menu_wrapper').addClass('menu_fixed animated fadeInDown');
		} else {
			$('.gc_main_menu_wrapper').removeClass('menu_fixed animated fadeInDown');
		}
	});
	
	
	 /*--- Responsive Menu Start ----*/

$("#toggle").on("click", function(){
  var w = $('#sidebar').width();
  var pos = $('#sidebar').offset().left;
 
  if(pos == 0){
  $("#sidebar").animate({"left": -w}, "slow");
  }
  else
  {
  $("#sidebar").animate({"left": "0"}, "slow");
  }
  
});

$("#toggle_close").on("click", function(){
  var w = $('#sidebar').width();
  var pos = $('#sidebar').offset().left;
 
  if(pos == 0){
  $("#sidebar").animate({"left": -w}, "slow");
  }
  else
  {
  $("#sidebar").animate({"left": "0"}, "slow");
  }
  
});

/*--------------------------
scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 	   
 
})(jQuery); 


/*-------------waves effect js------------------*/
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
		  window.webkitRequestAnimationFrame || 
		  window.mozRequestAnimationFrame    || 
		  window.oRequestAnimationFrame      || 
		  window.msRequestAnimationFrame     ||  
		  function( callback ){
			window.setTimeout(callback, 1000 / 60);
		  };
})();

var canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");

var W = window.innerWidth, H = window.innerHeight;
canvas.width = W;
canvas.height = H;

var particleCount = 100,
	particles = [],
	minDist = 70,
	dist;

function paintCanvas() {
	ctx.fillStyle = "#f8b62c";
	

	ctx.fillRect(0,0,W,H);
}


function Particle() {

	this.x = Math.random() * W;
	this.y = Math.random() * H;
	
	this.vx = -1 + Math.random() * 2;
	this.vy = -1 + Math.random() * 2;

	this.radius = 4;
	
	this.draw = function() {
		ctx.fillStyle = "rgba(255, 255, 255, 0.42)";
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		
		// Fill the color to the arc that we just created
		ctx.fill();
	}
}

for(var i = 0; i < particleCount; i++) {
	particles.push(new Particle());
}

function draw() {
	

	paintCanvas();

	for (var i = 0; i < particles.length; i++) {
		p = particles[i];
		p.draw();
	}
	
	update();
}

function update() {

	for (var i = 0; i < particles.length; i++) {
		p = particles[i];
		
		// Change the velocities
		p.x += p.vx;
		p.y += p.vy

		if(p.x + p.radius > W) 
			p.x = p.radius;
		
		else if(p.x - p.radius < 0) {
			p.x = W - p.radius;
		}
		
		if(p.y + p.radius > H) 
			p.y = p.radius;
		
		else if(p.y - p.radius < 0) {
			p.y = H - p.radius;
		}
		

		for(var j = i + 1; j < particles.length; j++) {
			p2 = particles[j];
			distance(p, p2);
		}
	
	}
}

function isPc() {
   var userAgentInfo = navigator.userAgent;
   var Agents = ["Android", "iPhone",
      "SymbianOS", "Windows Phone",
      "iPad", "iPod"];
   var flag = true;
   for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
         flag = false;
         break;
      }
   }
   return flag;
}


function distance(p1, p2) {
	var dist, colorIndex;
		dx = p1.x - p2.x;
		dy = p1.y - p2.y;
	
	dist = Math.sqrt(dx*dx + dy*dy);

	if(dist <= minDist) {
		// Draw the line
		ctx.beginPath();
    colorIndex = parseInt((100.0 * dist/minDist))+25;
		ctx.strokeStyle = "hsla(290," + colorIndex + "%,50%,"+ (1.100-dist/minDist) +")";
		ctx.moveTo(p.x, p.y);
		ctx.lineTo(p2.x, p2.y);
		ctx.stroke();
		
		var ax = dx/2000,
			ay = dy/2000;
		
		p1.vx -= ax;
		p1.vy -= ay;
		
		p2.vx += ax;
		p2.vy += ay;
	}
}

function animloop() {
	draw();
	requestAnimFrame(animloop);
}

animloop();