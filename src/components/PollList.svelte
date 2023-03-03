<script>
    import PollDetails from './PollDetails.svelte';
    export let polls = [];
    
</script>

<div class="poll_list">
    {#each polls as poll (poll.id)}
        <div>
            <PollDetails poll={poll}/>
        </div>
    {/each}
</div>

<style>
    .poll_list{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>
