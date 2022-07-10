<script lang="ts">
	import { todos } from '../../stores/TodoListStore';

	function handleToggle(id: number) {
		todos.toggleTodo(id);
	}

	function handleRemove(id: number) {
		todos.removeTodo(id);
	}
</script>

<table class="table">
	<thead>
		<tr>
			<th>Completed?</th>
			<th>Text</th>
			<th>Remove</th>
		</tr>
	</thead>
	<tbody class="table-group-divider">
		{#each $todos as todo}
			<tr>
				<td>
					<input
						class="form-check-input mt-0"
						type="checkbox"
						value=""
						aria-label="Checkbox for todo item"
						on:click={() => handleToggle(todo.id)}
					/>
				</td>
				<td class={todo.completed ? 'text-decoration-line-through' : ''}>{todo.content}</td>
				<td
					><button type="button" class="btn btn-danger" on:click={() => handleRemove(todo.id)}
						>Remove</button
					></td
				>
			</tr>
		{/each}
	</tbody>
</table>
