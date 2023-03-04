<script>
    let allUsers = {};
    if (localStorage.getItem("allUsers") != null) {
        allUsers = JSON.parse(localStorage.getItem("allUsers"));
    }
    
    let newUserName = "";
    let newPassword = "";
    let errorUserBool = false;
    let errorUserMessage = ""
    let errorPasswordBool = false;
    let errorPasswordMessage = ""

    function createUser() {
        //Username Validation
        if(newUserName.trim() === ''){
            errorUserMessage = "Cannot have empty username"
            errorUserBool = true;
        }
        else if(newUserName.startsWith(" ")){
            errorUserMessage = "Username cannot start with spaces"
            errorUserBool = true;
        }
        else if(newUserName in allUsers)
        {
            errorUserMessage = "Username already exists"
            errorUserBool = true;
        }
        else{
            errorUserBool = false;
        }

        //Password Validation
        if(newPassword.length < 1){
            errorPasswordBool = true;
            errorPasswordMessage = "Cannot have empty password"
        }
        else{
            errorPasswordBool = false;
        }

        if(errorUserBool == false && errorPasswordBool == false){
            let newUser = {
                name: newUserName
            }
            allUsers[newUserName] = newUser;
            localStorage.setItem("allUsers", JSON.stringify(allUsers));
        }
	}
</script>
<main>
    <h1>Welcome to Votable</h1>
    <h3>You have been invited to schedule a meeting</h3>

    <label for="username">Username:</label>
    <input type="text" placeholder = "Name" id="username" name="username" bind:value={newUserName}>
    {#if errorUserBool}
        <br>
        <error>{errorUserMessage}</error>
    {/if}
    <label for="password">Password:</label>
    <input type="password" placeholder = "Password" id="password" name="password" bind:value={newPassword}>
    {#if errorPasswordBool}
        <br>
        <error>{errorPasswordMessage}</error>
    {/if}
    <br>
    <button on:click={createUser}>Sign Up</button>
    <br>
    <span>Already</span>
    <b>Other invitees include:</b>
    {#each Object.entries(allUsers) as [userID, userObj]}
    <span>{userObj.name},</span>
    {/each}

</main>
<style>
    error{
        color: red;
    }
</style>