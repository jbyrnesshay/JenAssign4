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
	event.preventDefault();
	$('#popupBasic').tap(function() {
		//event.enableDefault();
		 $(this).unbind('#fun');
	})
}//end tapHanlder


 $('.testcontainer').swipe( function() {
 	//alert('ya');
 	containvalue = $('#controlimg1').attr('src');
 	 //alert(containvalue);
 		$('#controlimg1').slideUp(3000, function(){
 			place2nd(containvalue);
 			if (containvalue=='test.jpg') {
 				 
 				 
 				$('#controlimg1').attr('src', 'images/snow.jpg');
 				
 			}
 			else { $('#controlimg1').attr('src', 'test.jpg'); }
 			$('#controlimg3').hide();
 		}

 			//$('#test').toggleClass('thing');}
 		).slideDown(3000);
 });//end swipelef


 function place2nd(containvalue) {

 	$('#controlimg2').hide();
 	

 	$('#controlimg2').attr('src', containvalue).slideDown(1500, function() {
 		//containvalue2 = containvalue;
 		
 		place3rd(containvalue)});
 }
 function place3rd(containvalue2) {

 	
 	$('#controlimg2').slideUp(function() {
 	$('#controlimg3').attr('src', containvalue).slideDown(1500);
 });
}
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