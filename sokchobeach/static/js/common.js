
function check_password(requestUrl, redirect){
	$.ajax({
		type	:	"POST",
		data	:	$("#password_form").serialize(),
		url		:	requestUrl + "/board/state.php",
		success	:	function(data) {
			var result = data.split("||");
			if(result[0] == "SUCC") {
				location.href = redirect + "?num="+result[1];
			}else if(result[0] == "DEL_SUCC") {
				alert("게시글이 삭제되었습니다.");
				location.href = "/board/";
			}else {
				alert(result);
				$('#pwdWrapper').hide();
				$('#password').val('');
				return false;
			}
		}
	})
}

function memory_submit() {
	var frm = document.getElementById("memory_form");

	if(frm.wid.value.trim() == "") {
		alert("작성자를 입력해주세요.");
		frm.wid.focus();
		return;
	}
	if(frm.password.value.trim() == "") {
		alert("비밀번호를 입력해주세요.");
		frm.password.focus();
		return;
	}
	if(frm.title.value.trim() == "") {
		alert("제목을 입력해주세요.");
		frm.title.focus();
		return;
	}
	if(frm.content.value.trim() == "") {
		alert("내용을 입력해주세요.");
		frm.content.focus();
		return;
	}
	if (grecaptcha.getResponse() == ""){
		alert("'로봇이 아닙니다.'를 체크해주세요.");
		return;
	}

	frm.submit();
}