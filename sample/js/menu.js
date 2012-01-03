
function setDetailsLinkUrl(){
    $("#details_link").attr('href', 'request_authentication_page_before_login.html');
}

function setDetailsMenu(){
    $(".nav ul").append("<li><a href='request_authentication_page_before_login.html' >Authentication page before login</a></li><li><a href='request_authentication.html' >Authentication</a></li><li><a href='request_accounts.html' >Accounts</a></li><li><a href='request_operations.html' >Operations</a></li><li><a href='request_operations_data.html' >Operations data</a></li><li><a href='request_cards_operations.html' >Cards operations</a></li><li><a href='request_cards_operations_data.html' >Cards operations data</a></li><li><a href='request_perform_transfer.html' >Perform transfer</a></li><li><a href='request_performing_transfer.html' >Performing transfer</a></li><li><a href='request_logout.html' >Logout</a></li><li><a href='request_authentication_page_after_logout.html' >Authentication page after logout</a></li>");
}

function setGlobalMenu(){
    $(".nav ul").append("<li><a href='active_sessions.html'>Active Sessions</a></li><li><a href='requests.html'>Requests per Second</a></li>");
}

function getLink(link){
	var a = link.split('/');
	return (a.length<=1)? link : a[a.length-1].toLowerCase();
}
 
function setActiveMenu(){
	$(".nav a").each(function(){
		if($(this).attr('href') == getLink(window.location.pathname)){
			$(this).parent().attr('class', 'on');
			return false;
		}
	});
}
