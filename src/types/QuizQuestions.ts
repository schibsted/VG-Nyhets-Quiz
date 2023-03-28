export type UserAnswers = UserAnswer[];

export type UserAnswer = number | null;

export type QuizQuestinons = QuizQuestion[];

export interface QuizQuestion {
	question: string;
	answers: Answer[];
}

interface Answer {
	text: string;
	isCorrect: boolean;
	id: number;
}
