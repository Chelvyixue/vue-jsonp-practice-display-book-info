import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Book from './components/Book.vue'

export default new Router({
	routes: [
		{
			path: '/',
			component: Book
		}
	]
});
