import type { ITodo } from 'src/types/todo.type';
import { writable } from 'svelte/store';

const MOCK_DATA: ITodo[] = [
	{
		id: 1,
		content: 'Learn Svelte',
		completed: false
	},
	{
		id: 2,
		content: 'Build a todo app',
		completed: false
	}
];

function createTodos() {
	const { subscribe, set, update } = writable(MOCK_DATA);

	return {
		subscribe,
		toggleTodo: (id: number) =>
			update((todos) => {
				const todo = todos.find((todo) => todo.id === id);
				if (todo) todo.completed = !todo.completed;
				return todos;
			}),
		removeTodo: (id: number) => update((todos) => todos.filter((todo) => todo.id !== id)),
		reset: () => set([])
	};
}

export const todos = createTodos();
