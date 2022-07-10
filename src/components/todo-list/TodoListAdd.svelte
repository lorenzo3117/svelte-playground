<script lang="ts">
	import Button, { Label } from '@smui/button';
	import Dialog, { Actions, Content, Title } from '@smui/dialog';
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';
	import { todos } from '../../stores/TodoListStore';
	import AddTodoButton from './buttons/AddTodoButton.svelte';

	let open = false;

	let content = '';
	$: invalid = content === '';

	function handleSubmit() {
		if (!invalid) {
			todos.addTodo(content);
			content = '';
			open = false;
		}
	}
</script>

<AddTodoButton handleClick={() => (open = true)} />

<Dialog bind:open aria-labelledby="simple-title" aria-describedby="simple-content">
	<Title id="simple-title">Add TODO</Title>
	<Content id="simple-content">
		<Textfield bind:value={content} bind:invalid label="Content" type="text" input$minlength={3}>
			<HelperText style="margin-bottom: 16px" validationMsg slot="helper">
				Cannot be blank.
			</HelperText>
		</Textfield>
		<AddTodoButton handleClick={handleSubmit} />
	</Content>
	<Actions>
		<Button on:click={() => (open = false)}>
			<Label>Close</Label>
		</Button>
	</Actions>
</Dialog>
