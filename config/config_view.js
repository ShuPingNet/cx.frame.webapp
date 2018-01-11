define('view',function() {
	//webview窗体唯一标识
	var viewId = {
		login: "page1"
	};
	//webview相对路径
	var viewUrl = {
		page1: "view/login/login.html"
	};
	//根据viewid获取url
	var getPageUrl = function(id) {
		var url;
		url = this.viewId[id] ? this.viewUrl[id] : "";
		console.log(url);
		return url;
	}
	return {
		viewId: viewId,
		viewUrl: viewUrl,
		getPageUrl:getPageUrl
	};
});