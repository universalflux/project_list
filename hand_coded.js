

$(document).ready(function(){
var coolClass = "green-text" + " text-lighten-4";
let clickCount = 0;
let clickCountTwo = 0;

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

let alphaZero = {
  name:"Alpha Zero",
  summary: "This is a demo synopsis and I hear the Alpha Zero project is coming along nicely.",
  progress: "This is a demo synopsis and I hear the Alpha Zero project is coming along nicely.",
  team: ['Roger', 'Ryan', 'Michael', 'Tobias', 'Marjorie'],
  tests: ['Product fails environmental standards, looking to reduce CO2 emissions.', 'Product functionality has exceeded expectations.'],
  media: ['string_for_media_file']
};

let betaOne = {
  name:"Beta One",
  summary: "This is a demo synopsis and I hear the Alpha Zero project is coming along nicely.",
  progress: "This is a demo synopsis and I hear the Alpha Zero project is coming along nicely.",
  team: ['Roger', 'Ryan', 'Michael', 'Tobias', 'Marjorie'],
  tests: ['Product fails environmental standards, looking to reduce CO2 emissions.', 'Product functionality has exceeded expectations.'],
  media: ['string_for_media_file']
};

let caliTwo = {
  name: "Cali Two",
  summary: "This is a demo synopsis and I hear the Alpha Zero project is coming along nicely.",
  progress: "This is a demo synopsis and I hear the Alpha Zero project is coming along nicely.",
  team: ['Roger', 'Ryan', 'Michael', 'Tobias', 'Marjorie'],
  tests: ['Product fails environmental standards, looking to reduce CO2 emissions.', 'Product functionality has exceeded expectations.'],
  media: ['string_for_media_file']
};

let darwinThree = {
  name:"Darwin Three",
  summary: "This is a demo synopsis and I hear the Alpha Zero project is coming along nicely.",
  progress: "This is a demo synopsis and I hear the Alpha Zero project is coming along nicely.",
  team: ['Roger', 'Ryan', 'Michael', 'Tobias', 'Marjorie'],
  tests: ['Product fails environmental standards, looking to reduce CO2 emissions.', 'Product functionality has exceeded expectations.'],
  media: ['string_for_media_file']
};

let enigmaFour = {
  name:"Enigma Four",
  summary: "This is a demo synopsis and I hear the Alpha Zero project is coming along nicely.",
  progress: "This is a demo synopsis and I hear the Alpha Zero project is coming along nicely.",
  team: ['Roger', 'Ryan', 'Michael', 'Tobias', 'Marjorie'],
  tests: ['Product fails environmental standards, looking to reduce CO2 emissions.', 'Product functionality has exceeded expectations.'],
  media: ['string_for_media_file']
};

let fsFive = {
  name: "Failsafe Five",
  summary: "This is a demo synopsis and I hear the Alpha Zero project is coming along nicely.",
  progress: "This is a demo synopsis and I hear the Alpha Zero project is coming along nicely.",
  team: ['Roger', 'Ryan', 'Michael', 'Tobias', 'Marjorie'],
  tests: ['Product fails environmental standards, looking to reduce CO2 emissions.', 'Product functionality has exceeded expectations.'],
  media: ['string_for_media_file']
};

// Code To Create a New Project Div

let createNew = (data) => {
  let projectName = data.name + 'Nhc';
  let newDiv;
  newDiv += "<div id = '" + data.name.slice(0, ' ').toLowerCase() + "' class = 'col s12 m6 l3 blue darken-4 push-right z-depth-3 top-divs float'>";

  newDiv += '<h1 class = "zero-marg white-text center">'+ data.name + ' </h1>';

  newDiv += '<h1 class = "zero-marg white-text center">' + data.name + ' </h1>';
  newDiv += '</div>';
  $('#flashyContent').append(newDiv);
};

// Sidenav Functions

$('.hamburger').click((e) => {
  if(clickCountTwo <= 0) {
  $(e.currentTarget).addClass('is-active');
  clickCountTwo += 1;
  return clickCountTwo;
} else {
  $(e.currentTarget).removeClass('is-active');
  clickCountTwo -= 1;
  e.stopPropagation();
  return clickCountTwo;
}
});


  $('.reset-burger').hover((e) => {
    if (clickCountTwo >= 1) {
    clickCountTwo -= 1;
    $('.hamburger').removeClass('is-active');
   }
   return clickCountTwo;
});

// Add Team
$('.team-btn').on('click', function (){
  var dropDiv = $(this).parent().attr('class'),
      divName = dropDiv.slice(0,-4),
      divID   = $('#' + divName),
      newTeam = $('.' + divName  + '-' + 'team-input').val(),
      mainDiv = $('.container .row .main .itemShow');

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
    } else if (divName == 'enigma') {
      engima_teamArr.push(newTeam);
      divID.attr({'team': enigma_teamArr});
    } else if (divName == 'failsafe') {
      failsafe_teamArr.push(newTeam);
      divID.attr({'team': failsafe_teamArr});
    };

    // if ($('.container .row .main').children().length < 2 ) {
    //   $('.container .row .main').append('<div class="itemShow"></div>')
    // };
    mainDiv.html(divID.attr('team'));
});

// Add Media
$('.media-btn').on('click', function (){
  var dropDiv  = $(this).parent().attr('class'),
      divName  = dropDiv.slice(0,-4),
      divID    = $('#' + divName),
      newMedia = $('.' + divName  + '-' + 'media-input').val(),
      mainDiv  = $('.container .row .main .itemShow');

    if (divName == 'alpha') {
      alpha_medArr.push(newMedia);
      divID.attr({'media': alpha_medArr});
    } else if (divName == 'beta') {
      beta_medArr.push(newMedia);
      divID.attr({'media': beta_medArr});
    } else if (divName == 'cali') {
      cali_medArr.push(newMedia);
      divID.attr({'media': cali_medArr});
    } else if (divName == 'darwin') {
      darwin_medArr.push(newMedia);
      divID.attr({'media': darwin_medArr});
    } else if (divName == 'enigma') {
      engima_teamArr.push(newMedia);
      divID.attr({'media': enigma_medArr});
    } else if (divName == 'failsafe') {
      failsafe_medArr.push(newMedia);
      divID.attr({'media': failsafe_medArr});
    };

    mainDiv.html(divID.attr('media'));
});

// Add Summary
$('.summary-btn').on('click', function (){
  var dropDiv    = $(this).parent().attr('class'),
      divName    = dropDiv.slice(0,-4),
      divID      = $('#' + divName),
      newSummary = $('.' + divName  + '-' + 'summary-input').val(),
      mainDiv    = $('.container .row .main .itemShow');

    if (divName == 'alpha') {
      alpha_sumArr.push(newSummary);
      divID.attr({'summary': alpha_sumArr});
    } else if (divName == 'beta') {
      beta_sumArr.push(newSummary);
      divID.attr({'summary': beta_sumArr});
    } else if (divName == 'cali') {
      cali_sumArr.push(newSummary);
      divID.attr({'summary': cali_sumArr});
    } else if (divName == 'darwin') {
      darwin_sumArr.push(newSummary);
      divID.attr({'summary': darwin_sumArr});
    } else if (divName == 'enigma') {
      enigma_sumArr.push(newSummary);
      divID.attr({'summary': enigma_sumArr});
    } else if (divName == 'failsafe') {
      failsafe_sumArr.push(newSummary);
      divID.attr({'summary': failsafe_sumArr});
    };

  mainDiv.html(divID.attr('summary'));
});


// Add Progress
$('.progress-btn').on('click', function (){
  var dropDiv     = $(this).parent().attr('class'),
      divName     = dropDiv.slice(0,-4),
      divID       = $('#' + divName),
      newProgress = $('.' + divName  + '-' + 'progress-input').val(),
      mainDiv     = $('.container .row .main .itemShow');

    if (divName == 'alpha') {
      alpha_progArr.push(newProgress);
      divID.attr({'progress': alpha_progArr});
    } else if (divName == 'beta') {
      beta_progArr.push(newProgress);
      divID.attr({'progress': beta_progArr});
    } else if (divName == 'cali') {
      cali_progArr.push(newProgress);
      divID.attr({'progress': cali_progArr});
    } else if (divName == 'darwin') {
      darwin_progArr.push(newProgress);
      divID.attr({'progress': darwin_progArr});
    } else if (divName == 'engima') {
      engima_progArr.push(newProgress);
      divID.attr({'progress': engima_progArr});
    } else if (divName == 'failsafe') {
      failsafe_progArr.push(newProgress);
      divID.attr({'progress': failsafe_progArr});
    };

  mainDiv.html(divID.attr('progress'));
});

// Add Tests
$('.tests-btn').on('click', function (){
  var dropDiv  = $(this).parent().attr('class'),
      divName  = dropDiv.slice(0,-4),
      divID    = $('#' + divName),
      newTests = $('.' + divName  + '-' + 'tests-input').val(),
      mainDiv  = $('.container .row .main .itemShow');

    if (divName == 'alpha') {
      alpha_testArr.push(newTests);
      divID.attr({'tests': alpha_testArr});
    } else if (divName == 'beta') {
      beta_testArr.push(newTests);
      divID.attr({'tests': beta_testArr});
    } else if (divName == 'cali') {
      cali_testArr.push(newTests);
      divID.attr({'tests': cali_testArr});
    } else if (divName == 'darwin') {
      darwin_testArr.push(newTests);
      divID.attr({'tests': darwin_testArr});
    } else if (divName == 'enigma') {
      enigma_testArr.push(newTests);
      divID.attr({'tests': enigma_testArr});
    } else if (divName == 'failsafe') {
      failsafe_testArr.push(newTests);
      divID.attr({'tests': failsafe_testArr});
    };

  mainDiv.html(divID.attr('tests'));
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

$('.slideout-item').hide();

$('.top-divs, .bottom-divs, .nav-link').on('click', (e) => {
  let selectedDiv = e.currentTarget;
  let currentDiv  = $('#' + selectedDiv.id);
  let selectedTeam = currentDiv.attr('team');
  let selectedMedia = currentDiv.attr('media');
  let selectedSummary = currentDiv.attr('summary');
  let selectedProgress = currentDiv.attr('progress');
  let selectedTests = currentDiv.attr('tests');
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
     $('#put-here').attr('media', selectedMedia);
     $('#put-here').attr('summary', selectedSummary);
     $('#put-here').attr('progress', selectedProgress);
     $('#put-here').attr('tests', selectedTests);
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
