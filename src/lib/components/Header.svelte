<script lang="ts">
	export let title: string = "공강아 밥줘";
	export let nickname;

	import LogoutButton from '$lib/components/LogoutButton.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores'; // Import SvelteKit's $page store

	import logo from '$lib/assets/gonggang.png';

	const handleLogout = () => {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('nickname');
		goto('/login');
	};
</script>

<header class="flex justify-between items-center self-stretch px-10 py-3 border-b border-[#E5E8EB]">
	<div class="flex items-center gap-4 text-[#0e121b]">
		<div class="size-10">
			<img src={logo} alt="로고 이미지"/>
		</div>
		<h2 class="text-lg font-bold">{title}</h2>
	</div>
	<div class="flex items-center gap-8">
		<p class="text-[#0e121b] text-m font-medium">
			{#if $page.url.pathname.startsWith('/dashboard')}
				<a href="/appointment">채팅방 관리하기</a>
			{:else if $page.url.pathname.startsWith('/appointment')}
				<a href="/dashboard">사용자 관리하기</a>
			{/if}
		</p>
		<p class="text-[#0e121b] text-m font-bold">|</p>
		<p class="text-[#0e121b] text-m font-medium">{nickname} 관리자님</p>
		<LogoutButton onLogout={handleLogout} />
	</div>
</header>
