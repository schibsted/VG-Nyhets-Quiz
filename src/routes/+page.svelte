<script lang="ts">
	import type { IsAnswered } from '../types/QuizQuestions';
	import { quizQuestions } from '../utils/quizQuestions';
	import ProgressBar from './ProgressBar.svelte';
	import Quiz from './Quiz.svelte';
	import Score from './Score.svelte';

	const appName = 'VG NyhetsQuiz';

	let isAnswered: IsAnswered = new Array(quizQuestions.length).fill(false);
	let currentScore = 0;
	let currentQuestionIndex = 0;

	quizQuestions.forEach((question) => {
		question.answers.sort(() => Math.random() - 0.5);
	});

	function handleAnswerSelect(answerIndex: number) {
		if (isAnswered[currentQuestionIndex]) {
			return;
		}

		const answer = quizQuestions[currentQuestionIndex].answers[answerIndex];

		if (answer.isCorrect) {
			currentScore++;
		}

		isAnswered[currentQuestionIndex] = true;
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
	<Quiz {quizQuestions} {currentQuestionIndex} {handleAnswerSelect} {isAnswered} />
	<button
		class="rounded-md bg-indigo-500 py-2 px-3 text-sm font-semibold text-white shadow-sm"
		on:click={() => nextQuestion()}
	>
		Neste
	</button>
{/if}

<Score {currentScore} quizLength={quizQuestions.length} />
