<script lang="ts">
	import type { QuizQuestion } from '../types/QuizQuestions';

	export let question: QuizQuestion;
	export let handleAnswerSelect: (answerIndex: number) => void;
	export let isAnswered: boolean;
</script>

<h1 class="text-xl pb-2">{question.question}</h1>
<div class="flex flex-col gap-2">
	{#each question.answers as answer, index}
		<button
			class="p-4 rounded-xl border border-[#3C3C43]/29"
			on:click={() => handleAnswerSelect(index)}
			disabled={isAnswered}
		>
			{answer.text}
		</button>
	{/each}
</div>
