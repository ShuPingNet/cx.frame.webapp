define(function(){
	var common = {
		test:function(){
			alert("common加载成功");
		},
		/**
		 * @description 网络枚举值 
		 **/
		networkinfoName: {
			//2g网络
			twog: "twog",
			//3g网络
			threeg: "threeg",
			//4g网络
			fourg: "fourg",
			//wifi网络
			wifi: "wifi",
			//有线网络
			wired: "wired",
			//无网络
			none: "none",
			//未知的网络
			unknow: "unknow"
		},
		/**
		 * @description 检查是否存在网络
		 **/
		checkNetWork: function() {
			if(window.plus) {
				var networkinfo = plus.networkinfo;
				if(networkinfo.getCurrentType() == networkinfo.CONNECTION_NONE) {
					return false;
				}
				return true;
			}
			return false;
		},
		/**
		 * @description 获取网络信息 
		 **/
		networkifno: function() {
			if(plus.networkinfo.getCurrentType() == plus.networkinfo.CONNECTION_CELL2G) {
				return "2g";
			} else if(plus.networkinfo.getCurrentType() == plus.networkinfo.CONNECTION_CELL3G) {
				return "3g";
			} else if(plus.networkinfo.getCurrentType() == plus.networkinfo.CONNECTION_CELL4G) {
				return "4g";
			} else if(plus.networkinfo.getCurrentType() == plus.networkinfo.CONNECTION_WIFI) {
				return "wifi";
			} else if(plus.networkinfo.getCurrentType() == plus.networkinfo.CONNECTION_ETHERNET) {
				return "wired";
			} else if(plus.networkinfo.getCurrentType() == plus.networkinfo.CONNECTION_NONE) {
				return "none";
			} else {
				return "unknow";
			}
		},
		/**
		 * @description 提示信息
		 * @param {string} message 提示信息
		 **/
		alert: function(message, title, btnValue, callback) {
			if(message) {
				if(typeof title === 'function') {
					callback = title;
					title = "提示";
					btnValue = '确定';
				} else if(typeof btnValue === 'function') {
					callback = btnValue;
					btnValue = '确定';
					title = "提示";
				}
				plus.nativeUI.alert(message, callback, title, btnValue);
			}
		},
		/*
		 * @description 提示信息  自动关闭
		 * */
		toast: function(message) {
			plus.nativeUI.toast(message);
			return false;
		},
		/**
		 * @description 获取客户端ID
		 **/
		getClientId: function() {
			var clientInfo = plus.push.getClientInfo();
			return(!!!clientInfo) ? "" : clientInfo.clientid;
		},
		/**
		 * @description 设备token
		 **/
		getDeviceToken: function() {
			return plus.push.getClientInfo().token;
		},
		/**
		 * @description 获取客户端设备操作系统
		 **/
		getOsType: function() {
			return plus.os.name;
		},
		/**
		 * @description 获取系统版本号
		 * **/
		getOsVersion: function() {
			return plus.os.version;
		},
		/**
		 * @description 字符串格式化拼接
		 **/
		format: function() {
			if(arguments.length == 0)
				return null;
			var str = arguments[0];
			for(var i = 1; i < arguments.length; i++) {
				var valtemp = "";
				if(arguments[i] != null) {
					valtemp = arguments[i];
				}

				var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
				str = str.replace(re, valtemp);
			}
			return str;
		},
		/*
		 @description 验证手机号（非空正整数）liuchangxin
		 */
		checkPhoneNum: function(phone) {
			var re = /^1\d{10}$/;
			if(re.test(phone)) {
				return true;
			} else {
				return false;
			}
		},
		/*
		 * 获取当前时间
		 * 2017-3-2 20:1:24
		 */
		GetDateTime: function() {
			var date = new Date();
			var year = date.getFullYear();
			var month = date.getMonth() + 1;
			var day = date.getDate();
			var hour = date.getHours();
			var minute = date.getMinutes();
			var second = date.getSeconds();
			return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
		},
		/**
		 * @description 格式化日期
		 * @param {Date} datetimeObj
		 * @param {string} fmt
		 * @example
		 * common.formatDate("2015-01-01","yyyy-MM-dd");
		 */
		formatDate: function(datetimeObj, fmt) { //author: meizz 

			var o = {
				"M+": datetimeObj.getMonth() + 1, //月份 
				"d+": datetimeObj.getDate(), //日 
				"h+": datetimeObj.getHours() % 12 == 0 ? 12 : datetimeObj.getHours() % 12, //12进制小时 
				"H+": datetimeObj.getHours(), //24进制小时 
				"m+": datetimeObj.getMinutes(), //分 
				"s+": datetimeObj.getSeconds(), //秒 
				"q+": Math.floor((datetimeObj.getMonth() + 3) / 3), //季度 
				"S": datetimeObj.getMilliseconds() //毫秒 
			};
			if(/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (datetimeObj.getFullYear() + "").substr(4 - RegExp.$1.length));
			for(var k in o)
				if(new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
			return fmt;
		},
		//时间字符串转成日期格式
		getDateFromString: function(str) {
			var reg = /^(\d+)年(\d+)月(\d+)日 (\d+):(\d+)/;
			var s = str.match(reg);
			var result = "";
			if(s) {
				new Date(s[1], parseInt(s[2]) - 1, s[3], s[4], s[5]);
			}
			return result;
		},
		
		getPageCount: function(pageSize, recordCount) {
			return Math.ceil(recordCount / pageSize);
		}
		
		
	};
	return common;
})

	
