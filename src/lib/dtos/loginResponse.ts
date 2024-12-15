export type LoginResponse = {
	accessToken: string;
	refreshToken: string | null;
	nickname: string;
	role: string;
}
