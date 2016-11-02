

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
     let obtained = $('#flashy-content');
     obtained.html(result);
     $('#put-here').html(selectedDiv);
     let currentDiv = $('#' + selectedDiv.id)
     currentDiv.animate({
       left: "+=50",
       width: "+=70",
       height: "+=80"
    }, 800),
    displayProj(currentDiv);
  },
  error: (err) => {
    console.log("err" + JSON.stringify(err));
    }
  }, 'html', () => {
    //nothing
  });
});

function displayProj(currentDiv) {
  var floatA = "col s12 m6 l3 blue darken-4 push-right-second z-depth-3 top-divs float";
  var floatB = "col s12 m6 l3 blue darken-4 push-right-second z-depth-3 top-divs float-b";
  $.get({
     url: '/secondary',
     cache: false,
     success: function (res) {
      $('#put-here').append(res);
      $(currentDiv)
        .removeClass()
        .addClass(floatA)
        .insertBefore('#progress');
      $("#put-here > :nth-child(5n)").css("margin-left", "35px");
      $("#put-here > :nth-child(6n)").css("margin-left", "35px");
      $('.secondary').animate({
        left: "+=50",
        }, 700) 
     }
  });
};  

//Assuming the new li items fall under ul#list-new
var list_new = $('#list_new').html();
//Now replace the old one
$('#list-old').empty().append(list_new);  


  $('.container').on('click', '.secondary', function (){
    var floatA = "col s12 m6 l3 blue darken-4 push-right-second z-depth-3 top-divs float";
    var clone = $(this).clone().removeClass().addClass(floatA);  
    $('.container #put-here')
      .children()
      .eq(1)
      .replaceWith(clone)
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
