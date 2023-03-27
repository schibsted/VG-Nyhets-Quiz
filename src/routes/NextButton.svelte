<script lang="ts">
	export let handleClick: () => void;
</script>

<div class="flex justify-center mt-4">
	<button
		class="bg-[#d00000] py-3 px-8 text-xs font-semibold text-white shadow-sm rounded-lg w-3/5"
		on:click={handleClick}
	>
		Neste
	</button>
</div>
