
$(document).ready(
function(){
  $('.like_link span.default_message').each(function(){

    if($(this).text() == 'Like'){
      $(this).text('ええやん！');
    }
    else if($(this).text() == 'Unlike'){
      $(this).text('ええやん！を取り消す');
    }
      });

}
);

$(document).scroll(
function(){
  $('.like_link span.default_message').each(function(){

    if($(this).text() == 'Like'){
      $(this).text('ええやん！');
    }
    else if($(this).text() == 'Unlike'){
      $(this).text('ええやん！を取り消す');
    }
      });

}
);
