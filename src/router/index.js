import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Welcome',
			component: Welcome,
		},
		{
			path: '/chatroom',
			name: 'Chatroom',
			component: Chatroom,
		},
	],
})

export default router
