<script lang="ts">
    export let name: string = '';
    export let colour: string = '';
    export let url: string = '';

    const colourMap: Record<string, string> = {
        "blue": "text-blue",
        "red": "text-red",
        "yellow": "text-yellow"
    }
</script>

<span class={colourMap[colour]}>
    <a class="hover:underline font-mono" href={url}>{name}</a>
</span>