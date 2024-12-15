<script lang="ts">
	export let onLogout: () => void = () => {};
</script>

<button
	class="flex items-center justify-center rounded-xl h-10 bg-[#907f51] text-white text-sm font-bold px-3"
	on:click={onLogout}
>
	<span>로그아웃</span>
</button>
