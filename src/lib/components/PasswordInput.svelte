<script lang="ts">
	export let value: string = '';
	export let label: string = '비밀번호';
</script>

<div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
	<label class="flex flex-col min-w-40 flex-1">
		<span class="pb-1 font-medium">{label}</span>
		<input
			type="password"
			bind:value
			class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1a170f] focus:outline-0 focus:ring-0 border border-[#e3dece] bg-[#f8f6f2] focus:border-[#e3dece] h-14 placeholder:text-[#907f51] p-[15px] text-base font-normal leading-normal"
		/>
	</label>
</div>
