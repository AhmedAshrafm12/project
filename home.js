$(function(){
    $('.slick_slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows:false,
        autoplay: true,
        autoplaySpeed: 1500,
      });
}) 


$('.overlay ul:first-of-type li').click(function(){
 $(this).siblings().css('background-color','#000').css('color','#fff');
 $(this).siblings().children().css('color','#666');
 $(this).css('background-color','#fff').css('color','#000');
 $(this).children().css('color','#000');
})


$('.overlay ul:last-of-type li').click(function(){
  $(this).siblings().css('background','none').css('color','#fff');
  $(this).siblings().children().css('color','#fff');
  $(this).siblings().css('transform','scaleX(1)')
  $(this).css('background-color','gold').css('color','#000');
  $(this).children().css('color','#000');
  $(this).css('transform','scaleX(1.1)');
 })


 $('.links li a').click(function(e){
  $(this).parent().siblings().removeClass('active');
   $(this).parent().addClass('active');
 })
/*  $(document).ready(function(){
 var ar=Array.from($('.links li a'));
 ar.forEach(el => {
  if($(el).attr('href')==document.title+'.html'){
  $(el).parent().siblings().removeClass('active');
  $(el).siblings().children('i').css('color','#959090');
  $(el).parent().addClass('active');
  $(el).children('i').css('color','gold');
  }
 });
 })
 */
 $('.gu h3 i').click(function(){
   $(this).parent().next().toggleClass('hid');
 if($(this).hasClass('fa-angle-up')){
   $(this).removeClass('fa-angle-up').addClass('fa-angle-down')
 }else{
  $(this).removeClass('fa-angle-down').addClass('fa-angle-up')
 }
});

