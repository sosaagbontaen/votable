<script>
let showModal = true
</script>

{#if showModal}
<div class="backdrop">
    <div class="modal">
        <p>Lorem Ipsum</p>
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
