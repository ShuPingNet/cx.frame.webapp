require(['main'], function() {
	require(['base', 'mui', 'jquery', 'common', "ejs", "winwebview"], function(base, mui, $, com, ejs, wv) {
		mui.init();
		var _page = {
			test: "",
			ws: null,
			onReady: function() {
				mui.ready(function(){
					alert(1);
					ws = plus.webview.currentWebview();
					test = ws.test || "0";
					alert("接受传递的值test为###" + test);
				})
			},
		};
		_page.onReady();
	});
});