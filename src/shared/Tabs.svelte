<script>
    import { createEventDispatcher } from 'svelte';
    //Use this dispatch item to create a custom event each time a user clicks on tab
    const dispatch = createEventDispatcher();


    export let items;
    export let activeItem;
</script>

<div class="tabs">
    <ul>
        {#each items as item}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li on:click={() => dispatch('tabChange', item)}>
            <div class:active={item === activeItem}>{item}</div>
        </li>
        {/each}
    </ul>
</div>

<style>
    .tabs{
        margin-bottom: 40px;

    }
    ul{
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }
    li{
       margin: 0 16px;
       font-size: 18px;
       color: #555;
       cursor: pointer; 
    }
    .active{
        border-bottom: 2px solid rgb(24, 134, 24);
        color:rgb(24, 134, 24);
        padding-bottom: 8px;
    }
</style>