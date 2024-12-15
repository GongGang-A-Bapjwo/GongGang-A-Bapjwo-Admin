<script lang="ts">
	export let title;
	export let message;
	export let confirmMessage;
	export let onConfirm;
	export let onClose;

	let confirmed = false;
	let isProcessing = false;

	const handleConfirm = async () => {
		isProcessing = true;
		try {
			await onConfirm();
			confirmed = true;
		} finally {
			isProcessing = false;
		}
	};
</script>

<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
	<div class="flex flex-col w-[290px] p-4 gap-5 bg-white rounded-lg">
		<p class="text-lg font-bold text-gray-900">{title}</p>
		{#if !confirmed}
			<p class="text-sm text-gray-600">{message}</p>
			<div class="flex gap-4 self-end">
				<button
					class="px-4 py-2 text-sm font-medium bg-[#E8DECF] rounded-md"
					disabled={isProcessing}
					on:click={onClose}
				>
					취소
				</button>
				<button
					class="px-4 py-2 text-sm font-medium bg-[#907f51] text-white rounded-md"
					disabled={isProcessing}
					on:click={handleConfirm}
				>
					{isProcessing ? '진행 중' : '확인'}
				</button>
			</div>
		{:else}
			<p class="text-sm text-gray-600">{confirmMessage}</p>
			<button
				class="px-4 py-2 text-sm font-medium bg-[#E8DECF] rounded-md"
				on:click={onClose}
			>
				닫기
			</button>
		{/if}
		</div>
	</div>
