export default class Alert {
	constructor() {
	  this.canHide = true;
		this.setHide = false;
	}
	
	/**
	 * 单例
	 */
	static getInstance() {
		if (!this.instance) {
			this.instance = new Alert();
		}
		return this.instance;
	}

	/**
	 * 消息提示
	 *
	 * @ param option.message  消息内容
	 * @ param option.complete 结束的回调
	 */
	showMessage(option) {
		this.canHide = false;
		let message = '';
		if (typeof option === 'string') {
			message = option;
		} else if (typeof option == 'object') {
			message = option.message;
		}
		uni.showToast({
			title: message,
			icon: 'none'
		});
		if (typeof option == 'object' && option.complete) {
			setTimeout(() => {
				this.canHide = true;
				if (this.setHide) {
					this.hideLoading();
				}
				option.complete();
			}, 1500);
		}
	}

	/**
	 * 成功消息提示
	 *
	 * @ param message 消息内容
	 */
	showSuccess(option) {
		this.canHide = false;
		let message = '';
		if (typeof option === 'string') {
			message = option;
		} else if (typeof option == 'object') {
			message = option.message;
		}
		uni.showToast({
			title: message,
			icon: 'success'
		});
		if (typeof option == 'object' && option.complete) {
			setTimeout(() => {
				this.canHide = true;
				if (this.setHide) {
					this.hideLoading();
				}
				option.complete();
			}, 1500);
		}
	}

	/**
	 * 显示 loading 提示框
	 *
	 * @ param message 消息内容
	 */
	showLoading(message) {
		this.setHide = false;
		this.canHide = true;
		let title = '正在加载';
		if (message) {
			title = message;
		}
		uni.showLoading({
			title: title,
			// #ifndef MP-TOUTIAO
			mask: true,
			// #endif
		});
	}

	/**
	 * 隐藏 loading 提示框
	 */
	hideLoading() {
		this.setHide = true;
		if (this.canHide) {
			uni.hideLoading();
		}
	}

	/**
	 * 带按钮的提示弹窗
	 * 
	 * @param {String}  option.title       标题
	 * @param {String}  option.message     信息
	 * @param {Fuction} option.confirmText 确定按钮的文字，默认为"确定"，最多 4 个字符
	 * @param {Fuction} option.confirm     确认按钮的回调
	 * @param {Fuction} option.cancel      取消按钮的回调
	 */
	showDialog(option) {
		uni.showModal({
			title: option.title || '',
			content: option.message || '',
			confirmText: option.confirmText || '确定',
			showCancel: option.showCancel,
			success: response => {
				// 点击确定
				if (response.confirm) {
					console.log('用户点击确定');
					if (option.confirm && typeof option.confirm == 'function') {
						option.confirm();
					}
				}
				// 点击取消
				else if (response.cancel) {
					console.log('用户点击取消');
					if (option.cancel && typeof option.cancel == 'function') {
						option.cancel();
					}
				}
			}
		});
	}
}
