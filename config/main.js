/**
 * webapp程序入口
 * @author liucx
 * @date  2018-1-12
 * @description  config配置require模块
 */

require.config({
	//baseUrl:"",
	paths: {
		//config.js需要公共引入的配置内容
		"webapi": "config_api",
		"view": "config_view",
		"base": "config",

		//页面需要按需引用的模块
		"jquery": "../lib/jquery-3.1.1.min",
		"mui": "../lib/mui",
		"ejs": "../lib/ejs",
		"common": "../lib/common",
		"winwebview":"../lib/winwebview",
		"validate":"../lib/jquery.validate.min",
		"supersized":"../lib/supersized.3.2.7.min"
	},
	//不符合AMD规范的js作为模块配置
	shim: {
		mui: {
			deps: [], //依赖模块
			exports: 'mui' //导出模块名称
		},
		ejs: {
			deps: [],
			exports: 'ejs'
		},
		validate: {
			deps: ['jquery'],
			exports: 'validate'
		},
		supersized: {
			deps: ['jquery'],
			exports: 'supersized'
		}
	}
})


/**
 * @description 全局事件拦截  后期写成一个单独的filter模块
 * @warn: require.js的源码原因，匿名函数最后括号不能放在外边，否则报语法错误
 * */
(function() {
	alert("预留全局操作");
}());