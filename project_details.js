$(document).ready(() => {
  let link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.type = 'text/css';
  link.href = '/project_details.css';
  document.head.appendChild(link);

  // (function floatyB(){
  //   $('.float-main').animate({left: '+=3px'},1000, function(){
  //     $('.float-main').animate({left: '-=99px'},1000, floatyB())
  //   });
  // })();

$('.access-divs').on('click',(e) => {
  $(e.currentTarget).children('.white-text').removeClass('flow-text');
  $('.main').html(e.currentTarget.innerHTML);
  $(e.currentTarget).children('.white-text').addClass('flow-text');
});
$('.main').fadeIn(1000);
$('.access-divs').fadeIn(4000);

 })
