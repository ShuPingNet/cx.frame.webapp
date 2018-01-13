require(['main'], function() {
	require(['base', 'mui', 'jquery', 'common', "ejs", "winwebview", "validate", "supersized"], function(base, mui, $, com, ejs, wv, validate, supersized) {
		mui.init();
		var _page = {
			test: "",
			ws: null,
			onReady: function() {
				var that = this;
				mui.ready(function() {

					/*alert(1);
					ws = plus.webview.currentWebview();
					test = ws.test || "0";
					alert("接受传递的值test为###" + test);*/
				})
			}
		};
		_page.onReady();
	});
});