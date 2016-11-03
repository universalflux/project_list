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
  $('.main').html(e.currentTarget.innerHTML);
});
$('.main').show();
 $('.access-divs').fadeIn();

 })
