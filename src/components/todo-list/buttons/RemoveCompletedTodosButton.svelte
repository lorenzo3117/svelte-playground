<script lang="ts">
	import Button, { Icon, Label } from '@smui/button';
	import { todos } from '../../../stores/TodoListStore';

	function handleClick() {
		todos.removeCompleted();
	}
</script>

<Button on:click={handleClick} variant="outlined">
	<Icon class="material-icons">remove</Icon>
	<Label>Remove completed</Label>
</Button>
