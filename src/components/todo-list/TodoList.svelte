<script lang="ts">
	import { todos } from '../../stores/TodoListStore';
	import TodoListActions from './TodoListActions.svelte';
	import TodoListTable from './TodoListTable.svelte';
</script>

<h4>TODO list</h4>
<p>You have {$todos.length} TODO(s) in total.</p>
<TodoListTable />
<br />
<br />
<TodoListActions />
