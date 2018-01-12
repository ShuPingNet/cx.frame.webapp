define('view',function() {
	//webview窗体唯一标识
	var viewId = {
		login: "login"
	};
	//webview相对路径
	var viewUrl = {
		login: "view/login/login.html"
	};
	//根据viewid获取url
	var getPageUrl = function(id) {
		var url;
		url = this.viewId[id] ? this.viewUrl[id] : "";
		console.log("config_view.js 获取到url为"+url);
		return url;
	}
	return {
		viewId: viewId,
		viewUrl: viewUrl,
		getPageUrl:getPageUrl
	};
});