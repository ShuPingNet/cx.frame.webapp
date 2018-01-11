define(function() {
	if(!window.config) {
		console.log("未加载config.js");
		return;
	}
	//api数据接口路径
	var _obj = {
		login: "Auth/DoLogin",
		resetPassword: "My/ResetPassword"
	}
	window.config.webApi = this._obj;
});