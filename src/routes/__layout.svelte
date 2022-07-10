<script lang="ts">
	import Drawer, { Content, AppContent } from '@smui/drawer';
	import IconButton from '@smui/icon-button';
	import List, { Item, Text } from '@smui/list';
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';

	const routes = [
		{
			name: 'Home',
			path: '/'
		},
		{
			name: 'Todo List',
			path: '/todo-list'
		}
	];

	let open = false;

	function handleToggle() {
		open = !open;
	}
</script>

<Drawer variant="modal" fixed={false} bind:open>
	<Content>
		<List>
			{#each routes as { name, path }}
				<Item href={path} on:click={handleToggle}>
					<Text>{name}</Text>
				</Item>
			{/each}
		</List>
	</Content>
</Drawer>

<AppContent>
	<TopAppBar variant="static" color="primary">
		<Row>
			<Section>
				<IconButton class="material-icons" on:click={handleToggle}>menu</IconButton>
				<Title>Svelte playground</Title>
			</Section>
			<Section align="end" toolbar>
				<!-- <IconButton class="material-icons" aria-label="Github">github</IconButton> -->
			</Section>
		</Row>
	</TopAppBar>

	<main>
		<slot />
	</main>
</AppContent>

<style lang="scss" global>
	@import '../../static/_typography.scss';

	body {
		margin: 0;
	}

	main {
		padding: 0 24px;
	}
</style>
