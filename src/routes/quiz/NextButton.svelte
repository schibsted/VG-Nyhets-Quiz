<script lang="ts">
	export let handleClick: () => void;
	export let currentQuestionIndex: number;
	export let totalAmountQuestions: number;
</script>

<div class="flex justify-center mt-4">
	<button
		class="bg-[#d00000] py-3 px-8 text-xs font-semibold text-white shadow-sm rounded-lg w-3/5"
		on:click={handleClick}
	>
		{currentQuestionIndex + 1 !== totalAmountQuestions ? 'Neste' : 'Fullfør'}
	</button>
</div>
