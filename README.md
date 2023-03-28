# VG NyhetsQuiz

VG NyhetsQuiz is a simple quiz application built with SvelteKit and Tailwind CSS. Users can test their knowledge by answering multiple-choice questions related to this week's news image. The app displays one question at a time.

## Features

- Multiple-choice questions with randomized answer options
- Progress bar to indicate the user's progress through the quiz

## File Structure

The project is organized into the following directories:

- `src`: Contains the main application files, including Svelte components, TypeScript types, and utility files.
  - `routes`: Contains the main Svelte components that make up the application's interface, such as the Quiz, Question, and Score components.
  - `types`: Contains TypeScript type definitions for the quiz questions.
  - `utils`: Contains utility files, such as the quizQuestions.ts file which provides the quiz data.
- `static`: Contains static assets like the favicon.
