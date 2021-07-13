import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import JoinPage from '../pages/JoinPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import ResultPage from '../pages/ResultPage.vue'

const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage
	},
	{
		path: '/join',
		name: 'JoinPage',
		component: JoinPage
	},
	{
		path: '/Login',
		name: 'LoginPage',
		component: LoginPage
	},
	{
		path: '/result',
		name: 'ResultPage',
		component: ResultPage
	},
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
})
