import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.mixin({
	methods: {
		setTabBarIndex() {
			const pages = getCurrentPages()
			const currentPage = pages[pages.length - 1]
			const url = `/${currentPage.route}`
			const tabList = getApp().globalData.tabList
			let index = tabList.findIndex(v => v.pagePath === url)
			index = index === -1 ? 0 : index
			if (typeof this.$mp.page.getTabBar === 'function' &&
				this.$mp.page.getTabBar()) {
				this.$mp.page.getTabBar().setData({
					selected: index
				})
			}
		}
	}
})

const app = new Vue({
	...App
})
app.$mount()
