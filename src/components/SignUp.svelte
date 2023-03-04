<script>
    let allUsers = {};
    if (localStorage.getItem("allUsers") != null) {
        allUsers = JSON.parse(localStorage.getItem("allUsers"));
    }
    
    let newUserName = "";
    let newPassword = "";
    let newUserAge = 0;
    let currentUserName = "";

    function createUser() {
        let newUser = {
            name: newUserName,
            age: newUserAge
        }
        allUsers[newUserName] = newUser;
        localStorage.setItem("allUsers", JSON.stringify(allUsers));
	}
</script>
<main>
    <label for="username">Username:</label>
    <input type="text" placeholder = "Name" id="username" name="username" bind:value={newUserName}>
    <label for="password">Password:</label>
    <input type="password" placeholder = "Password" id="password" name="password" bind:value={newPassword}>
    <br>
    <button on:click={createUser}>Sign Up</button>
    <ul>
            {#each Object.entries(allUsers) as [userID, userObj]}
            <span>{userObj.name},</span>
            {/each}
    </ul>

</main>
<style>
</style>