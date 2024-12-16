<script lang="ts">
	import Table from '$lib/components/appointment/Table.svelte';
	import SearchInput from '$lib/components/SearchInput.svelte';
	import type { AppointmentResponse } from '$lib/dtos/appointmentResponse';

	export let appointments: AppointmentResponse[] = [];
	export let onBan: (boardId: bigint) => void;

	let searchQuery: string = '';

	$: filteredAppointmentes = appointments.filter((appointment) =>
		appointment.category.toLowerCase().includes(searchQuery.toLowerCase())
	);
</script>

<div>
	<main class="px-6 items-center">
		<div class="flex h-[72px] items-center flex-shrink-0">
			<SearchInput bind:value={searchQuery} placeholder="채팅방 카테고리를 입력해주세요."/>
		</div>
		<Table appointments={filteredAppointmentes} onBan={onBan}/>
	</main>
</div>
