<script lang="ts">
	import Button, { Icon, Label } from '@smui/button';
	import { todos } from '../../../stores/TodoListStore';

	function handleClick() {
		todos.clearTodos();
	}
</script>

<Button on:click={handleClick} variant="outlined">
	<Icon class="material-icons">delete</Icon>
	<Label>Clear</Label>
</Button>
