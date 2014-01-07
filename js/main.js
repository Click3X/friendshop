$(document).ready(function(){
	/*
    $(".various").fancybox({
        maxWidth    : 960,
        maxHeight   : 540,
        fitToView   : false,
        width       : '90%',
        height      : '90%',
        autoSize    : true,
        closeClick  : false,
    });
	*/
    var $nav_selected = $('#nav :nth-child(1)'), $nav_id;
 	$('.nav_item').click(function(i){
 		if(!$(this).hasClass('selected')){
 			$(this).addClass('selected');
 			$nav_selected.removeClass('selected');
 			$nav_selected = $(this);

 			$nav_id = $(this).attr('id');
 			$('#content ul li').each(function(i,v){
 				if($nav_id == i){
 					$(v).removeClass('hidden');
 				}
 				else{
 					$(v).addClass('hidden');
 				}
 			});
 		}
 	});

});