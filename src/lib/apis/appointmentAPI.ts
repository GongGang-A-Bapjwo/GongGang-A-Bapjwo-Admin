import apiClient from './apiClient';
import type { AppointmentResponse } from '$lib/dtos/appointmentResponse';

export const getAppointments = async (): Promise<AppointmentResponse[]> => {
	try {
		const response = await apiClient.get<{ AppointmentBoard: AppointmentResponse[] }>('/appointment-board/all', {
		});
		return response.data.AppointmentBoard;
	} catch (error) {
		console.error('채팅방 정보를 가져오는데 실패했습니다:', error);
		throw error;
	}
};
