export type UserAnswers = UserAnswer[];

export type UserAnswer = number | null;

export interface QuizQuestinons {
	data: QuizQuestinonsData[];
	meta: Meta;
}

interface Meta {
	pagination: Pagination;
}

interface Pagination {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
}

export interface QuizQuestinonsData {
	id: number;
	attributes: QuizQuestinonsAtributes;
}

interface QuizQuestinonsAtributes {
	question: string;
	hint: string;
	correct_answer: string;
	options: string[];
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	article_id: string;
}
