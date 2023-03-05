<script>
	import SignUp from './components/SignUp.svelte';
	import Login from './components/Login.svelte';
	import Dashboard from './components/Dashboard.svelte';
	let pages = ["SignUp", "Login", "Dashboard"];
	let currentPage = pages[0];
	let activeUser;
	if (localStorage.getItem("activeUser") != null) {
        activeUser = JSON.parse(localStorage.getItem("activeUser"));
    }
	if (localStorage.getItem("currentPage") != null) {
        currentPage = localStorage.getItem("currentPage");
    }

	function updatePage(newPage){
		currentPage = newPage;
	}
	function updateUser(newUser){
		activeUser = newUser;
	}
</script>

<main>
	{#if currentPage == pages[0]}
		<SignUp onPageChange={updatePage} onUserChange={updateUser}/>
	{:else if currentPage == pages[1]}
		<Login onPageChange={updatePage} onUserChange={updateUser}/>
	{:else if currentPage == pages[2]}
		<Dashboard onPageChange={updatePage} onUserChange={updateUser}/>
	{/if}
	{#if activeUser}
		Signed in as : {activeUser.name}
	{/if}
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>