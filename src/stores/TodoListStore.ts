import type { ITodo } from 'src/types/todo.type';
import { writable } from 'svelte/store';

const MOCK_DATA: ITodo[] = [
	{
		id: Date.now(),
		content: 'Learn Svelte',
		completed: true,
		completedAt: Date.now()
	},
	{
		id: Date.now() + 1,
		content: 'Build a todo app',
		completed: true,
		completedAt: Date.now() + 1
	},
	{
		id: Date.now() + 2,
		content: 'Find a job',
		completed: false,
		completedAt: undefined
	}
];

function createTodos() {
	const { subscribe, update } = writable(MOCK_DATA);

	function _addTodo(content: string) {
		update((todos) => {
			const todo = {
				id: Date.now(),
				content,
				completed: false,
				completedAt: undefined
			};
			return [...todos, todo];
		});
	}

	function _toggleTodo(id: number) {
		update((todos) => {
			const todo = todos.find((todo) => todo.id === id);

			if (todo) {
				todo.completed = !todo.completed;
				todo.completedAt = Date.now();
			}

			return todos;
		});
	}

	function _removeTodo(id: number) {
		update((todos) => todos.filter((todo) => todo.id !== id));
	}

	function _removeCompleted() {
		update((todos) => todos.filter((todo) => !todo.completed));
	}

	function _clearTodos() {
		update(() => []);
	}

	return {
		subscribe,
		addTodo: _addTodo,
		toggleTodo: _toggleTodo,
		removeTodo: _removeTodo,
		removeCompleted: _removeCompleted,
		clearTodos: _clearTodos
	};
}

export const todos = createTodos();
