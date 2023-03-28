<script lang="ts">
	import type { QuizQuestinonsData, UserAnswers } from '../types/QuizQuestions';
	import Question from './Question.svelte';

	export let quizQuestions: QuizQuestinonsData[];
	export let handleAnswerSelect: (answerIndex: number) => void;
	export let userAnswers: UserAnswers;
	export let currentQuestionIndex: number;
</script>

<div class="bg-white rounded-xl px-4 py-5">
	<p class="text-xs font-light">
		Spørsmål {currentQuestionIndex + 1}/{quizQuestions.length}
	</p>
	<Question
		question={quizQuestions[currentQuestionIndex]}
		{handleAnswerSelect}
		isAnswered={userAnswers[currentQuestionIndex] !== null}
		userAnswer={userAnswers[currentQuestionIndex]}
	/>
</div>
