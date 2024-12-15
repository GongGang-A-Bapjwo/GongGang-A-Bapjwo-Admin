<script lang="ts">
	let username = '';
	let password = '';
	let loginError = '';
	let isLoading = false; // State to track loading

	import TextInput from '$lib/components/Textinput.svelte';
	import PasswordInput from '$lib/components/PasswordInput.svelte';
	import LoginButton from '$lib/components/LoginButton.svelte';
	import { login } from '$lib/apis/authAPI';
	import { goto } from '$app/navigation';

	import logo from '$lib/assets/gonggang.png';

	async function handleLogin(event: SubmitEvent) {
		event.preventDefault();
		isLoading = true; // Set loading state to true

		try {
			loginError = '';
			const response = await login({ id: username, password });

			localStorage.setItem('accessToken', response.accessToken);
			localStorage.setItem('nickname', response.nickname);

			await goto('/dashboard');
		} catch (error) {
			console.error('로그인 실패', error);
			loginError = '아이디 또는 비밀번호가 올바르지 않습니다.';
		} finally {
			isLoading = false; // Reset loading state
		}
	}
</script>

<svelte:head>
	<title>로그인 | 공강아 밥줘</title>
</svelte:head>

<main class="flex items-center justify-center min-h-screen bg-gray-50">
	<form
		class="flex flex-col w-full max-w-md p-6 bg-white rounded-lg shadow-md"
		on:submit={handleLogin}
	>
		<div class="flex items-center justify-center h-40">
			<img src={logo} alt="로고 이미지" class="h-full object-contain" />
		</div>
		<TextInput bind:value={username} />
		<PasswordInput bind:value={password} />
		{#if loginError}
			<p class="text-red-500 mt-2 text-sm px-4">{loginError}</p>
		{/if}
		<div class="mt-8">
			<LoginButton label={isLoading ? '로그인 중' : '로그인'} disabled={isLoading} />
		</div>
	</form>
</main>
