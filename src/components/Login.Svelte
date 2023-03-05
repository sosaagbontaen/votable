<script>
    export let onPageChange;
    export let onUserChange;

    let allUsers = {};
    if (localStorage.getItem("allUsers") != null) {
        allUsers = JSON.parse(localStorage.getItem("allUsers"));
    }
    
    //Username Variables
    let existingUserName = "";
    let errorUserBool = false;
    let errorUserMessage = ""

    //Password Variables
    let existingPassword = "";
    let errorPasswordBool = false;
    let errorPasswordMessage = ""

    function toSignUpPage(){
        onPageChange("SignUp")
    }
    function createUser() {
        //Username Validation
        if(existingUserName.trim() === ''){
            errorUserMessage = "Cannot have empty username"
            errorUserBool = true;
        }
        else if(existingUserName.startsWith(" ")){
            errorUserMessage = "Username cannot start with spaces"
            errorUserBool = true;
        }
        else if(!(existingUserName in allUsers))
        {
            errorUserMessage = "User not found"
            errorUserBool = true;
        }
        else{
            errorUserBool = false;
        }

        //Password Validation
        if(existingPassword.length < 1){
            errorPasswordBool = true;
            errorPasswordMessage = "Cannot have empty password"
        }
        else{
            errorPasswordBool = false;
        }

        if(errorUserBool == false && errorPasswordBool == false){
            if(existingPassword === allUsers[existingUserName].password){
                errorPasswordBool = false;
                //Update active user in storage
                onUserChange(allUsers[existingUserName]);
                localStorage.setItem("activeUser", JSON.stringify(allUsers[existingUserName]));
            }
            else{
                errorPasswordBool = true;
                errorPasswordMessage = "Incorrect password" 
            }
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
    <input type="text" placeholder = "Name" id="username" name="username" bind:value={existingUserName}>
    {#if errorUserBool}
        <br>
        <error>{errorUserMessage}</error>
    {/if}
    <label for="password">Password:</label>
    <input type="password" placeholder = "Password" id="password" name="password" bind:value={existingPassword}>
    {#if errorPasswordBool}
        <br>
        <error>{errorPasswordMessage}</error>
    {/if}
    <br>
    <button on:click={createUser}>Login</button>
    <br>
    <span>New to Votable?</span>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span on:click={() => toSignUpPage()} id ="signup">Sign Up</span>
    <br>

</main>
<style>
    error{
        color: red;
    }
    h1{
        margin:10px;
    }
    #signup{
        color: rgb(206, 88, 8);
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
    }
</style>