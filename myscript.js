
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
			replaceIineWithEeyan(this);
		}
		);

// 動的に表示されるいいね！にも対応
$(document).bind('DOMNodeInserted', function(e){
	var elem = e.target;
	replaceIineWithEeyan(elem);
});

function replaceIineWithEeyan(elem) {
	var likeLinkClass = $(elem).find('.UFILikeLink')
	if(likeLinkClass.length > 0) {
		var eeneHtml = likeLinkClass.html().replace('いいね', 'ええやん');
		likeLinkClass.html(eeneHtml);
	}

};
