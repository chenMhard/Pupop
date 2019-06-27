import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'example',
      component: () => import('./views/example.vue')
    },
  ],
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 }; // 路由跳转的的时候 回到顶部。但点后退键的时候 还是回到当前的位置  但是这个时候页面是需要有实际高度的
	}
})
