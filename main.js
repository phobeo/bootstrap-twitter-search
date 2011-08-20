function doSearch() {
	user = $("#f_username").val()
	if(user!="") {
	twitterlib.timeline(user, function (data) {
	  var html = [];
	  for (var i = 0; i < 10; i++) {
	    html.push(twitterlib.render(data[i]));
	  }
	  $("#tweets").html(html.join(''))
	  $("#messages").html('<div class="alert-message success">it worked!</div>');
	});
	} else {
	  $("#tweets").html('')
	  $("#messages").html('<div class="alert-message error">invalid user id, please try again</div');
	}
}

$(document).ready(function() {
  $("#search").submit(doSearch);
  $("#about_btn").click(function() { $("#about").fadeToggle();})
  $(".close").click(function() { $("#about").fadeOut();})
  $("#about").hide();
});