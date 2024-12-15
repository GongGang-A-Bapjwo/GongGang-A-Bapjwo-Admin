import axios from 'axios';
import { redirect } from '@sveltejs/kit';

const apiClient = axios.create({
	baseURL: 'http://129.154.55.198/api',
	headers: {
		'Content-Type': 'application/json',
		Accept: '*/*',
	},
});

apiClient.interceptors.request.use((config) => {
	const token = localStorage.getItem('accessToken');

	if (!token && config.url !== '/admin/login') {
		localStorage.removeItem('nickname');
		redirect(302, '/login');
	}

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

export default apiClient;
