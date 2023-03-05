<script>
    export let onPageChange;
    export let onUserChange;

    let activeUser = JSON.parse(localStorage.getItem("activeUser"));

    function logoutUser() {
        //Update active user in storage
        onUserChange(null);
        localStorage.setItem("activeUser", null);
        onPageChange("Login");
        localStorage.setItem("currentPage", "Login");
	}
</script>

<main>
    <p>Signed in as : <b>{activeUser.name}</b></p>
    <br>
    <button on:click={logoutUser}>Logout</button>
</main>

<style>
    p{
        color: white;
    }
</style>