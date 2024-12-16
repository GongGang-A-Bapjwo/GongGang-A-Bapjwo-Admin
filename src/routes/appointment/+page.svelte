<script lang="ts">
	import type { AppointmentResponse } from '$lib/dtos/appointmentResponse';

	import Header from '$lib/components/Header.svelte';
	import Board from '$lib/components/appointment/Dashboard.svelte';
	import { getAppointments } from '$lib/apis/appointmentAPI';
	import { deleteAppointment } from '$lib/apis/banAPI';

	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let nickname: string | null = '';
	let appointments: AppointmentResponse[] = [];
	let error: string = '';

	if (browser) {
		nickname = localStorage.getItem('nickname');
	}

	const handleBan = async (boardId: bigint) => {
		try {
			await deleteAppointment(boardId);
			appointments = await getAppointments();
		} catch (err) {
			alert('삭제 중 오류가 발생했습니다.');
			console.error(err);
		}
	};

	onMount(async () => {
		appointments = await getAppointments();
	});
</script>

<div>
	<Header {nickname} />
	<main class="flex justify-center">
		<div class="flex flex-col items-center flex-shrink-0 w-[960px] h-[695px]">
			<main class="w-full">
				<div
					class="flex flex-wrap items-start content-start justify-between p-6 row-gap-12 self-stretch"
				>
					<p
						class="text-[#0D121C] font-[700] text-[32px] leading-[40px] font-feature-dlig font-inter"
					>
						채팅방 관리
					</p>
				</div>
				{#if error}
					<p class="text-red-500 px-6">{error}</p>
				{/if}
				<Board {appointments} onBan="{handleBan}" />
			</main>
		</div>
	</main>
</div>
