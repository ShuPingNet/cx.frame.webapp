/**
 * 基本配置类   
 * @author liucx
 * @date 2018-1-10
 * @warn 禁止使用envConfig/webApi/viewId/viewUrl 关键字
 */
define(['view', 'webapi'], function(_view, _api) {
	var base = {
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
		 * webApi 接口url地址  webapi.js
		 */
		webApi: _api,

		/**
		 * webview窗体唯一标识
		 */
		viewId: _view.viewId,

		/**
		 * webview相对路径, 
		 * 与config.viewId.xxx对应
		 */
		viewUrl: _view.viewUrl,

		//根据viewId获取webview对应url地址
		getPageUrl: _view.getPageUrl
	}
	return base;
});