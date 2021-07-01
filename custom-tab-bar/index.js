Component({
	data: {
		selected: 0,
		color: "#7A7E83",
		selectedColor: "#3cc51f",
		list: []
	},
	attached() {
		setTimeout(() => {
			const list = [{
				"index": 0,
				"pagePath": "/pages/index/index",
				"iconPath": "../static/logo.png",
				"selectedIconPath": "../static/logo1.png",
				"text": "首页"
			}, {
				"index": 1,
				"pagePath": "/pages/world/index",
				"iconPath": "../static/logo.png",
				"selectedIconPath": "../static/logo1.png",
				"text": "功能一"
			}, {
				"index": 2,
				"pagePath": "/pages/hello/index",
				"iconPath": "../static/logo2.png",
				"selectedIconPath": "../static/logo3.png",
				"text": "我的"
			}]
			this.setData({
				list
			})
			getApp().globalData.tabList = list
		}, 500)
	},
	methods: {
		switchTab(e) {
			const data = e.currentTarget.dataset
			const url = data.path
			wx.switchTab({
				url
			})
			this.setData({
				selected: data.index
			})
		}
	}
})
