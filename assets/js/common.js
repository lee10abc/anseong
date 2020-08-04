$(document).ready(function(){
	/* 파일 업로드 닫기 btn */
	$(".closeBtn").click(function(e){
		e.preventDefault();
		$("#Co_card").val("");
		$(".cardUpload").removeClass("upload");
	});

	/* 개인정보 수집 동의 btn */
	$(".agreeBtn").click(function(e){
		e.preventDefault();
		if( !$(this).hasClass("agreed") ){
			$(this).addClass("agreed");
		} else{
			$(this).removeClass("agreed");
		}
	});
});

$(window).resize(function(){

});

$(window).scroll(function(){

});

/* 이미지 업로드 검사 */
function fileTypeCheck(obj) {
	var pathpoint = obj.value.lastIndexOf('.'),
			filepoint = obj.value.substring(pathpoint+1,obj.length),
			filetype = filepoint.toLowerCase(),
			fileWrap = document.querySelector(".fileWrap"),
			cardImg = document.querySelector(".cardImg"),
			cardImgWidth = cardImg.width,
			cardImgHeight = cardImg.height;

			if($.inArray(filetype,["gif","jpg","jpeg","png","bmp"]) == -1) {
	        alert("이미지만 업로드 가능합니다.");
	        obj.value = "";
	        return;
	    }

			if( cardImgWidth < cardImgHeight ){
				cardImg.style.width = "auto";
				cardImg.style.height = 100 + "%";
			}

}

function fileCheck(obj){
	var objValue = obj.value,
			objBox = document.querySelector(".cardUpload");
	if( objValue != "" ){
		objBox.classList.add("upload");
	} else{
		objBox.classList.remove("upload");
	}
}
