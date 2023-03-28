<script lang="ts">
	import type { QuizQuestion, UserAnswer } from '../types/QuizQuestions';
	import CheckmarkIcon from './Icons/CheckmarkIcon.svelte';

	export let question: QuizQuestion;
	export let handleAnswerSelect: (answerIndex: number) => void;
	export let isAnswered: boolean;
	export let userAnswer: UserAnswer;

	$: userAnswer, console.log(userAnswer);
</script>

<h1 class="text-xl pb-2">{question.question}</h1>
<div class="flex flex-col gap-2">
	{#each question.answers as answer, index}
		<button
			class="
            p-4 flex row gap-4 rounded-xl border {userAnswer === index
				? 'border-[#1b1b1d]'
				: 'border-[#3C3C43]/29'} {userAnswer !== null && userAnswer !== undefined
				? answer.isCorrect
					? 'bg-green-50'
					: 'bg-red-50'
				: 'bg-white'}"
			on:click={() => handleAnswerSelect(index)}
			disabled={isAnswered}
		>
			{#if userAnswer === index}
				<CheckmarkIcon />
			{/if}
			{answer.text}
		</button>
	{/each}
</div>
