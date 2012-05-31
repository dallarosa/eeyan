
$(document).ready(
		function(){
			$(':button.stat_elem.as_link.cmnt_like_link').each(function(){
				if($(this).attr("name").indexOf("like_comment_id")==0){
					$(this).text('ええやん！');
				}
				else{
					$(this).text('ええやん！を取り消す');
				}
			});
			$(':button.like_link,:button.like_link.stat_elem.as_link').each(function(){
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
			$(':button.stat_elem.as_link.cmnt_like_link').each(function(){
				if($(this).attr("name").indexOf("like_comment_id")==0){
					$(this).text('ええやん！');
				}
				else{
					$(this).text('ええやん！を取り消す');
				}
			});
			$(':button.like_link,:button.like_link.stat_elem.as_link').each(function(){
				if($(this).attr("name") == "like"){
					$(this).text('ええやん！');
				}
				else{
					$(this).text('ええやん！を取り消す');
				}
			});

		}
		);
