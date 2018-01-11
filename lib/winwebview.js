define(function(){
	var winwebview = {
		test:function(){alert("winwebview模块加载成功")},
		/**
		 * @description 下拉刷新页面事件
		 * @param {webview} webview 刷新webview
		 * @param {Function} PullDownFunc 下拉刷新的回调函数
		 **/
		pagePullDown: function(webview, PullDownFunc) {
			//var that = this;  that根本没有引用，注释废弃  lsc 2016-08-03
			var ws = webview;
			if(ws != null) {
				ws.setPullToRefresh({
					support: true,
					height: "50px",
					range: "200px",
					contentdown: {
						caption: "下拉可以刷新 "
					},
					contentover: {
						caption: "释放立即刷新"
					},
					contentrefresh: {
						caption: "正在刷新......             "
					}
				}, PullDownFunc);
			}
		},
		/**
		 * 动画类型
		 * */
		animType: {
			left: "slide-in-left",
			top: "slide-in-top",
			right: "slide-in-right",
			bottom: "slide-in-bottom",
			fadein: "fade-in",
			fadeout: "fade-out",
			zoomout: "zoom-out",
			zoomfadeout: "zoom-fade-out"
		},
		/**
		 * @description 通过MUI方式打开页面
		 * @param {String} id|页面ID
		 * @param {Function} loadedFunc
		 * @param {Function} closeFunc
		 * @param {JSON} data|页面传参
		 * @param {String} 参考winwebview.js中的 animType 
		 * 如果想扩展动画类型请扩展对象animType，禁止在调用处写死
		 */
		openMuiPage: function(id, loadedFunc, closeFunc, data, animType) {
			var that = this
			var winOpts = {
				url: that.getPageUrl(id),
				id: id,
				createNew: false,
				extras: data,
				waiting: {
					autoShow: false
				},
				show: {
					aniShow: animType,
					duration: 250 //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
				}
			};

		
			var wObject = mui.openWindow(winOpts);

			if(loadedFunc != undefined && loadedFunc != null && typeof loadedFunc == "function") {
				wObject.onloaded = loadedFunc;
			}
			if(closeFunc != undefined && closeFunc != null && typeof closeFunc == "function") {
				wObject.onclose = closeFunc;
			}

			return wObject;
			//			}
		},

		openMuiPageNotAnim: function(id, loadedFunc, closeFunc, data) {
			var that = this;

			var winOpts = {
				url: that.getPageUrl(id),
				id: id,
				createNew: false,
				extras: data,
				waiting: {
					autoShow: false
				},
				show: {
					autoShow: true, //页面loaded事件发生后自动显示，默认为true
					aniShow: "none", //页面显示动画，默认为”slide-in-right“；
					duration: 250
				},
				styles: {
					popGesture: "none"
				}
			};

			var wObject = mui.openWindow(winOpts);

			if(loadedFunc != undefined && loadedFunc != null && typeof loadedFunc == "function") {
				wObject.onloaded = loadedFunc;
			}
			if(closeFunc != undefined && closeFunc != null && typeof closeFunc == "function") {
				wObject.onclose = closeFunc;
			}
			return wObject;
			//			}
		},

		/**
		 * @description 关闭指定窗体
		 * @param {string} viewid 刷新窗体id
		 **/
		closePage: function(id) {
			if(plus.webview.getWebviewById(id) != null)
				plus.webview.getWebviewById(id).close();
		},

		/**
		 * @description 刷新制定窗体
		 * @param {string} viewid 刷新窗体id
		 **/
		pageRefresh: function(viewid) {
			var that = this;
			var pagews = plus.webview.getWebviewById(viewid);
			if(pagews != undefined && pagews != null) {
				pagews.loadURL(that.getPageUrl(viewid));
			}
		},
		/**
		 * @description 根据ID获取当前窗体的子窗体webview
		 * */
		getChild: function(curentWvObj, wvId) {
			var children = curentWvObj.children();
			var child;
			for(var i = 0, count = children.length; i < count; i++) {
				child = children[i];
				if(child.id == wvId) {
					return child;
				}
			}

			return child;
		},
		/**
		 * @description 调用子页面函数
		 * @param {Function} func 函数名称
		 **/
		webviewEvalJS: function(curWebView, wvId, func) {
			var that = this;
			var child = that.getChild(curWebView, wvId);
			if(child) {
				child.evalJS(func);
			} else {
				console.log("未找到当前窗体的子窗体");
			}
		},
		/**
		 * 执行指定webview页面的js
		 * */
		webviewEvalJSById: function(webviewId, jsStr) {
			var that = this;
			console.log(webviewId);
			//调用方的webview对象
			var targetWebview = that.getWebview(webviewId);
			if(targetWebview) {
				//调用目标窗体的方法
				targetWebview.evalJS(jsStr)
			} else {
				console.log("未找到指定的webview，请检查传入的webviewId是否有误");
			}
		},
		/**
		 * 获取父窗体对象
		 * */
		getParent: function(currentWvObj) {
			var parentWv = currentWvObj.parent();
			return parentWv;
		},
		/**
		 * 执行父窗体的方法
		 * */
		parentWebviewEvalJS: function(currentWebview, func) {
			var that = this;
			var parentWebview = that.getParent(currentWebview);
			if(parentWebview) {
				parentWebview.evalJS(func);
			} else {
				console.log("未找到当前窗体的父窗体")
			}
		},
		/**
		 * 隐藏其他webview
		 * */
		hideOtherWebview: function(curWebviewId) {
			var webviews = plus.webview.all();
			for(var i = 0, count = webviews.length; i < count; i++) {
				var webview = webviews[i];
				//如果不是当前打开的
				if(webview && webview.id != curWebviewId) {
					webview.hide();
				}
			}

		},
	
		/**
		 * 根据窗体ID获取窗体对象
		 * @param {String} id
		 * */
		getWebview: function(id) {
			console.log("getWebview:"+plus.webview.getWebviewById(id));
			return plus.webview.getWebviewById(id);
		},

	};

	return winwebview;
})