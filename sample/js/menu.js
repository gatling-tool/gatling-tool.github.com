
function setDetailsLinkUrl(){
    $("#details_link").attr('href', encodeURIComponent('request_authentication_page_before_login.html'));
}

function setDetailsMenu(){
    var menu = $(".nav ul");
    $("<a>").attr({href: encodeURIComponent('request_authentication_page_before_login.html')}).text('Authentication page before login').wrap("<li>").parent().appendTo(menu);
    $("<a>").attr({href: encodeURIComponent('request_authentication.html')}).text('Authentication').wrap("<li>").parent().appendTo(menu);
    $("<a>").attr({href: encodeURIComponent('request_authentication_redirect_1.html')}).text('Authentication Redirect 1').wrap("<li>").parent().appendTo(menu);
    $("<a>").attr({href: encodeURIComponent('request_operations.html')}).text('Operations').wrap("<li>").parent().appendTo(menu);
    $("<a>").attr({href: encodeURIComponent('request_operations_data.html')}).text('Operations data').wrap("<li>").parent().appendTo(menu);
    $("<a>").attr({href: encodeURIComponent('request_cards_operations.html')}).text('Cards operations').wrap("<li>").parent().appendTo(menu);
    $("<a>").attr({href: encodeURIComponent('request_cards_operations_data.html')}).text('Cards operations data').wrap("<li>").parent().appendTo(menu);
    $("<a>").attr({href: encodeURIComponent('request_perform_transfer.html')}).text('Perform transfer').wrap("<li>").parent().appendTo(menu);
    $("<a>").attr({href: encodeURIComponent('request_accounts.html')}).text('Accounts').wrap("<li>").parent().appendTo(menu);
    $("<a>").attr({href: encodeURIComponent('request_logout.html')}).text('Logout').wrap("<li>").parent().appendTo(menu);
    $("<a>").attr({href: encodeURIComponent('request_logout_redirect_1.html')}).text('Logout Redirect 1').wrap("<li>").parent().appendTo(menu);
}

function setGlobalMenu(){
    $(".nav ul").append("<li><a href='active_sessions.html'>Active Sessions</a></li><li><a href='requests.html'>Requests / sec</a></li><li><a href='transactions.html'>Transactions / sec</a></li>");
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
