$(function() {
  $('.main-slider').owlCarousel({
  	autoplay: true,
  	items: 1,
  	loop: true,
  	lazyLoad: true,
  	dots: false,
  	nav: true,
  	navText: ["<span class='nav-main-slider mdi mdi-chevron-left'></span>","<span class='nav-main-slider mdi mdi-chevron-right'></span>"]
  });
  var cont = 0;
  $('.master-slider-right').click(function(){ 
     if(cont >= 3){
     	cont = 0;
     }else{
     	cont++;
     }
     console.log(cont);
     var get_img = $('.master-slider-img')[cont],get_title = $('.master-slider-title')[cont],get_text = $('.master-slider-text')[cont];
     var get_attr = get_img.getAttribute('data-main-src'),get_title_text = get_title.textContent,get_text_text = get_text.textContent;
     $('.main-slider-img').css('background-image','url('+get_attr+')');
     $('.main-slider-title').text(get_title_text);
     $('.main-slider-text').text(get_text_text);
  });
  $('.master-slider-left').click(function(){
     if(cont <= 0){
     	cont = 3;
     }else{
     	cont--;
     }
     var get_img = $('.master-slider-img')[cont],get_title = $('.master-slider-title')[cont],get_text = $('.master-slider-text')[cont];
     var get_attr = get_img.getAttribute('data-main-src'),get_title_text = get_title.textContent,get_text_text = get_text.textContent;
     $('.main-slider-img').css('background-image','url('+get_attr+')');
     $('.main-slider-title').text(get_title_text);
     $('.main-slider-text').text(get_text_text);
  });
});
