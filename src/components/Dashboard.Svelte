<script>
  import Calendar from "./Calendar.svelte";

    export let onPageChange;
    export let onUserChange;

    let savedSelection = null;

    if (localStorage.getItem("activeUser").selection != null) {
        savedSelection = JSON.parse(localStorage.getItem("activeUser").selection);
    }

    function updateSelection(newSelection){
		savedSelection = newSelection;
	}

    let activeUser = JSON.parse(localStorage.getItem("activeUser"));

    function logoutUser() {
        //Update active user in storage
        onUserChange(null);
        localStorage.setItem("activeUser", null);
        onPageChange("SignUp");
        localStorage.setItem("currentPage", "SignUp");
	}
</script>

<main>
    <p>Signed in as : <b>{activeUser.name}</b></p>
    <br>
    <button on:click={logoutUser}>Logout</button>
    <Calendar/>
</main>

<style>
    p{
        color: white;
    }
</style>