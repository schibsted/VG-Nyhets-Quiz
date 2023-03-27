<script lang="ts">
	import type { IsAnswered, QuizQuestinons } from '../types/QuizQuestions';
	import Question from './Question.svelte';

	export let quizQuestions: QuizQuestinons;
	export let handleAnswerSelect: (answerIndex: number) => void;
	export let isAnswered: IsAnswered;
	export let currentQuestionIndex: number;
</script>

<div class="quiz">
	<Question
		question={quizQuestions[currentQuestionIndex]}
		{handleAnswerSelect}
		isAnswered={isAnswered[currentQuestionIndex]}
	/>
</div>
