

$(document).ready(function(){
var coolClass = "green-text" + " text-lighten-4";
let clickCount = 0;

// Alpha Arrays
var alpha_teamArr = [];
var alpha_medArr = [];
var alpha_sumArr = [];
var alpha_progArr = [];
var alpha_testArr = [];

// Beta Arrays
var beta_teamArr = [];
var beta_medArr = [];
var beta_sumArr = [];
var beta_progArr = [];
var beta_testArr = [];

// Cali Arrays
var cali_teamArr = [];
var cali_medArr = [];
var cali_sumArr = [];
var cali_progArr = [];
var cali_testArr = [];

//  Darwin Arrays
var darwin_teamArr = [];
var darwin_medArr = [];
var darwin_sumArr = [];
var darwin_progArr = [];
var arwin_testArr = [];


// Enigma Arrays
var enigma_teamArr = [];
var enigma_medArr = [];
var enigma_sumArr = [];
var enigma_progArr = [];
var enigma_testArr = [];

// Failsafe Arrays
var failsafe_teamArr = [];
var failsafe_medArr = [];
var failsafe_sumArr = [];
var failsafe_progArr = [];
var failsafe_testArr = [];


// Hard Coded Project Objects

// let alphaZero = {
//   name = "Alpha Zero",
//   summary = "This is a demo synopsis and I hear the Alpha Zero project is coming along nicely.",
//   progress = "This is a demo synopsis and I hear the Alpha Zero project is coming along nicely.",
//   team = ['Roger', 'Ryan', 'Michael', 'Tobias', 'Marjorie'],
//   tests = ['Product fails environmental standards, looking to reduce CO2 emissions.', 'Product functionality has exceeded expectations.'],
//   media = ['string_for_media_file']
// };

// let betaOne = {
//   name = "Beta One",
//   summary = "This is a demo synopsis and I hear the Alpha Zero project is coming along nicely.",
//   progress = "This is a demo synopsis and I hear the Alpha Zero project is coming along nicely.",
//   team = ['Roger', 'Ryan', 'Michael', 'Tobias', 'Marjorie'],
//   tests = ['Product fails environmental standards, looking to reduce CO2 emissions.', 'Product functionality has exceeded expectations.'],
//   media = ['string_for_media_file']
// };

// let caliTwo = {
//   name = "Cali Two",
//   summary = "This is a demo synopsis and I hear the Alpha Zero project is coming along nicely.",
//   progress = "This is a demo synopsis and I hear the Alpha Zero project is coming along nicely.",
//   team = ['Roger', 'Ryan', 'Michael', 'Tobias', 'Marjorie'],
//   tests = ['Product fails environmental standards, looking to reduce CO2 emissions.', 'Product functionality has exceeded expectations.'],
//   media = ['string_for_media_file']
// };

// let darwinThree = {
//   name = "Darwin Three",
//   summary = "This is a demo synopsis and I hear the Alpha Zero project is coming along nicely.",
//   progress = "This is a demo synopsis and I hear the Alpha Zero project is coming along nicely.",
//   team = ['Roger', 'Ryan', 'Michael', 'Tobias', 'Marjorie'],
//   tests = ['Product fails environmental standards, looking to reduce CO2 emissions.', 'Product functionality has exceeded expectations.'],
//   media = ['string_for_media_file']
// };

// let enigmaFour = {
//   name = "Enigma Four",
//   summary = "This is a demo synopsis and I hear the Alpha Zero project is coming along nicely.",
//   progress = "This is a demo synopsis and I hear the Alpha Zero project is coming along nicely.",
//   team = ['Roger', 'Ryan', 'Michael', 'Tobias', 'Marjorie'],
//   tests = ['Product fails environmental standards, looking to reduce CO2 emissions.', 'Product functionality has exceeded expectations.'],
//   media = ['string_for_media_file']
// };

// let fsFive = {
//   name = "Failsafe Five",
//   summary = "This is a demo synopsis and I hear the Alpha Zero project is coming along nicely.",
//   progress = "This is a demo synopsis and I hear the Alpha Zero project is coming along nicely.",
//   team = ['Roger', 'Ryan', 'Michael', 'Tobias', 'Marjorie'],
//   tests = ['Product fails environmental standards, looking to reduce CO2 emissions.', 'Product functionality has exceeded expectations.'],
//   media = ['string_for_media_file']
// };

$('.slideout-item').hide();

// Sidenav Functions

// Add Team
$('.team-btn').on('click', function (){
  var dropDiv = $(this).parent().attr('class'),
      divName = dropDiv.slice(0,-4),
      divID   = $('#' + divName),
      newTeam = $('.' + divName  + '-' + 'team-input').val(),
      items   = divID.attr('team');

    if (divName == 'alpha') {
      alpha_teamArr.push(newTeam);
      divID.attr({'team': alpha_teamArr});
    } else if (divName == 'beta') {
      beta_teamArr.push(newTeam);
      divID.attr({'team': beta_teamArr});
    } else if (divName == 'cali') {
      cali_teamArr.push(newTeam);
      divID.attr({'team': cali_teamArr});
    } else if (divName == 'darwin') {
      darwin_teamArr.push(newTeam);
      divID.attr({'team': darwin_teamArr});
    } else if (divName == 'failsafe') {
      failsafe_teamArr.push(newTeam);
      divID.attr({'team': failsafe_teamArr});
    };

    // if ($('.container .row .main').children().length < 2 ) {
    //   $('.container .row .main').append('<div class="itemShow"></div>') 
    // }; 
  $('.container .row .main .itemShow').html(divID.attr('team'));
});

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

$('.top-divs, .bottom-divs, .nav-link').on('click', (e) => {
  let selectedDiv = e.currentTarget;
  let currentDiv  = $('#' + selectedDiv.id);
  let selectedTeam = currentDiv.attr('team');
  $.ajax({
     type: 'GET',
     url: '/project_details',
     cache: false,
  success: (result) => {
    let currentDiv;
    let obtained = $('#flashy-content');
    let script = document.createElement('script');
    script.src = '/project_details.js';
    document.body.appendChild(script);
     // console.log("Success" + result);
     obtained.html(result);
     $('#put-here').attr('team', selectedTeam);
     $('#put-here').html(selectedDiv.innerHTML);
     $('#put-here').attr('id', selectedDiv.id);
    //  currentDiv.addClass('float');
  },
  error: (err) => {
    console.log("err" + JSON.stringify(err));
    }
  }, 'html', () => {
  })
});

  $(".button-collapse").sideNav({
    menuWidth: 400
  });

  $('.plus-icon').click((e) => {
    if(clickCount <= 0) {
    $(e.currentTarget).next().slideDown();
    e.stopPropagation();
    clickCount += 1;
    return clickCount;
  } else {
    $(e.currentTarget).next().slideUp();
    clickCount -= 1;
    e.stopPropagation();
    return clickCount;
  }
  })

  $('.input-data').click((e)=>{
    e.stopPropagation();
  })

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
