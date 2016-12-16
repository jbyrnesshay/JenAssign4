$(document).ready(function() {
	$('#second').on("pagecreate", function() {
		alert('yes');
	});


/*tap first page get alert*/
$('#target').on("tap",tapHandler);
function tapHandler(event) {
	 
	//alert('ha'); 
	//window.location = document.getElementById('#funclink').href;
	//$('#funclink').popup();
	//$('#funclink').popup('open');

	$('#popupBasic').popup('open');
	//event.preventDefault();
	$('#popupBasic').tap(function() {
		//event.enableDefault();
		 $(this).unbind('#fun');
	})
}//end tapHanlder


 $('#testcontainer').swipeleft( function() {
 	//alert('ya');
 	containvalue = $('#test').attr('src');
 	alert(containvalue);
 		$('#test').slideUp(5000, function(){
 			if (containvalue=='test.jpg') {
 				 
 				 
 				$('#test').attr('src', 'water_lily.jpeg');
 				
 			}
 			else { $('#test').attr('src', 'test.jpg'); }
 		}
 			//$('#test').toggleClass('thing');}
 		).slideDown(5000);
 });//end swipelef
/*
first() {
	$('#control').slideUp(5000);
}
second() {
	$('#control').slideDown(5000);
 }
 	*/
 	 
});//end ready

 	/*
	function down() {
		//new = '/water-lily.jpeg'
		//$('#test').attr('src', new);
		$('#control').slideDown(5000);
		}

		function ui() {
		new = 'water-lily.jpeg'
		alert(new);
		//$('#control').attr('src', new);
		$('#control').slideDown(5000);
	}*/