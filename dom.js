$(document).ready(function(){

		

		$('li').on('click',function(){

		
		$(this).prev().remove();
			$(this).next().addClass('special');
				

		 });
  });