<script lang="ts">
	export let label;
	export let disabled: boolean = false;
</script>

<div class="flex px-4 py-3">
	<button
		class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-[#ceb87a] text-[#1a170f] text-base font-bold leading-normal tracking-[0.015em]"
		disabled={disabled}
	>
		<span class="truncate">{label}</span>
	</button>
</div>
