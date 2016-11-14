

$(document).ready(function(){
var coolClass = "green-text" + " text-lighten-4";
let clickCount = 0;
let clickCountTwo = 0;
let divCount = 0;



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
let createNewFloat = (data) => {
  let projectName = data.name + 'Nhc';
  let newDiv      = "<a href='#'>";
  let divs        = document.getElementsByClassName("z-depth-3");
  let arr         = [].slice.call(divs);
  let dataID      = data.toLowerCase().replace(/\s+/g, '');


  if (arr.length == 6) { 
    newDiv += "<div id = " + dataID + "' class = 'col s12 m6 l3 blue darken-4 z-depth-3 top-divs push-right float'>";
  } else if (arr.length == 7) {  
    newDiv += "<div id = " + dataID + "' class = 'col s12 m6 l3 blue darken-4 z-depth-3 top-divs push-right float center-top'>";
  } else if (arr.length == 8) {
    newDiv += "<div id = " + dataID + "' class = 'col s12 m6 l3 blue darken-4 z-depth-3 top-divs push-right-last float'>";
  } else if (arr.length == 9) {
    newDiv += "<div id = " + dataID + "' class = 'col s12 m6 l3 blue darken-4 z-depth-3 top-divs push-right float'>";
  } else if (arr.length == 10) {  
    newDiv += "<div id = " + dataID + "' class = 'col s12 m6 l3 blue darken-4 z-depth-3 bottom-divs push-right float center-bottom'>";
  } else if (arr.length == 11) {
    newDiv += "<div id = " + dataID + "' class = 'col s12 m6 l3 blue darken-4 z-depth-3 bottom-divs push-right-last float'>";
  }

  newDiv += '<h1 class = "zero-marg white-text center">'+ data + ' </h1>';
  newDiv += '</div> </a>';

  $('#flashy-content .reset-burger').append(newDiv);

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
function hideSix(){
  var divs     = document.getElementsByClassName("z-depth-3"),
      arr      = [].slice.call(divs),
      hideDivs = arr.slice(0,6),
      showDivs = arr.slice(6,13);

    if(arr.length > 6) {
      [].forEach.call(hideDivs, function (hideDiv) {
        $(hideDiv).hide();
      });
    }
}


$('.add-project-btn').on('click', function (){
  var newProj = $('.add-project-input').val();
  createNewFloat(newProj);
  hideSix();
});


// Sidenav Functions

// Turns DOM attribute into JSON array
function listObj (jsonArr) {
    var arr = jsonArr.split(',');
      $(arr).each(function(index, object) {
        $('.item-show').append(($(document.createElement('p')).text(object)));
      });
  }

// Add Team
$('.team-btn').on('click', function (){
  var dropDiv = $(this).parent().attr('class'),
      divName = dropDiv.slice(0,-4),
      divID   = $('#' + divName),
      newTeam = $('.' + divName  + '-' + 'team-input').val();

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

    listObj(newTeam);
});

// Add Media
$('.media-btn').on('click', function (){
  var dropDiv  = $(this).parent().attr('class'),
      divName  = dropDiv.slice(0,-4),
      divID    = $('#' + divName),
      newMedia = $('.' + divName  + '-' + 'media-input').val();

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

    listObj(newMedia);
});

// Add Summary
$('.summary-btn').on('click', function (){
  var dropDiv    = $(this).parent().attr('class'),
      divName    = dropDiv.slice(0,-4),
      divID      = $('#' + divName),
      newSummary = $('.' + divName  + '-' + 'summary-input').val();

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

    listObj(newSummary);

});

// Add Team


// Add Progress
$('.progress-btn').on('click', function (){
  var dropDiv     = $(this).parent().attr('class'),
      divName     = dropDiv.slice(0,-4),
      divID       = $('#' + divName),
      newProgress = $('.' + divName  + '-' + 'progress-input').val();

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

    listObj(newProgress);
});

// Add Tests
$('.tests-btn').on('click', function (){
  var dropDiv  = $(this).parent().attr('class'),
      divName  = dropDiv.slice(0,-4),
      divID    = $('#' + divName),
      newTests = $('.' + divName  + '-' + 'tests-input').val();

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

    listObj(newTests);
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


$('#dropdown-btn-f').on('click', function () {
  $('#dropdown-f').append('<div class="dropdown-extend"></div>');
});
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
     $('<a href = ""><div class = "corner-circle-home center circle left purple lighten-1 z-depth-5">  </div></a>')
     .insertAfter('.corner-circle').hide().fadeIn('slow');
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
