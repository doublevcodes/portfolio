<script lang="ts">
    import { writable } from "svelte/store";
    let count = writable(0)
    function incCount() {
        count.update(n => n + 1)
    }
</script>

<p>{count}</p>
<button on:click="{() => incCount()}">Go</button>
