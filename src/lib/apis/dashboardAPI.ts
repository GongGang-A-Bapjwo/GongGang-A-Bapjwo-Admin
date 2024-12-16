import apiClient from './apiClient';
import type { DashboardResponse } from '$lib/dtos/dashboardResponse';

export const getMember = async (): Promise<DashboardResponse[]> => {
	try {
		const response = await apiClient.get<DashboardResponse[]>('/member/all', {
		});
		return response.data;
	} catch (error) {
		console.error('회원 정보를 가져오는데 실패했습니다:', error);
		throw error;
	}
};
