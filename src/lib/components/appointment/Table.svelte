<script lang="ts">
	import type { AppointmentResponse } from '$lib/dtos/appointmentResponse';
	import ConfirmModal from '$lib/components/Confirm.svelte';

	export let appointments: AppointmentResponse[] = [];
	export let onBan: (boardId: bigint) => void;

	let showModal = false;
	let selectedAppointment: AppointmentResponse | null = null;

	const handleBan = (appointment: AppointmentResponse) => {
		selectedAppointment = appointment;
		showModal = true;
	};

	const confirmBan = async () => {
		if (selectedAppointment) {
			onBan(selectedAppointment.id);
			selectedAppointment = null;
		}
	};
</script>

<div
	class="flex self-stretch bg-[#FCFAF7] border border-[#E8DECF] rounded-[12px] px-4"
>
	<table class="table-fixed flex-1">
		<thead>
		<tr class="bg-[#FCFAF7]">
			<th class="w-[135px] text-center px-4 py-3 font-bold">ID</th>
			<th class="w-[383px] text-center px-4 py-3 font-bold">카테고리</th>
			<th class="w-[200px] text-center px-4 py-3 font-bold">누적 신고 수</th>
			<th class="w-[160px] text-center px-4 py-3 font-bold">관리하기</th>
		</tr>
		</thead>
		<tbody>
		{#each appointments as appointment}
			<tr class="border-t border-[#E8DECF] h-[50px]">
				<td class="text-center px-4 py-2">{appointment.id}</td>
				<td class="text-center px-4 py-2">{appointment.category}</td>
				<td class="text-center px-4 py-2">{appointment.reportCount}회</td>
				<td class="text-center px-4 py-2">
					<button
						class="text-white text-sm font-bold px-4 py-2 bg-[#6B4F27] rounded-md hover:bg-[#907f51] focus:outline-none focus:ring-2 focus:ring-[#6B4F27]"
						on:click={() => handleBan(appointment)}
					>
						삭제하기
					</button>
				</td>
			</tr>
		{/each}
		</tbody>
	</table>
</div>

{#if showModal}
	<ConfirmModal
		title="삭제하기"
		message={`${selectedAppointment?.id}번 채팅방을 삭제하시겠습니까?`}
		confirmMessage="삭제가 완료되었습니다."
		onConfirm={confirmBan}
		onClose={() => showModal = false}
	/>
{/if}
