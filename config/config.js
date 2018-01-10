/**
 * 基本配置类   
 * @author liucx
 * @date 2018-1-10
 * @warn 禁止使用envConfig/webApi/viewId/viewUrl 关键字
 */
(function() {
	window.config = {
		/**
		 * 环境配置
		 */
		envConfig: {
			//1测试环境  2生产环境
			softEnv: 1,
			//系统类别  iOS||Android
			osType: "iOS"
		},

		/**
		 * webApi 接口url地址
		 */
		webApi: {
			login: "Auth/DoLogin",
			resetPassword: "My/ResetPassword"
		},

		/**
		 * webview窗体唯一标识
		 */
		viewId: {
			login: "page1",
		},

		/**
		 * webview相对路径, 
		 * 与config.viewId.xxx对应
		 */
		viewUrl: {
			page1: "view/login/login.html"
		},
		
		//根据viewId获取webview对应url地址
		getPageUrl: function(id) {
			var url;
			url = this.viewId[id]?this.viewUrl[id]:"";
			console.log(url);
			return url;
		}
	}
}());