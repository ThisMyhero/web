$('.check').click(function(){
	$(this).toggleClass('selected');
});
		
function regNow(){

	if(!$('.check').hasClass('selected')){
		$('.message.red').html('You have to agree with the terms and privacy').show();
		return false;
	}
	
	if($('#email').val()==''){
		return false;
	}

	setTimeout(function(){	
		$('.message.red').hide();
		
		// Sign in
		var userEmail = $('#email').val();
		var userNonce = $('#nonce').val();
		var data = '';
		$.post("/my.minerstat.com", { email: userEmail, nonce: userNonce }, function(response) {
			data = response;
			if(data=='1'){
				window.top.location.href = "/my.minerstat.com"; 
			}

			if(data!='1'){
				$('.message.red').html(data).show();
			}
		});							
	}, 125);
}

$("#email").keypress(function(e) {
	if(e.which == 13) {
		regNow();
	}
});