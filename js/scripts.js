var callback = function(){
	$('.item-skills').each(function(){
		var newWidth = $(this).parent().width() * $(this).data('percent');
		$(this).width(0);
    $(this).animate({
        width: newWidth,
    }, 1000);
	});
	$('.icons-red').each(function(){
		var height = $(this).height();
    $(this).animate({
        height: 14,
    }, 2000);
	});
};
$(document).ready(callback);

var resize;
window.onresize = function() {
	clearTimeout(resize);
	resize = setTimeout(function(){
		callback();
	}, 100);
};

$(".hobby").click(function(){$(this).next().slideToggle();});

$("#view-bonus").click(function(){
	if ($(".bonus").css("display") == 'none') {	
		$(this).html("<small>Voir moins</small>");
	} else {
		$(this).html("<small>Voir plus</small>");
	}
	$(".bonus").slideToggle();
});

$("#view-longer").click(function(){
	if ($(".skill-is-long").css("display") == 'none') {	
		$(this).html("<small>Voir moins</small>");
	} else {
		$(this).html("<small>Voir plus</small>");
	}
	$(".skill-is-long").slideToggle();
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})