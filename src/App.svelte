<script>
	import Header from './components/Header.svelte'
	import Footer from './components/Footer.svelte'
	import Tabs from './shared/Tabs.svelte'
	import CreatePollForm from './components/CreatePollForm.svelte'

	// tabs
	let items = ["Current Polls", "Add New Poll"];
	let activeItem = items[0];
	const tabChange = (eventObject) => {
		//Reset active item to whatever item is sent through event
		activeItem = eventObject.detail;
	}
</script>

<Header />
<main>
	<Tabs items={items} activeItem={activeItem} on:tabChange={tabChange}/>
	{#if activeItem === items[0]}
		<p>Active Item!</p>
	{:else if activeItem === items[1]}
	<CreatePollForm />
		<p>New Poll Item!</p>
	{/if}
</main>
<Footer />

<style>
	main{
		max-width: 960px;
		margin: 40px auto;
		text-align: center;
		color: #0e310b;
	}
</style>