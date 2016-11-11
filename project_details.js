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
    var divId   = e.currentTarget.id,
        mainId  = $('.main').attr('id'),
        current = e.currentTarget,
        items   = $('#' + mainId).attr(divId);

    function listObj (jsonArr) {
      var ul = $('<ul>').appendTo('.itemShow');
      var json = { objects: ['item 1', 'item 2', 'item 3'] },
      arr = jsonArr.split(',');

        $(arr).each(function(index, object) {
          ul.append(  
            $(document.createElement('li'))
              .append($(document.createElement('p')).text(object))
          );
        }); 
    }
       
    $(current).children('.white-text').removeClass('flow-text');
    $('.main').html(e.currentTarget.innerHTML);
    $(current).children('.white-text').addClass('flow-text');
    $('.main').append('<div class="itemShow"></div>')
    listObj(items);
    // $('.itemShow').html(items);

  });
  $('.main').fadeIn(1000);
  $('.access-divs').fadeIn(4000);

  })

