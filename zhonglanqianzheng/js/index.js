$('.advantage .thumbnail').hover(function(){
	$(this).css({'background':'#0ba1e4'});
	$(this).find('.myfont').css('color','white');
	$(this).find('h3,h4').css('color','#fff')
},function(){
	$(this).css({'background':'#fff'});
	$(this).find('.myfont').css('color','#0ba1e4');
	$(this).find('h3,h4').css('color','#000')
})
$('.service ul li').hover(function(){
	if($(window).width()<767){
		$(this).css('background', 'red');
	}else{
		$(this).css({'background': 'blue','transform':'scaleY(1.2)'});
	}
	
})
