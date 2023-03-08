<script>
  import UserAuth from "./components/UserAuth.svelte";
  import Dashboard from "./components/Dashboard.svelte";
  import Calendar from "./components/Calendar.svelte";
  let pages = ["SignUp", "Login", "Dashboard"];
  let currentPage = pages[0];
  let activeUser;
  
  // SVELTE CONCEPT #1: CONTROL FLOW
  if (localStorage.getItem("activeUser") != null) {
    activeUser = JSON.parse(localStorage.getItem("activeUser"));
  }
  if (localStorage.getItem("currentPage") != null) {
    currentPage = localStorage.getItem("currentPage");
  } else {
    localStorage.setItem("currentPage", "SignUp");
    currentPage = "SignUp";
  }
  
  // SVELTE CONCEPT #3: PROPS/PARAMETERS
  function updatePage(newPage) {
    currentPage = newPage;
  }
  function updateUser(newUser) {
    activeUser = newUser;
  }
</script>

<main>
  <div id="backdrop">
    {#if currentPage == pages[0] || currentPage == pages[1]}
      
      <!-- SVELTE CONCEPT #2: REACTIVE VALUES -->
      <UserAuth onPageChange={updatePage} onUserChange={updateUser} />
    {:else if currentPage == pages[2]}
     
      <!-- SVELTE CONCEPT #4: REUSABLE COMPONENTS -->
      <Dashboard onPageChange={updatePage} onUserChange={updateUser} />
    {/if}
  </div>
</main>

<!-- SVELTE CONCEPT #5: STYLING -->
<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
