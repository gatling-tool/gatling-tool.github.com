
function setDetailsLinkUrl(){
    $("#details_link").attr('href', encodeURIComponent('req_home.html'));
}

function setDetailsMenu(){
    var menu = $(".nav ul");
    $("<a>").attr({href: encodeURIComponent('req_home.html')}).text('Home').wrap("<li>").parent().appendTo(menu);
    $("<a>").attr({href: encodeURIComponent('req_home_redirect_1.html')}).text('Home Redirect 1').wrap("<li>").parent().appendTo(menu);
    $("<a>").attr({href: encodeURIComponent('req_search_apple.html')}).text('Search Apple').wrap("<li>").parent().appendTo(menu);
    $("<a>").attr({href: encodeURIComponent('req_go_to_next_page.html')}).text('Go to next page').wrap("<li>").parent().appendTo(menu);
    $("<a>").attr({href: encodeURIComponent('req_select_apple_network_server.html')}).text('Select Apple Network Server').wrap("<li>").parent().appendTo(menu);
    $("<a>").attr({href: encodeURIComponent('req_cancel.html')}).text('Cancel').wrap("<li>").parent().appendTo(menu);
}

function setGlobalMenu(){
    $(".nav ul").append("<li><a href='#active_sessions'>Active Sessions</a></li><li><a href='#requests'>Requests / sec</a></li><li><a href='#transactions'>Transactions / sec</a></li>");
}

function getLink(link){
	var a = link.split('/');
	return (a.length<=1)? link : a[a.length-1];
}
 
function setActiveMenu(){
	$(".nav a").each(function(){
		if($(this).attr('href') == getLink(window.location.pathname)){
			$(this).parent().attr('class', 'on');
			return false;
		}
	});
}
