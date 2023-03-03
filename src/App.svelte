<script>
	import Header from './components/Header.svelte'
	import Footer from './components/Footer.svelte'
	import PollList from './components/PollList.svelte'
	import Tabs from './shared/Tabs.svelte'
	import CreatePollForm from './components/CreatePollForm.svelte'

	// tabs
	let items = ["Current Polls", "Add New Poll"];
	let activeItem = items[0];
	const tabChange = (eventObject) => {
		//Reset active item to whatever item is sent through event
		activeItem = eventObject.detail;
	}

	// polls
	let polls = [
		{
			id:1,
			question: 'Harvard or Yale?',
			answerA: 'Harvard',
			answerB: 'Yale',
			votesA: 178,
			votesB: 121,
		},
	];

	const handleAdd = (eventObject) => {
		const poll = eventObject.detail;
		polls = [poll, ...polls];
		console.log(polls);
		activeItem = items[0];
	}

</script>

<Header />
<main>
	<Tabs items={items} activeItem={activeItem} on:tabChange={tabChange}/>
	{#if activeItem === items[0]}
		<PollList polls={polls}/>
	{:else if activeItem === items[1]}
		<CreatePollForm on:add={handleAdd}/>
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