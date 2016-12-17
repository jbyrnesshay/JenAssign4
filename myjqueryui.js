//all  programming by Joachim Byrnes-Shay
$(function(){
	//set this variable, which will be used in the drag function to tally the number of images dragged
	count = 0;
	/*this function is for dragging the images on the jquery ui page */
	$(function() {
		targetposy = $('#target').position().top;
		targetposx = $('#target').position().left;
		//draggable instantiated here, defined below
		$(dragfunction());
	});

	
	/*implement the tab widget */
	$(function() {
		$('#tabs').tabs();
	});


	/*implement the jqueryui effect() */
	/* using "shake" option */
	$(function() {
		$('.tabcss').click(function() {

			 $('#tabs').effect("shake");
		
		});
	});

	function dragfunction () {

	 	$('.draggable').draggable( {
			drag:  function() {
			//store updates of the position of the draggable image on drag
			var my = $(this).offset();
			//check if image has been placed over the position of the blue box
				if ((my.top -25) > targetposy && (my.left - 10)> (targetposx) && my.left <= (targetposx + 205)){
					//increment count variablee when image dropped, there are 4 images
					count = count+1;
			 		$(this).effect("explode").hide();
			 		//if all 4 images have been exloded, explode the box and then the original image container
					if (count>=4) {
						$('#target').effect("explode", function(){
							$('#left').effect("explode", 1000);
						});
					}}}});
	 }//end drag function
});//endready
