define(function() {
	if(!window.config) {
		console.log("未加载config.js");
		return;
	}
	//webview窗体唯一标识
	var _viewid = {
		login: "page1"
	}
	//webview相对路径
	var _viewurl = {
		page1: "view/login/login.html"
	}
	window.config.viewId = this._viewid;
	window.config.viewUrl = this._viewurl;
});