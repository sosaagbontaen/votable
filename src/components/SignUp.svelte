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
    <img src="https://www.nicepng.com/png/full/16-166934_calendar-clock-icon-white-schedule-icon-png-white.png" id="logo" alt="Mountain">
    <div id="backdrop">
        <h1 class="in-backdrop" id ="title">Welcome to Votable</h1>
        <span class="in-backdrop" id="subtitle">You have been invited to schedule a meeting with :</span>
        <br>
        <div id="users">
            {#each Object.entries(allUsers) as [userID, userObj]}
            <span class="in-backdrop">{userObj.name}, &nbsp</span>
            {/each}
        </div>
        <label class="in-backdrop" for="username" id="username-label">Username:</label>
        <input type="text" placeholder = "Name" id="username" name="username" bind:value={newUserName}>
        {#if errorUserBool}
            <br>
            <error>{errorUserMessage}</error>
        {/if}
        <label class="in-backdrop"for="password">Password:</label>
        <input type="password" placeholder = "Password" id="password" name="password" bind:value={newPassword}>
        {#if errorPasswordBool}
            <br>
            <error>{errorPasswordMessage}</error>
        {/if}
        <br>
        <button id="actionButton" on:click={createUser}>Sign Up</button>
        <br>
        <span id="bottom-text">Already have an account?</span>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <span on:click={() => toLoginPage()} id ="login">Login</span>
        <br>
        <br>
    </div>


</main>
<style>
    #logo{
        width: 120px;
    }
    error{
        color: red;
    }
    input{
        color:black;
    }
    h1{
        margin:10px;
    }
    #backdrop{
		background-color: #356739;
        margin: 10px 300px 10px 300px;
        box-shadow: 200px;
	}
    *{
        color:rgb(255, 255, 255);
        font-family: 'Space Grotesk', sans-serif;
    }
    button{
        color:black;
    }
    #title{
        padding-top:20px;
        margin-bottom: 15px;
        font-family: 'Space Grotesk', sans-serif;
    }
    #username-label{
        margin-top:5px;
    }
    #username{
        margin-bottom: 20px;
    }
    #login{
        color: green;
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
    }
    #actionButton{
        margin-top: 20px;
        margin-bottom: 20px;
    }
    #users{
        font-weight: bold;
        margin-bottom: 30px;
    }
</style>