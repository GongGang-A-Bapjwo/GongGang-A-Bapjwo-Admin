<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		if (browser) {
			const accessToken = localStorage.getItem('accessToken');

			if (!accessToken) {
				goto('/login');
			}
			goto('/dashboard');
		}
	});
</script>
