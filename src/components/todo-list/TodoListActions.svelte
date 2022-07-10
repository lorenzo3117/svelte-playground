<script lang="ts">
	import ClearTodosButton from './buttons/ClearTodosButton.svelte';
	import RemoveCompletedTodosButton from './buttons/RemoveCompletedTodosButton.svelte';
	import TodoListForm from './TodoListAdd.svelte';
</script>

<div class="actions">
	<TodoListForm />
	<RemoveCompletedTodosButton />
	<ClearTodosButton />
</div>

<style>
	.actions {
		display: flex;
		justify-content: flex-end;
		gap: 8px;
	}
</style>
