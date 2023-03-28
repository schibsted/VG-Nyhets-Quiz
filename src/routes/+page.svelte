<script lang="ts">
	import type { UserAnswers } from '../types/QuizQuestions';
	import { quizQuestions } from '../utils/quizQuestion';
	import NextButton from './NextButton.svelte';
	import ProgressBar from './ProgressBar.svelte';
	import Quiz from './Quiz.svelte';
	import Score from './Score.svelte';

	const appName = 'VG NyhetsQuiz';

	const quizQuestionsData = quizQuestions.data;

	let userAnswers: UserAnswers = new Array(quizQuestionsData.length).fill(null);
	let currentScore = 0;
	let currentQuestionIndex = 0;

	quizQuestionsData.forEach((question) => {
		question.attributes.options.sort(() => Math.random() - 0.5);
	});

	function handleAnswerSelect(answerIndex: number) {
		if (userAnswers[currentQuestionIndex] !== null) {
			return;
		}

		const answer = quizQuestionsData[currentQuestionIndex].attributes.options[answerIndex];

		if (answer === quizQuestionsData[currentQuestionIndex].attributes.correct_answer) {
			currentScore++;
		}

		userAnswers[currentQuestionIndex] = answerIndex;
	}

	function nextQuestion() {
		currentQuestionIndex++;
	}
</script>

<svelte:head>
	<title>
		{appName}
	</title>
</svelte:head>

<ProgressBar value={(currentQuestionIndex / quizQuestionsData.length) * 100} />
{#if currentQuestionIndex < quizQuestionsData.length}
	<Quiz
		quizQuestions={quizQuestionsData}
		{currentQuestionIndex}
		{handleAnswerSelect}
		{userAnswers}
	/>
	<NextButton
		handleClick={() => nextQuestion()}
		{currentQuestionIndex}
		totalAmountQuestions={quizQuestionsData.length}
	/>
{/if}

<Score {currentScore} quizLength={quizQuestionsData.length} />
