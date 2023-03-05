<script>
  import Selecto from "svelte-selecto";
  //import Selecto from "svelte-selecto/src/svelte-selecto/Selecto.svelte";
  const timeblocks = [];
  const days = [];
  for (let i = 0; i < 7; ++i) {
    timeblocks.push(i);
    days.push(i);
  }
</script>

<main />
<div class="container-two">
  <strong style="color:white">
    The location of the meeting is: Zoom (virtual)</strong
  >
  <br />
  <strong style="color:white"> Timezone set by organizer: EST (GMT-5)</strong>
</div>
<div class="app">
  <div class="container">
    <Selecto
      dragContainer={".elements"}
      selectableTargets={[".selecto-area .block"]}
      hitRate={0}
      selectByClick={true}
      selectFromInside={false}
      continueSelect={true}
      ratio={0}
      on:select={({ detail: e }) => {
        e.added.forEach((el) => {
          el.classList.add("selected");
        });
        e.removed.forEach((el) => {
          el.classList.remove("selected");
        });
      }}
    />

    <div class="float-sidebar">
      <div class="sidebar-element">10:00am</div>
      <div class="sidebar-element">10:30am</div>
      <div class="sidebar-element">11:00am</div>
      <div class="sidebar-element">11:30am</div>
      <div class="sidebar-element">12:00pm</div>
      <div class="sidebar-element">12:30pm</div>
      <div class="sidebar-element">1:00pm</div>
      <div class="sidebar-element">1:30pm</div>
      <div class="sidebar-element">2:00pm</div>
      <div class="sidebar-element">2:30pm</div>
      <div class="sidebar-element">3:00pm</div>
      <div class="sidebar-element">3:30pm</div>
      <div class="sidebar-element">4:00pm</div>
      <div class="sidebar-element">4:30pm</div>
      <div class="sidebar-element">5:00pm</div>
      <div class="sidebar-element">5:30pm</div>
      <div class="sidebar-element">6:00pm</div>
      <div class="sidebar-element">6:30pm</div>
      <div class="sidebar-element">7:00pm</div>
      <div class="sidebar-element">7:30pm</div>
      <div class="sidebar-element">8:00pm</div>
    </div>
    <div class="float-header">
      <div class="header">
        <div class="header-element">Sun</div>
        <div class="header-element">Mon</div>
        <div class="header-element">Tue</div>
        <div class="header-element">Wed</div>
        <div class="header-element">Thu</div>
        <div class="header-element">Fri</div>
        <div class="header-element">Sat</div>
      </div>
      <div class="elements selecto-area" id="selecto1">
        {#each days as day}
          <div class="header" />
        {/each}
        {#each timeblocks as block}
          <div class="block" />
        {/each}
        <br />
        {#each timeblocks as block}
          <div class="block" />
        {/each}
        <br />
        {#each timeblocks as block}
          <div class="block" />
        {/each}
        <br />
        {#each timeblocks as block}
          <div class="block" />
        {/each}
        <br />
        {#each timeblocks as block}
          <div class="block" />
        {/each}
        <br />
        {#each timeblocks as block}
          <div class="block" />
        {/each}
        <br />
        {#each timeblocks as block}
          <div class="block" />
        {/each}
        <br />
        {#each timeblocks as block}
          <div class="block" />
        {/each}
        <br />
        {#each timeblocks as block}
          <div class="block" />
        {/each}
        <br />
        {#each timeblocks as block}
          <div class="block" />
        {/each}
        {#each days as day}
          <div class="header" />
        {/each}
        {#each timeblocks as block}
          <div class="block" />
        {/each}
        <br />
        {#each timeblocks as block}
          <div class="block" />
        {/each}
        <br />
        {#each timeblocks as block}
          <div class="block" />
        {/each}
        <br />
        {#each timeblocks as block}
          <div class="block" />
        {/each}
        <br />
        {#each timeblocks as block}
          <div class="block" />
        {/each}
        <br />
        {#each timeblocks as block}
          <div class="block" />
        {/each}
        <br />
        {#each timeblocks as block}
          <div class="block" />
        {/each}
        <br />
        {#each timeblocks as block}
          <div class="block" />
        {/each}
        <br />
        {#each timeblocks as block}
          <div class="block" />
        {/each}
        <br />
        {#each timeblocks as block}
          <div class="block" />
        {/each}
      </div>
    </div>
    <div class="empty elements" />
  </div>
</div>

<style>
  html,
  body,
  #root {
    position: relative;
    margin: 0;
    padding: 0;
    height: 100%;
    color: #333;
    background: #fdfdfd;
  }
  /* positioning the calendar box */
  .app {
    position: relative;
    min-height: 1%;
    padding: 10px 150px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }
  .container {
    background-color: rgb(95, 156, 95);
    max-width: 2000px;
    align-items: left;
    margin: 0px 130px;
  }
  .container-two {
    background-color: rgb(95, 156, 95);
    max-width: 710px;
    margin: 0px 574px;
  }
  .header {
    max-width: 2000px;
    display: flex;
    justify-content: center;
  }
  .header-element {
    color: rgb(255, 255, 255);
    font-size: 24px;
    width: 80px;
    height: 40px;
    margin: 2px;
  }
  .float-sidebar {
    float: left;
    height: 570px;
    margin-top: 80px;
  }
  .float-header {
    float: right;
  }
  .sidebar-element {
    color: white;
    font-size: 12px;
    width: 60px;
    height: 15px;
    margin-bottom: 8px;
    padding-bottom: 3px;
  }
  body {
    background: #fff;
  }
  .block {
    display: inline-block;
    border-radius: 4px;
    width: 80px;
    height: 20px;
    margin: 2px;
    background: #eee;
    --color: rgb(196, 251, 67);
  }
  h1,
  .description {
    text-align: center;
  }
  .button {
    border: 1px solid #333;
    color: #333;
    background: transparent;
    appearance: none;
    -webkit-appearance: none;
    box-sizing: border-box;
    cursor: pointer;
    width: 120px;
    height: 42px;
    font-size: 14px;
    letter-spacing: 1px;
    transition: all ease 0.2s;
    margin: 0px 5px;
  }
  .button:hover {
    background: #333;
    color: white;
  }
  .elements {
    margin-top: 4px;
    border-top: 2px solid #eee;
    border-left: 2px solid #eee;
  }
  .selecto-area {
    padding: 30px;
  }
  #selecto1 .block {
    transition: all ease 0.2s;
  }
  .moveable #selecto1 .block {
    transition: none;
  }
  .selecto-area :global(.selected) {
    color: #fff;
    background: var(--color);
  }
  .scroll {
    overflow: auto;
    padding-top: 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .infinite-viewer,
  .scroll {
    width: 100%;
    height: 300px;
    box-sizing: border-box;
  }
  .infinite-viewer .viewport {
    padding-top: 10px;
  }
  .empty.elements {
    border: none;
  }
</style>
