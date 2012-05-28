
$(document).ready(
function(){
	$(':button span.default_message, :button.like_link').each(function(){

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
	$(':button span.default_message, :button.like_link').each(function(){

    if($(this).text() == 'Like'){
      $(this).text('ええやん！');
    }
    else if($(this).text() == 'Unlike'){
      $(this).text('ええやん！を取り消す');
    }
      });

}
);
