<script>
    export let type = "primary";
    export let flat = false;
    export let inverse = false;
</script>

<button class={type} class:flat={flat} class:inverse={inverse}>
    <slot></slot>
</button>

<style>
    button{
        border: 0;
        cursor: pointer;
        border-radius: 6px;
        padding: 8px 12px;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    }
    .primary{
        background: #1b8d2e;
        color: white;
    }
    .secondary{
        background: #2d87a7;
        color: white;
    }
    .flat{
        box-shadow: none;
    }
    .primary.inverse{
        background: white;
        color: #1b8d2e;
        border: 2px solid #1b8d2e;
    }
    .secondary.inverse{
        background: white;
        color: #2d87a7;
        border: 2px solid #2d87a7;
    }
</style>