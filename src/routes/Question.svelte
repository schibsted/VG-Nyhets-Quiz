<script lang="ts">
	import type { QuizQuestion } from '../types/QuizQuestions';

	export let question: QuizQuestion;
	export let handleAnswerSelect: (answerIndex: number) => void;
	export let isAnswered: boolean;
</script>

<div class="question">
	<h1>{question.question}</h1>
	{#each question.answers as answer, index}
		<button on:click={() => handleAnswerSelect(index)} disabled={isAnswered}>
			{answer.text}
		</button>
	{/each}
</div>
