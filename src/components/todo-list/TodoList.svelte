<script lang="ts">
	import { todos } from '../../stores/TodoListStore';
	import TodoListTable from './TodoListTable.svelte';
</script>

<h3>TODO list</h3>
<p>You have {$todos.length} TODO(s) in total.</p>
<TodoListTable />
