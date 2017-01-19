$(document).ready(function(){	
	$(".toggle").click(function(){
		$( ".menulist" ).slideToggle( "slow" );
	});
	
	// reset slide position
	function reset(){
		$(".slider ul li").each(function(index,elements){
			if($(".active").index() == index){
				$(elements).css({left: "0%"});
			}else{
				$(elements).css({left: "-25%"});
			}			
		});
	}

	// Reset Slide Positions
	reset();

	var isAnimating = false;

	// Move Slide
	function moveSlide(num){		
		var nextElement = num - 1;	
		
		if($(".active").index() != (num - 1) && !isAnimating){
			isAnimating = true;
			//Remove active side
			$(".active").animate({			
				left: "25%"
			}, 1000, "swing", function(){
				isAnimating = false;
			});
			$(".active").css({left: "-25%"}).removeClass("active");

			//add new slide
			$(".slider ul li:nth-child(" + num + ")").animate({			
				left: "0%"
			}, 1000, "swing",function(){
				$(".slider ul li:nth-child(" + num + ")").addClass("active");
				reset();
				isAnimating = false;
			});	
		}
		
	}

	// Get Slide to move
	$(".menulist li").click(function(event){
		moveSlide($(this).attr("date-link"));	
		event.preventDefault();				
	});	

});

