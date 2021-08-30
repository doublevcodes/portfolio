<script lang="ts">
    import { fly } from "svelte/transition";
    
    import Github from "./github.svelte";
    import Linkedin from "./linkedin.svelte";

    export let githubUrl: string = '';
    export let linkedinUrl: string = '';
</script>

<div transition:fly="{{ x: -100, duration: 1000 }}" class="flex gap-4">
    <Github profileUrl={githubUrl}/>
    <Linkedin profileUrl={linkedinUrl}/>
</div>