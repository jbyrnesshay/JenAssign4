$(document).ready(function() {
	

	/*tap first page get alert*/
	$('#target').on("tap",tapHandler);
	function tapHandler(event) {
		$('#popupBasic').popup('open');
		event.preventDefault();
		$('#popupBasic').tap(function() {
		//event.enableDefault();
		$(this).unbind('#fun');
		});
	}//end tapHanlder


 	$('.testcontainer').swipe( function() {
 		containvalue = $('#controlimg1').attr('src');
 	 	$('#controlimg1').slideUp(3000, function(){
 			place2nd(containvalue);
 			if (containvalue=='test.jpg') {
 				$('#controlimg1').attr('src', 'images/snow.jpg');
			}
 			else { $('#controlimg1').attr('src', 'test.jpg'); }
 			$('#controlimg3').hide();
 		}).slideDown(3000);
 	});//end swipe
function place2nd(containvalue) {
		$('#controlimg2').hide();
 		$('#page2 div.ui-block-b h2').css({'visibility': 'visible', 'backgroundColor': 'aqua'});
 		$('#controlimg2').attr('src', containvalue).slideDown(700, function() {
 			place3rd(containvalue)});
		}
 		
 		function place3rd(containvalue2) {
			$('#controlimg2').slideUp(function() {
 			$('#page2 div.ui-block-b h2').css('visibility', 'hidden');
 			$('#page2 div.ui-block-c h2').css({'visibility': 'visible', 'backgroundColor': 'aqua'});
 			$('#controlimg3').attr('src', containvalue).slideDown(700).slideUp(700, function() {
 			$('#page2 div.ui-block-c h2').css('visibility', 'hidden');
 				});
 		});

 			}

maincolor = $('div.ui-grid-b').css("backgroundColor");
 
$('#slider-flip-m').on("change", function() {
		state = $('#slider-flip-m').val();
		if (state == 'off') {
			 
			$('div.ui-grid-b').css("backgroundColor", "black");
		}
		else $('div.ui-grid-b').css("backgroundColor", maincolor)
		});

$('input[type="radio"][name=radiobutton]').change(function(){
	val = $(this).val();
	//alert(val);
	if (val == 'blue') {
		$('div.ui-grid-b').css("backgroundColor", "blue");

	}
	else if (val == 'red') {
	$('div.ui-grid-b').css("backgroundColor", "red");

	}
	else $('div.ui-grid-b').css("backgroundColor", maincolor);
});

$('#select-background').change(function(){
	val = $(this).val();
	//alert(val);
	if(val=='pink') {
		$('div.ui-grid-b').css("backgroundColor", "pink");

	}
	else if (val == "purple") {
		$('div.ui-grid-b').css("backgroundColor", "purple");
	}
	else if (val == 'green') {
		$('div.ui-grid-b').css("backgroundColor", "green");
	}
	else if (val == 'brown') {
		$('div.ui-grid-b').css("backgroundColor", "brown");

	}
	else if (val == 'orange') {
		$('div.ui-grid-b').css("backgroundColor", 'orange');
	}
	else $('div.ui-grid-b').css("backgroundColor", maincolor);
});

	});//end ready
 	 
