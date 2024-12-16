<script lang="ts">
	import type { DashboardResponse } from '$lib/dtos/dashboardResponse';

	import Header from '$lib/components/Header.svelte';
	import Dashboard from '$lib/components/member/Dashboard.svelte';
	import { getMember } from '$lib/apis/dashboardAPI';
	import { deleteMember } from '$lib/apis/banAPI';

	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	let nickname: string | null = '';
	let members: DashboardResponse[] = [];
	let error: string = '';

	if (browser) {
		nickname = localStorage.getItem('nickname');
	}

	const handleBan = async (email: string) => {
		try {
			await deleteMember(email);
			members = await getMember();
		} catch (err) {
			alert("추방 중 오류가 발생했습니다.");
			console.error(err);
		}
	};

	onMount(async () => {
		const accessToken = localStorage.getItem('accessToken');

		if (!accessToken) {
			return goto('/login');
		}
		members = await getMember();
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
						사용자 관리
					</p>
				</div>
				{#if error}
					<p class="text-red-500 px-6">{error}</p>
				{/if}
				<Dashboard {members} onBan="{handleBan}"/>
			</main>
		</div>
	</main>
</div>
