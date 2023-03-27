<script lang="ts">
	import { quizQuestions } from '../utils/quizQuestions';

	const appName = 'VG NyhetsQuiz';

	let isAnswered = new Array(quizQuestions.length).fill(false);
	let currentScore = 0;
	let currentQuestionIndex = 0;

	$: isAnswered, console.log(isAnswered);
	$: currentScore, console.log(currentScore);

	function handleAnswerSelect(answerIndex: number, questionIndex: number) {
		if (isAnswered[questionIndex]) {
			return;
		}

		const answer = quizQuestions[questionIndex].answers[answerIndex];

		if (answer.isCorrect) {
			currentScore++;
		}

		isAnswered[questionIndex] = true;
		const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
			`.question-${questionIndex} button`
		);
		buttons.forEach((button) => (button.disabled = true));
	}

	quizQuestions.forEach((question) => {
		question.answers.sort(() => Math.random() - 0.5);
	});

	function nextQuestion(questionIndex: number) {
		currentQuestionIndex = questionIndex + 1;
	}
</script>

<svelte:head>
	<title>
		{appName}
	</title>
</svelte:head>

<h1>{appName}</h1>
<div>
	{#if currentQuestionIndex < quizQuestions.length}
		<div class="question question-{currentQuestionIndex}">
			<p>{quizQuestions[currentQuestionIndex].question}</p>
			{#each quizQuestions[currentQuestionIndex].answers as answer, answerIndex}
				<button
					on:click={() => handleAnswerSelect(answerIndex, currentQuestionIndex)}
					disabled={isAnswered[currentQuestionIndex]}
				>
					{answer.text}
				</button>
			{/each}
		</div>
		<button on:click={() => nextQuestion(currentQuestionIndex)}> neste</button>
	{/if}
</div>

<p>Your score: {currentScore} out of {quizQuestions.length}</p>
