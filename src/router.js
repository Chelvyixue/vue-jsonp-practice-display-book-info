import Vue from 'vue'
import Router from 'vue-router'
import Resourse from 'vue-resource'
import VueJsonp from 'vue-jsonp'

Vue.use(Router)
Vue.use(Resourse)
Vue.use(VueJsonp)

import Book from './components/Book.vue'

export default new Router({
	routes: [
		{
			path: '/book/:id',
			component: Book,
			props: true
		}
	]
});
