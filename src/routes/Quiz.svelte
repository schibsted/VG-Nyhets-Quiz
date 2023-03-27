<script lang="ts">
	import type { IsAnswered, QuizQuestinons } from '../types/QuizQuestions';
	import Question from './Question.svelte';

	export let quizQuestions: QuizQuestinons;
	export let handleAnswerSelect: (answerIndex: number) => void;
	export let isAnswered: IsAnswered;
	export let currentQuestionIndex: number;
</script>

<div class="bg-white rounded-xl px-4 py-5">
	<p class="text-xs font-light">
		Spørsmål {currentQuestionIndex + 1}/{quizQuestions.length}
	</p>
	<Question
		question={quizQuestions[currentQuestionIndex]}
		{handleAnswerSelect}
		isAnswered={isAnswered[currentQuestionIndex]}
	/>
</div>
