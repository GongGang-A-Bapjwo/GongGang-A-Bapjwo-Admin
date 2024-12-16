<script lang="ts">
	import Table from '$lib/components/member/Table.svelte';
	import SearchInput from '$lib/components/SearchInput.svelte';
	import type { DashboardResponse } from '$lib/dtos/dashboardResponse';

	export let members: DashboardResponse[] = [];
	export let onBan: (email: string) => void;

	let searchQuery: string = '';

	$: filteredMembers = members.filter((member) =>
		member.name.includes(searchQuery)
	);
</script>

<div>
	<main class="px-6 items-center">
		<div class="flex h-[72px] items-center flex-shrink-0">
			<SearchInput bind:value={searchQuery} placeholder="사용자 이름을 입력해주세요."/>
		</div>
		<Table members={filteredMembers} onBan={onBan}/>
	</main>
</div>
