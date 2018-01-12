$(document).ready(function() {
	
	var n = Math.floor(Math.random() * 5)+1
	
	console.log(n);
	
	if (n===1){
		$('body').css({backgroundColor:'#52CCA4'});
	}
	
	if (n===2){
		$('body').css({backgroundColor:'#DF76A0'});
	}	
	
	if (n===3){
		$('body').css({backgroundColor:'#FFD182'});
	}	
	
	if (n===4){
		$('body').css({backgroundColor:'#59ABD7'});
	}
	
	if (n===5){
		$('body').css({backgroundColor:'#FF6A72'});
	}
	
	$('#sure').click(function(){
	
		if ($('h1').is(":contains('YES.')")) {	
		
			setTimeout(function() {$('h1').text("YES");}, 100);
			  
			setTimeout(function() {$('h1').text("YE");}, 200);
			  
			setTimeout(function() {$('h1').text("Y");}, 300);
			  
			setTimeout(function() {$('h1').text("O");}, 500);
			  
			setTimeout(function() {$('h1').text("OU");}, 600);
			  
			setTimeout(function() {$('h1').text("OUI");}, 700);
			  
			setTimeout(function() {$('h1').text("OUI.");}, 800);			  
		} else{
		
			setTimeout(function() {$('h1').text("OUI");}, 100);
			  
			setTimeout(function() {$('h1').text("OU");}, 200);
			  
			setTimeout(function() {$('h1').text("O");}, 300);
			  
			setTimeout(function() {$('h1').text("Y");}, 500);
			  
			setTimeout(function() {$('h1').text("YE");}, 600);
			  
			setTimeout(function() {$('h1').text("YES");}, 700);
			  
			setTimeout(function() {$('h1').text("YES.");}, 800);		
		
		}
		
	});
	
	$('.q').click(function(){
		
		if($(this).hasClass('active')){
		
		
		} else if (($(window).width() <= 801)){
		
			$('#faq .q').removeClass('active');
	
			$('#faq .q p').animate({height:'0'},800);
			
			$(this).addClass('active');
			
			$('.active p').animate({height:'35vw'},800);		
		
		} else if (($(window).width() >= 801)){
		
			$('#faq .q').removeClass('active');
	
			$('#faq .q p').animate({height:'0'},800);
			
			$(this).addClass('active');
			
			$('.active p').animate({height:'4vw'},800);	
		
		}
	
	});
	
		
});