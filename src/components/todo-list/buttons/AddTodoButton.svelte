<script lang="ts">
	import Button, { Icon, Label } from '@smui/button';

	export let handleClick: () => void;
</script>

<Button on:click={handleClick} variant="raised">
	<Icon class="material-icons">add</Icon>
	<Label>Add TODO</Label>
</Button>
