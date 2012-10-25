$(document).ready(function(){
   
	$(window).resize();

 });

$(window).resize(function(){
   var height = $(this).height()
   $('.whitebox').height(height);
})