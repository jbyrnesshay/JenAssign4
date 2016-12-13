$(document).ready(function() {
	$('#second').on("pagecreate", function() {
		alert('yes');
	});


/*tap first page get alert*/
$('#page1').on("tap",tapHandler);
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


}
 
});//end ready