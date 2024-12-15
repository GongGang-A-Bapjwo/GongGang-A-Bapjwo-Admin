import apiClient from './apiClient';
import type { LoginRequest } from '$lib/dtos/loginRequest';
import type { LoginResponse } from '$lib/dtos/loginResponse';

export const login = async (credentials: LoginRequest): Promise<LoginResponse> => {
	const response = await apiClient.post<LoginResponse>('/admin/login', credentials);
	return response.data;
};
