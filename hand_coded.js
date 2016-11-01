

$(document).ready(function(){
var coolClass = "green-text" + " text-lighten-4";
// (function floaty(){
//   $('.float').animate({bottom: '+=3px'},900, function(){
//     $('.float').animate({bottom: '-=3px'},900, floaty())
//   });
// })();
// /* second floating function moving at a different speed. */
// (function floatyB(){
//   $('.float-b').animate({bottom: '+=3px'},1000, function(){
//     $('.float-b').animate({bottom: '-=3px'},1000, floatyB())
//   });
// })();
//
// let floatMellow = () => {
//   $('.float-c').animate({bottom: '+=1'}, 1000, ()=>{
//     $('.float-c').animate({bottom: '-=2'}, 1000, floatMellow())
//   });
// };


  /* javascript goes here temporarily */
  // (incoming, projects) => {
  //   let projectName = incoming;

$('.top-divs, .nav-link').on('click', (e) => {
  let selectedDiv = e.currentTarget;
  $.get({
     url: '/project_details',
     cache: false,
  success: (result) => {
     console.log("Success" + result);
     let obtained = $('#flashy-content');
     obtained.html(result);
     $('#put-here').html(selectedDiv);
     let currentDiv = $('#' + selectedDiv.id)
     currentDiv.animate({
       left: "+=400",
       width: "+=80",
       height: "+=80"
    }, 800)
  },
  error: (err) => {
    console.log("err" + JSON.stringify(err));
    }
  }, 'html', () => {
    //nothing
  });
});

  $(".button-collapse").sideNav({
    menuWidth: 400,
    closeOnClick: false
  });


  $('.top-icon').mouseover(function(){
    $(this)
    .removeClass('white-text', 5000)
    .addClass(coolClass, 5000);
  });

  $('.top-icon').mouseleave(function(){
    $(this)
    .removeClass('green-text', 5000)
    .addClass('white-text', 5000);
  });
});
