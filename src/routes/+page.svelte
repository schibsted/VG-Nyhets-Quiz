<script lang="ts">
	import type { UserAnswers } from '../types/QuizQuestions';
	import { quizQuestions } from '../utils/quizQuestions';
	import NextButton from './NextButton.svelte';
	import ProgressBar from './ProgressBar.svelte';
	import Quiz from './Quiz.svelte';
	import Score from './Score.svelte';

	const appName = 'VG NyhetsQuiz';

	let userAnswers: UserAnswers = new Array(quizQuestions.length).fill(null);
	let currentScore = 0;
	let currentQuestionIndex = 0;

	quizQuestions.forEach((question) => {
		question.answers.sort(() => Math.random() - 0.5);
	});

	function handleAnswerSelect(answerIndex: number) {
		if (userAnswers[currentQuestionIndex] !== null) {
			return;
		}

		const answer = quizQuestions[currentQuestionIndex].answers[answerIndex];

		if (answer.isCorrect) {
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

<ProgressBar value={(currentQuestionIndex / quizQuestions.length) * 100} />
{#if currentQuestionIndex < quizQuestions.length}
	<Quiz {quizQuestions} {currentQuestionIndex} {handleAnswerSelect} {userAnswers} />
	<NextButton
		handleClick={() => nextQuestion()}
		{currentQuestionIndex}
		totalAmountQuestions={quizQuestions.length}
	/>
{/if}

<Score {currentScore} quizLength={quizQuestions.length} />
