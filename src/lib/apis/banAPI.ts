import apiClient from './apiClient';

export const deleteMember = async (email: string): Promise<void> => {
	try {
		const response = await apiClient.delete(`/user/${email}`);
		console.log(`${email} 사용자 추방 완료`);
		return response.data;
	} catch (error) {
		console.error('사용자를 추방하는데 실패했습니다:', error);
		throw error;
	}
};


export const deleteAppointment = async (boardId: bigint): Promise<void> => {
    try {
        const response = await apiClient.delete(`/${boardId}`);
        console.log(`${boardId} 채팅방 삭제 완료`);
        return response.data;
    } catch (error) {
        console.error('채팅방을 삭제하는데 실패했습니다:', error);
        throw error;
    }
};
