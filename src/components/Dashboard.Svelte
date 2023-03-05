<script>
  const d = new Date();
  import Calendar from "./Calendar.svelte";

  export let onPageChange;
  export let onUserChange;

  let savedSelection = null;

  if (localStorage.getItem("activeUser").selection != null) {
    savedSelection = JSON.parse(localStorage.getItem("activeUser").selection);
  }

  function updateSelection(newSelection) {
    savedSelection = newSelection;
  }

  let activeUser = JSON.parse(localStorage.getItem("activeUser"));

  function logoutUser() {
    let endTimeString = "User signed out at: " + d;
    console.log(endTimeString);
    
    //Fetch active user (and allUsers) and update endTime
    let temp_user = JSON.parse(localStorage.getItem("activeUser"));
    let temp_allUsers = JSON.parse(localStorage.getItem("allUsers"));
    temp_user.endTime = endTimeString;
    
    //Update all users dict in storage
    temp_allUsers[temp_user.name] = temp_user;
    localStorage.setItem("allUsers", JSON.stringify(temp_allUsers));
    localStorage.setItem("activeUser", JSON.stringify(temp_user));


    //Update active user in storage
    onUserChange(null);
    localStorage.setItem("activeUser", null);
    onPageChange("SignUp");

    localStorage.setItem("currentPage", "SignUp");
  }
</script>

<main>
  <p>Signed in as : <b>{activeUser.name}</b></p>
  <br />
  <button on:click={logoutUser}>Logout</button>
  <Calendar />
</main>

<style>
  p {
    color: white;
  }
</style>
