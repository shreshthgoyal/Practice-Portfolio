console.log("Hello World!");

console.clear();
function typingEffect(element,speed){
  let text=element.innerHTML;
  element.innerHTML="";
 var i=0;
  var timer=setInterval(function(){
    if(i<text.length){
      element.append(text.charAt(i))
      i++;
    }else{
      clearInterval(timer);
    }
  },speed)
  
}

const h1=document.querySelector('h1');
typingEffect(h1,200);


(function() {
	
	var SkillsBar = function( bars ) {
		this.bars = document.querySelectorAll( bars );
		if( this.bars.length > 0 ) {
			this.init();
		}	
	};
	
	SkillsBar.prototype = {
		init: function() {
			var self = this;
			self.index = -1;
			self.timer = setTimeout(function() {
				self.action();
			}, 500);
			
			
		},
		select: function( n ) {
			var self = this,
				bar = self.bars[n];
				
				if( bar ) {
					var width = bar.parentNode.dataset.percent;
				
					bar.style.width = width;
					bar.parentNode.classList.add( "complete" );	
				}
		},
		action: function() {
			var self = this;
			self.index++;
			if( self.index == self.bars.length ) {
				clearTimeout( self.timer );
			} else {
				self.select( self.index );	
			}
			
			setTimeout(function() {
				self.action();
			},500);
		}
	};
	
	window.SkillsBar = SkillsBar;
	
})();

(function() {
	document.addEventListener( "DOMContentLoaded", function() {
		var skills = new SkillsBar( ".skillbar-bar" );
	});
})();


$(window).scroll( function(){

    //get scroll position
    var topWindow = $(window).scrollTop();
    //multipl by 1.5 so the arrow will become transparent half-way up the page
    var topWindow = topWindow * 1.5;
    
    //get height of window
    var windowHeight = $(window).height();
        
    //set position as percentage of how far the user has scrolled 
    var position = topWindow / windowHeight;
    //invert the percentage
    position = 1 - position;
  
    //define arrow opacity as based on how far up the page the user has scrolled
    //no scrolling = 1, half-way up the page = 0
    $('.arrow-wrap').css('opacity', position);
  
  });
  
  
  
  
  
  
  //Code stolen from css-tricks for smooth scrolling:
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

