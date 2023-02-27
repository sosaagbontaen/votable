<script>
    //Here, "Export" literally means that this message variable can be set outside this component
    export let message;
    export let showModal = false;
</script>

{#if showModal}
<!--Leave event undefined so it's forwarded back to the instance of Modal from App.svelte-->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="backdrop" on:click|self>
    <div class="modal">
        <p>{message}</p>
    </div>
</div>
{/if}

<style>
    .backdrop{
        width:100%;
        height:100%;
        position: fixed;
        background: rgba(0,0,0,0.8);
    }
    .modal{
        padding:10px;
        border-radius: 10px;
        max-width: 400px;
        margin: 10% auto;
        text-align: center;
        background: darkgreen;
        color: white;
    }

</style>
