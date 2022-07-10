import type { ITodo } from 'src/types/todo.type';
import { writable } from 'svelte/store';

const MOCK_DATA: ITodo[] = [
	{
		id: 1,
		content: 'Learn Svelte',
		completed: true
	},
	{
		id: 2,
		content: 'Build a todo app',
		completed: true
	},
	{
		id: 3,
		content: 'Find a job',
		completed: false
	}
];

function createTodos() {
	const { subscribe, set, update } = writable(MOCK_DATA);

	function _addTodo(content: string) {
		update((todos) => {
			const todo = {
				id: todos.length + 1,
				content,
				completed: false
			};
			return [...todos, todo];
		});
	}

	function _toggleTodo(id: number) {
		update((todos) => {
			const todo = todos.find((todo) => todo.id === id);
			if (todo) todo.completed = !todo.completed;
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
