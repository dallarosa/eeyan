
$(document).ready(
function(){
	$(':button.like_link,:button.stat_elem.as_link.cmnt_like_link').each(function(){
    if($(this).attr("name") == "like"){
      $(this).text('ええやん！');
    }
    else{
      $(this).text('ええやん！を取り消す');
    }
      });

}
);

$(document).scroll(
function(){
	$(':button.like_link').each(function(){
    if($(this).attr("name") == "like"){
      $(this).text('ええやん！');
    }
    else{
      $(this).text('ええやん！を取り消す');
    }
      });

}
);
