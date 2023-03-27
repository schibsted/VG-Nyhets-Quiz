<script>
	const appName = 'VG NyhetsQuiz';
	import { quizQuestions } from '../utils/quizQuestions';
	import { onMount } from 'svelte';

	let currentQuestionIndex = 0;
	let currentScore = 0;

	function handleAnswerSelect(answer) {
		if (answer.isCorrect) {
			currentScore++;
		}

		if (currentQuestionIndex < quizQuestions.length - 1) {
			currentQuestionIndex++;
		} else {
			alert(`You scored ${currentScore} out of ${quizQuestions.length}!`);
		}
	}

	onMount(() => {
		quizQuestions.forEach((question) => {
			question.answers.sort(() => Math.random() - 0.5);
		});
	});
</script>

<svelte:head>
	<title>
		{appName}
	</title>
</svelte:head>

<h1>{appName}</h1>
<div>
	{#if currentQuestionIndex < quizQuestions.length}
		<p>{quizQuestions[currentQuestionIndex].question}</p>
		{#each quizQuestions[currentQuestionIndex].answers as answer}
			<button on:click={() => handleAnswerSelect(answer)}>
				{answer.text}
			</button>
		{/each}
	{/if}
</div>
