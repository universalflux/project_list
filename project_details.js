$(document).ready(function(){
  let clickCount = 0;
  let clickCountTwo = 0;
  $('.item-show').hide();
  let link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.type = 'text/css';
  link.href = '/project_details.css';
  document.head.appendChild(link);
  $('.main').fadeIn(1000);
  $('.float-main').animate({
    width: '+=100px',
    height: '+=100px',
    left: '200px'
  }, 'slow', () => {
    $('.float-main').css('left', '');
    $('.access-divs').fadeIn(1000);
  })


  // (function floatyB(){
  //   $('.float-main').animate({left: '+=3px'},1000, function(){
  //     $('.float-main').animate({left: '-=99px'},1000, floatyB())
  //   });
  // })();
  $('.access-divs').on('click',(e) => {
    var divId   = e.currentTarget.id,
        mainId  = $('.main').attr('id'),
        current = e.currentTarget,
        items   = $('#' + mainId).attr(divId);

    function listObj (jsonArr) {
      if (jsonArr) {
      var arr = jsonArr.split(',');
      
        $(arr).each(function(index, object) {
          $('.item-show').append(($(document.createElement('p')).text(object)));
        });
      } else {
        console.log("Array ain't here yet.");
      }
    };

    $(current).children('.white-text').removeClass('flow-text');
    $('.main').html(e.currentTarget.innerHTML);
    $('.main').append('<div class="item-show"></div><div class ="overlay"></div>');
    $(current).children('.white-text').addClass('flow-text');
    listObj(items);
    $('.item-show').show();
    // $('.itemShow').html(items);


  });

  $('.button-collapse').click((e) => {
    e.stopPropagation();
  });
  $('.hamburger').click((e) => {
    if(clickCountTwo <= 0) {
    $(e.currentTarget).addClass('is-active');
    clickCountTwo += 1;
    console.log(clickCountTwo);
    return clickCountTwo;
  } else {
    $(e.currentTarget).removeClass('is-active');
    clickCountTwo -= 1;
    console.log(clickCountTwo);
    return clickCountTwo;
  }
  });

   $('.reset-cheese').hover((e) => {
      if (clickCountTwo >= 1) {
      clickCountTwo -= 1;
      $('.hamburger').removeClass('is-active');
     }
     console.log(clickCountTwo);
     return clickCountTwo;
  });

  $('.corner-circle-home').click((e) => {
  $.ajax({
     type: 'GET',
     url: '/',
     cache: false,
  success: (result) => {
    let currentDiv;
    let obtained = $('#flashy-content');
    let homeContent = $('#home-content').innerHTML;
    obtained.html(homeContent);
  },
  error: (err) => {
    console.log("err" + JSON.stringify(err));
    }
  }, 'html', () => {
  })
});

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

// $('.plus-icon').click((e) => {
//   if(clickCount <= 0) {
//   $(e.currentTarget).next().slideDown();
//   e.stopPropagation();
//   clickCount += 1;
//   return clickCount;
// } else {
//   $(e.currentTarget).next().slideUp();
//   clickCount -= 1;
//   e.stopPropagation();
//   return clickCount;
// }
// })
})
