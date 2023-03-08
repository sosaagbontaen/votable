<script>
  const d = new Date();
  export let onPageChange;
  export let onUserChange;

  let allUsers = {};
  
  // SVELTE CONCEPT #1: CONTROL FLOW
  if (localStorage.getItem("allUsers") != null) {
    allUsers = JSON.parse(localStorage.getItem("allUsers"));
  }

  //Username Variables
  let inputUserName = "";
  let errorUserBool = false;
  let errorUserMessage = "";

  //Password Variables
  let inputPassword = "";
  let errorPasswordBool = false;
  let errorPasswordMessage = "";

  let savedSelection = null;

  let currentPage = localStorage.getItem("currentPage");

  function toLoginPage() {
    currentPage = "Login";
    onPageChange("Login");
    localStorage.setItem("currentPage", "Login");
  }
  function toSignupPage() {
    currentPage = "SignUp";
    onPageChange("SignUp");
    localStorage.setItem("currentPage", "SignUp");
  }
  function activateUser() {
    //Username Validation
    if (inputUserName.trim() === "") {
      errorUserMessage = "Cannot have empty username";
      errorUserBool = true;
    } else if (inputUserName.startsWith(" ")) {
      errorUserMessage = "Username cannot start with spaces";
      errorUserBool = true;
    } else if (inputUserName in allUsers && currentPage == "SignUp") {
      errorUserMessage = "Username already exists";
      errorUserBool = true;
    } else if (!(inputUserName in allUsers) && currentPage == "Login") {
      errorUserMessage = "User not found";
      errorUserBool = true;
    } else {
      errorUserBool = false;
    }

    //Password Validation
    if (inputPassword.length < 1) {
      errorPasswordBool = true;
      errorPasswordMessage = "Cannot have empty password";
    } else {
      errorPasswordBool = false;
    }

    if (errorUserBool == false && errorPasswordBool == false) {
        
      if (currentPage == "SignUp") {
        let startTimeString = "User signed in at: " + d;
        console.log(startTimeString);

        let newUser = {
          name: inputUserName,
          password: inputPassword,
          selection: savedSelection,
          startTime: startTimeString,
          endTime: ""
        };
        
        //Update all users dict in storage
        allUsers[inputUserName] = newUser;
        localStorage.setItem("allUsers", JSON.stringify(allUsers));
        //Update active user in storage
        onUserChange(newUser);
        
        // SVELTE CONCEPT #3: PROPS/PARAMETERS
        localStorage.setItem("activeUser", JSON.stringify(newUser));
        onPageChange("Dashboard");

        localStorage.setItem("currentPage", "Dashboard");
      }
      if (currentPage == "Login") {
        if (inputPassword === allUsers[inputUserName].password) {
          errorPasswordBool = false;
          //Update active user in storage
          onUserChange(allUsers[inputUserName]);
          localStorage.setItem(
            "activeUser",
            JSON.stringify(allUsers[inputUserName])
          );
          
          // SVELTE CONCEPT #2: REACTIVE VALUES
          onPageChange("Dashboard");

          localStorage.setItem("currentPage", "Dashboard");
        } else {
          errorPasswordBool = true;
          errorPasswordMessage = "Incorrect password";
          return;
        }
      }
    }
  }
</script>

<main>
  <img
    src="https://www.nicepng.com/png/full/16-166934_calendar-clock-icon-white-schedule-icon-png-white.png"
    id="logo"
    alt="Mountain"
  />
  <div id="backdrop">
    <h1 class="in-backdrop" id="title">Welcome to Votable</h1>
    <span class="in-backdrop" id="subtitle"
      >You have been invited to schedule a meeting with :</span
    >
    <br />
    <div id="users">
      {#each Object.entries(allUsers) as [userID, userObj]}
        <span class="in-backdrop">{userObj.name}, &nbsp</span>
      {/each}
    </div>
    <label class="in-backdrop" for="username" id="username-label"
      >Username:</label
    >
    <input
      type="text"
      placeholder="Name"
      id="username"
      name="username"
      bind:value={inputUserName}
    />
    {#if errorUserBool}
      <br />
      <error>{errorUserMessage}</error>
    {/if}
    <label class="in-backdrop" for="password">Password:</label>
    <input
      type="password"
      placeholder="Password"
      id="password"
      name="password"
      bind:value={inputPassword}
    />
    {#if errorPasswordBool}
      <br />
      <error>{errorPasswordMessage}</error>
    {/if}
    <br />

    {#if currentPage == "SignUp"}
      <button id="actionButton" on:click={activateUser}>Sign Up</button>
    {:else if currentPage == "Login"}
      <button id="actionButton" on:click={activateUser}>Login</button>
    {/if}
    <br />

    {#if currentPage == "SignUp"}
      <span id="bottom-text">Already have an account?</span>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span on:click={() => toLoginPage()} id="switchButton">Login</span>
    {:else if currentPage == "Login"}
      <span id="bottom-text">New to Votable?</span>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span on:click={() => toSignupPage()} id="switchButton">Sign Up</span>
    {/if}
    <br />
    <br />
  </div>
</main>

<!-- SVELTE CONCEPT #5: STYLING -->
<style>
  #logo {
    width: 120px;
  }
  error {
    color: red;
  }
  input {
    color: black;
  }
  h1 {
    margin: 10px;
  }
  #backdrop {
    background-color: #356739;
    margin: 10px 300px 10px 300px;
    box-shadow: 200px;
  }
  * {
    color: rgb(255, 255, 255);
    font-family: "Space Grotesk", sans-serif;
  }
  button {
    color: black;
  }
  #title {
    padding-top: 20px;
    margin-bottom: 15px;
    font-family: "Space Grotesk", sans-serif;
  }
  #username-label {
    margin-top: 5px;
  }
  #username {
    margin-bottom: 20px;
  }
  #switchButton {
    color: rgb(41, 255, 41);
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  #actionButton {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  #users {
    font-weight: bold;
    margin-bottom: 30px;
  }
</style>
