<script lang="ts">
	import type { DashboardResponse } from '$lib/dtos/dashboardResponse';
	import ConfirmModal from '$lib/components/Confirm.svelte';

	export let members: DashboardResponse[] = [];
	export let onBan: (email: string) => void;

	let showModal = false;
	let selectedMember: DashboardResponse | null = null;

	const handleBan = (member: DashboardResponse) => {
		selectedMember = member;
		showModal = true;
	};

	const confirmBan = async () => {
		if (selectedMember) {
			onBan(selectedMember.email!);
			selectedMember = null;
		}
	};
</script>

<div
	class="flex self-stretch bg-[#FCFAF7] border border-[#E8DECF] rounded-[12px] px-4"
>
	<table class="table-fixed flex-1">
		<thead>
		<tr class="bg-[#FCFAF7]">
			<th class="w-[135px] text-center px-4 py-3 font-bold">닉네임</th>
			<th class="w-[383px] text-center px-4 py-3 font-bold">이메일</th>
			<th class="w-[200px] text-center px-4 py-3 font-bold">누적 신고 수</th>
			<th class="w-[160px] text-center px-4 py-3 font-bold">관리하기</th>
		</tr>
		</thead>
		<tbody>
		{#each members as member}
			<tr class="border-t border-[#E8DECF] h-[50px]">
				<td class="text-center px-4 py-2">{member.name}</td>
				<td class="text-center px-4 py-2">{member.email}</td>
				<td class="text-center px-4 py-2">0회</td>
				<td class="text-center px-4 py-2">
					<button
						class="text-white text-sm font-bold px-4 py-2 bg-[#6B4F27] rounded-md hover:bg-[#907f51] focus:outline-none focus:ring-2 focus:ring-[#6B4F27]"
						on:click={() => handleBan(member)}
					>
						추방하기
					</button>
				</td>
			</tr>
		{/each}
		</tbody>
	</table>
</div>

{#if showModal}
	<ConfirmModal
		title="추방하기"
		message={`${selectedMember?.name} 님을 추방하시겠습니까?`}
		confirmMessage="추방이 완료되었습니다."
		onConfirm={confirmBan}
		onClose={() => showModal = false}
	/>
{/if}
