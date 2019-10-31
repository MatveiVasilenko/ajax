










// window.onload = function () {

// 	let inp_email = document.querySelector('input[name=email]');
// 	let inp_phone = document.querySelector('input[name=phone]');
// 	let inp_name = document.querySelector('input[name=name]');


// 	document.querySelector('#send').onclick = function (){
// 		let params = 'email='+ inp_email.value + '&' + 'phone='+ inp_phone.value + '&' + 'name='+ inp_name.value;
// 		// alert(params);
// 		ajaxPost(params);
// 	}

// 	function ajaxPost(params) {
// 		let request = new XMLHttpRequest;

// 		request.onreadystatechange = function () {
// 			if (request.readyState == 4 && request.status == 200) {
// 				if (request.responseText == 1) {
// 					document.querySelector('#result').innerHTML = 'Nice'
// 				}
// 				else {
// 					document.querySelector('#result').innerHTML = request.responseText;
// 				}
// 			}
// 		}

// 		request.open('POST', 'content.php');
// 		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// 		request.send(params);
// 	}
// }

function funcSuccess (data) {
	if (data == '1') {
		$('#result').text('Nice');
	}
	else {
		$('#result').text(data);
	}
};
$(document).ready(function(){
	$('#send').bind('click', function() {
		$.ajax ({
			url: 'https://www.hostel-morska.icu/content.php',
			type: 'POST',
			data: ({email: $('#email').val(), phone: $('#phone').val(), name: $('#name').val()}),
			dataType: 'html',
			// beforeSend: funcBefore,
			success: funcSuccess
		});
	});
});
