$(function(){
   $('.main_txt').fadeIn(2000);
   $('.header_right li:nth-child(1)').click(function(){
      var scroll = $('#home').offset().top;
      $('body,html').animate({scrollTop:scroll},1000);
   });
   $('.header_right li:nth-child(2)').click(function(){
      var scroll = $('#skill').offset().top;
      $('body,html').animate({scrollTop:scroll},1000);
   });
   $('.header_right li:nth-child(3)').click(function(){
      var scroll = $('#myworks').offset().top;
      $('body,html').animate({scrollTop:scroll},1000);
   });
   $('.header_right li:nth-child(4)').click(function(){
      var scroll = $('#contact').offset().top;
      $('body,html').animate({scrollTop:scroll},1000);
   });
   $('.pofol li a').click(function(){
      var scroll = $('.pofol_screen').offset().top -140;
      $('body,html').animate({scrollTop:scroll},500);
      $('.view_list').fadeIn(2000);
   });
   $('.pofol_list li:nth-child(2)').click(function(){
    $('.pofol .respon, .pofol .mobile').addClass('on');
   });
   $('.pofol_list li').click(function(){
      $(this).addClass('on').siblings().removeClass('on')
   });
   $('.pofol li').click(function(){
      var pofol = $(this).index();
      $('.pofol_view li').eq(pofol).show().siblings().hide();
   });
   $(window).scroll(function(){
      var num = $(document).scrollTop();
      if(num > 0){
         $('#header').fadeIn();
      }else{
         $('#header').fadeOut();
      }
   });
   
});