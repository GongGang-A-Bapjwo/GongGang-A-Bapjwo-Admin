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
	class="flex items-start self-stretch bg-[#FCFAF7] border border-[#E8DECF] rounded-[12px] px-4"
>
	<table class="flex-1 w-full">
		<thead>
		<tr class="bg-[#FCFAF7]">
			<th class="w-[170px] text-left px-4 py-3 text-base font-bold">ID</th>
			<th class="text-left px-4 py-3 text-base font-bold">카테고리</th>
			<th class="w-[170px] text-left px-4 py-3 text-base font-bold">누적 신고 수</th>
			<th class="w-[170px] text-right px-4 py-3 text-base font-bold">관리하기</th>
		</tr>
		</thead>
		<tbody>
		{#each appointments as appointment}
			<tr class="border-t border-[#d0d7e7] h-[50px]">
				<td class="px-4 py-2">{appointment.id}</td>
				<td class="px-4 py-2">{appointment.category}</td>
				<td class="px-4 py-2">{appointment.reportCount}회</td>
				<td class="px-4 py-2 text-right">
					<button
						class="text-[#907f51] text-sm font-bold"
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
