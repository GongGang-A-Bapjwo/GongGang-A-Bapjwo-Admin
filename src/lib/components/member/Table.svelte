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
	class="flex items-start self-stretch bg-[#FCFAF7] border border-[#E8DECF] rounded-[12px] px-4"
>
	<table class="flex-1 w-full">
		<thead>
		<tr class="bg-[#FCFAF7]">
			<th class="w-[170px] text-left px-4 py-3 text-base font-bold">닉네임</th>
			<th class="text-left px-4 py-3 text-base font-bold">이메일</th>
			<th class="w-[170px] text-left px-4 py-3 text-base font-bold">누적 신고 수</th>
			<th class="w-[170px] text-right px-4 py-3 text-base font-bold">관리하기</th>
		</tr>
		</thead>
		<tbody>
		{#each members as member}
			<tr class="border-t border-[#d0d7e7] h-[50px]">
				<td class="px-4 py-2">{member.name}</td>
				<td class="px-4 py-2">{member.email}</td>
				<td class="px-4 py-2">0회</td>
				<td class="px-4 py-2 text-right">
					<button
						class="text-[#907f51] text-sm font-bold"
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
