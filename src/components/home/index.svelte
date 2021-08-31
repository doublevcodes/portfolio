<script lang="ts">
    import { fly } from "svelte/transition";
    import { browser } from "$app/env";

    import Tech from "./tech.svelte";
</script>

<div>
    <h1 in:fly="{{ x: 100, duration: 1000 }}" class="text-5x-large tablet:text-6x-large widescreen:text-9x-large text-teal my-6">
        Hello, I am <span class="text-green font-extralight hover:underline">Vivaan Verma</span>
    </h1>
    <p in:fly="{{ y: 200, duration: 1000 }}" class="text-2x-large tablet:text-3x-large desktop:text-4x-large">
        I am 13 years old, <span class="text-white">an avid aviation enthusiast</span> and a <span class="text-white">developer</span>.<br/>
        I can code in
        <Tech name="Python" colour="blue" url="https://python.org/"/>,
        <Tech name="Rust" colour="red" url="https://rust-lang.org"/> and some
        <Tech name="TypeScript" colour="yellow" url="https://typescriptlang.org"/>
    </p>
</div>