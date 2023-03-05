<script>
    export let onPageChange;
    export let onUserChange;

    function logoutUser() {
        //Update active user in storage
        onUserChange(null);
        localStorage.setItem("activeUser", null);
        onPageChange("Login");
        localStorage.setItem("currentPage", "Login");
	}
</script>

<main>
    <button on:click={logoutUser}>Logout</button>
</main>