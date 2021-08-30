<script lang="ts">
    import Github from "./github.svelte";
    import Linkedin from "./linkedin.svelte";

    export let githubUrl: string = '';
    export let linkedinUrl: string = '';
</script>

<div class="flex gap-4">
    <Github profileUrl={githubUrl}/>
    <Linkedin profileUrl={linkedinUrl}/>
</div>