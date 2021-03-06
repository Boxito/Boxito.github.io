// JavaScript Document

//Progress bar for page loading
document.onreadystatechange = function(e) {
	if (document.readyState == "interactive") {
		var all = document.getElementsByTagName("*");
		for (var i = 0, max = all.length; i < max; i++) {
			set_ele(all[i]);
		}
	}
}
function check_element(ele) {
	var all = document.getElementsByTagName("*");
	var totalele = all.length;
	var per_inc = 100 / all.length;
	if ($(ele).on()) {
		var prog_width = per_inc + Number(document.getElementById("progress_width").value);
		document.getElementById("progress_width").value = prog_width;
		$("#loading_bar").animate({width:prog_width+"%"},10,function() {
			if (document.getElementById("loading_bar").style.width == '100%') {
				$(".progress").fadeOut("slow");
			}
		});
	}
	else {
		set_ele(ele);
	}
}
function set_ele(set_element) {
	check_element(set_element);
}
//JQuery Behaviours
$(function() {
	//Side Nav for mobile collapsing
	$(".button-collapse").sideNav();
});