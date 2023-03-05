<script>
    export let onPageChange;
    export let onUserChange;

    let allUsers = {};
    if (localStorage.getItem("allUsers") != null) {
        allUsers = JSON.parse(localStorage.getItem("allUsers"));
    }
    
    //Username Variables
    let newUserName = "";
    let errorUserBool = false;
    let errorUserMessage = ""

    //Password Variables
    let newPassword = "";
    let errorPasswordBool = false;
    let errorPasswordMessage = ""

    function toLoginPage(){
        onPageChange("Login")
        localStorage.setItem("currentPage", "Login");
    }
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
                name: newUserName,
                password: newPassword
            }
            //Update all users dict in storage
            allUsers[newUserName] = newUser;
            localStorage.setItem("allUsers", JSON.stringify(allUsers));
            //Update active user in storage
            onUserChange(newUser);
            localStorage.setItem("activeUser", JSON.stringify(newUser));
            onPageChange("Dashboard");
            localStorage.setItem("currentPage", "Dashboard");
        }
	}
</script>
<main>
    <h1>Welcome to Votable</h1>
    <b>You have been invited to schedule a meeting with :</b>
    {#each Object.entries(allUsers) as [userID, userObj]}
    <span>{userObj.name}, &nbsp</span>
    {/each}
    <br><br>

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
    <span>Already have an account?</span>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span on:click={() => toLoginPage()} id ="login">Login</span>
    <br>

</main>
<style>
    error{
        color: red;
    }
    h1{
        margin:10px;
    }
    #login{
        color: green;
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
    }
</style>