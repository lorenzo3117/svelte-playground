<script lang="ts">
	import Button, { Label } from '@smui/button';
	import Checkbox from '@smui/checkbox';
	import DataTable, { Body, Cell, Head, Pagination, Row } from '@smui/data-table';
	import IconButton from '@smui/icon-button';
	import Select, { Option } from '@smui/select';
	import { dateToString } from '../../helpers/dateToString';
	import { todos } from '../../stores/TodoListStore';

	let rowsPerPage = 10;
	let currentPage = 0;

	$: start = currentPage * rowsPerPage;
	$: end = Math.min(start + rowsPerPage, $todos.length);
	$: lastPage = Math.max(Math.ceil($todos.length / rowsPerPage) - 1, 0);

	function handleToggle(id: number) {
		todos.toggleTodo(id);
	}

	function handleRemove(id: number) {
		todos.removeTodo(id);
	}
</script>

<DataTable table$aria-label="Todos list" style="width: 100%;">
	<Head>
		<Row>
			<Cell checbox>Completed?</Cell>
			<Cell style="width: 100%;">Content</Cell>
			<Cell>Created at</Cell>
			<Cell>Completed at</Cell>
			<Cell>Remove</Cell>
		</Row>
	</Head>
	<Body>
		{#each $todos as { id, content, completed, completedAt }}
			<Row>
				<Cell checkbox>
					<Checkbox checked={completed} on:click={() => handleToggle(id)} />
				</Cell>
				<Cell class={completed ? 'line-through' : ''}>{content}</Cell>
				<Cell>{dateToString(id)}</Cell>
				<Cell>{completedAt ? dateToString(completedAt) : ''}</Cell>
				<Cell>
					<IconButton class="material-icons" on:click={() => handleRemove(id)}>delete</IconButton>
				</Cell>
			</Row>
		{/each}
	</Body>

	<Pagination slot="paginate">
		<svelte:fragment slot="rowsPerPage">
			<Label>Rows Per Page</Label>
			<Select variant="outlined" bind:value={rowsPerPage} noLabel>
				<Option value={10}>10</Option>
				<Option value={25}>25</Option>
				<Option value={100}>100</Option>
			</Select>
		</svelte:fragment>
		<svelte:fragment slot="total">
			{start + 1}-{end} of {$todos.length}
		</svelte:fragment>

		<IconButton
			class="material-icons"
			action="first-page"
			title="First page"
			on:click={() => (currentPage = 0)}
			disabled={currentPage === 0}>first_page</IconButton
		>
		<IconButton
			class="material-icons"
			action="prev-page"
			title="Prev page"
			on:click={() => currentPage--}
			disabled={currentPage === 0}>chevron_left</IconButton
		>
		<IconButton
			class="material-icons"
			action="next-page"
			title="Next page"
			on:click={() => currentPage++}
			disabled={currentPage === lastPage}>chevron_right</IconButton
		>
		<IconButton
			class="material-icons"
			action="last-page"
			title="Last page"
			on:click={() => (currentPage = lastPage)}
			disabled={currentPage === lastPage}>last_page</IconButton
		>
	</Pagination>
</DataTable>
