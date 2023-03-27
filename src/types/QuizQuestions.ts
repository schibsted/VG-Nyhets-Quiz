export type IsAnswered = boolean[];

export type QuizQuestinons = QuizQuestion[];

export interface QuizQuestion {
	question: string;
	answers: Answer[];
}

interface Answer {
	text: string;
	isCorrect: boolean;
}
