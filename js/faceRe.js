//人脸识别 20190710 author:25252421994@qq.com    
var buffer,context;
var video = document.querySelector('#video');
var canvas = document.getElementById("canvas");
var videoWrap = document.getElementById("video-wrap");
var ratio = Math.min(window.devicePixelRatio || 1, 1); // 清除画布
var myConstraints = {
	// 优先调用前置摄像头
	video: {
		facingMode: 'user'
	}
}
window.onload=function(){
    canvas.width = video.offsetWidth * ratio;
    canvas.height = video.offsetHeight * ratio;
    context = canvas.getContext("2d");
    navigator.mediaDevices.getUserMedia(myConstraints).then((stream) => {
    	try {
    		video.src = window.URL.createObjectURL(stream)
    	} catch (e) {
    		video.srcObject = stream;
    	}
    	buffer = stream;
    	video.play()
    }, (error) => {
    	console.error(error.name || error)
    })
}
	

	//拍照按钮的单击事件
	document.getElementById("capture").addEventListener("click", function() {
		//绘制画面
		context.drawImage(video, 0, 0,video.offsetWidth * ratio ,video.offsetHeight * ratio );
		switch ($(this).find('a').text()){
			case '拍照':
			$('#video').hide();
			setTimeout(function(){$(".reRec-load").show();}, 1000);
			$(this).addClass("reRec").find('a').html('重拍');
			break;
			case '重拍':
			$('#video').show();
			$(".reRec-load").hide();
			$(this).removeClass("reRec").find('a').html('拍照');
			break;
		}
	});

	//方法关闭摄像头
	function closeCamera() {
		buffer && buffer.getTracks()[0].stop();
	}




	/* function getUserMedia(constrains, success, error) {
		if (navigator.mediaDevices.getUserMedia) {
			console.log(1);
			//最新标准API
			navigator.mediaDevices.getUserMedia(constrains).then(success).catch(error);
		} else if (navigator.webkitGetUserMedia) {
			console.log(2);
			//webkit内核浏览器
			navigator.webkitGetUserMedia(constrains).then(success).catch(error);
		} else if (navigator.mozGetUserMedia) {
			console.log(3);
			//Firefox浏览器
			navagator.mozGetUserMedia(constrains).then(success).catch(error);
		} else if (navigator.getUserMedia) {
			console.log(4);
			//旧版API
			navigator.getUserMedia(constrains).then(success).catch(error);
		}
	}
	 */
