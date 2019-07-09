function getUserMedia(constrains, success, error) {
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
