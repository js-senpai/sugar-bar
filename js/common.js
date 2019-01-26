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
var show = true;
    var countbox = ".col-gknow";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
          $('.col-gknow').spincrement({
  	       from: 0,
  	       duration: 5000
           });
           show = false;
        }
    });
 $('.services-item').hover(function(){
 	$(this).find('.op-hover').css('visibility','visible');
 },function(){
 	$(this).find('.op-hover').css('visibility','hidden');
 });
  var col_serviced = $('.services-item').width(),col_serviced_nav = $('.services-nav-item').width();
  $('.services-container').css('width','calc(100%*'+col_serviced+')');
  $('.services-nav').css('width','calc(100%*'+col_serviced_nav+')');
  var cont_services = 1;
  var slideNow = 1;
  var slideCont = $('.services-container').children().length;
  var translateWidth = 0,translate_nav = 0;
//Функция переключения блкоов услуг влево
  function services_right(){
    if(slideNow == slideCont || slideNow<=0 || slideNow> slideCont){
    	$('.services-container').css('transform','translate(0,0)');
    	slideNow = 1;
    }else{ 
        translateWidth =  ($('.op-hover').width() + 70 + 70) * slideNow;
        translate_nav = $('.serviced-nav-container').width() *
        $('.services-container').css({
            'transform': 'translate(-' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(-' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(-' + translateWidth + 'px, 0)'        	
        });
        slideNow++;
    }
    if(cont_services >= $('.services-nav-item').length){
    	cont_services = 1;
    	$('.services-nav .services-nav-item:nth-of-type('+cont_services+')').addClass('active-service').siblings().removeClass('active-service');
    	$('.serviced-nav-wrapper').css('transform','translate(0,0)');
    }else{
        cont_services++;
        $('.services-nav .services-nav-item:nth-of-type('+cont_services+')').addClass('active-service').siblings().removeClass('active-service');
    }
    if(cont_services > 6){
    	translate_nav = $('.serviced-nav-wrapper').width();
         $('.serviced-nav-wrapper').css({
            'transform': 'translate(-' + translate_nav + 'px, 0)',
            '-webkit-transform': 'translate(-' + translate_nav + 'px, 0)',
            '-ms-transform': 'translate(-' + translate_nav + 'px, 0)'        	
        });
    }
  }
  $('.btn-services-right').click(function(){
  	setTimeout(services_right,500);
  });
//Функция переключения блкоов услуг вправо
  function services_left(){
    if(slideNow<=0){
    	$('.services-container').css('transform','translate(0,0)');
    }else{ 
        translateWidth =  translateWidth - ($('.op-hover').width() + 70 + 70);
        translate_nav = $('.serviced-nav-container').width() *
        $('.services-container').css({
            'transform': 'translate(-' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(-' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(-' + translateWidth + 'px, 0)'        	
        });
        slideNow++;
    }
    if(cont_services <= 1){
    	cont_services = 1;
    	$('.services-nav .services-nav-item:nth-of-type('+cont_services+')').addClass('active-service').siblings().removeClass('active-service');
    	$('.serviced-nav-wrapper').css('transform','translate(0,0)');
    }else{
        cont_services--;
        $('.services-nav .services-nav-item:nth-of-type('+cont_services+')').addClass('active-service').siblings().removeClass('active-service');
    }
    if(cont_services < 7){
    	$('.serviced-nav-wrapper').css('transform','translate(0,0)');
    }
  }
  $('.btn-services-left').click(function(){
  	setTimeout(services_left,500);
  });
});
