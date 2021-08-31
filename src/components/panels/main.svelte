<script lang="ts">
    import { fade } from "svelte/transition";

    import Nutshell from "./utils/nutshells.svelte";
</script>

<div class="h-full w-full grid desktop:grid-cols-main desktop:grid-rows-main gap-3 p-7">
    <img in:fade="{{ delay: 1000, duration: 250 }}" class="w-36 tablet:w-48 desktop:w-60 desktop:col-start-1 desktop:col-end-2 desktop:row-start-1 desktop:row-end-2 justify-self-center self-center rounded-full hover:-rotate-6 duration-200" src="https://avatars.githubusercontent.com/u/54081925?v=4" alt="Profile">
    <div class="desktop:col-start-1 desktop:col-end-2 desktop:row-start-2 desktop:row-end-3 mt-4 bg-darkover rounded-medium shadow-small hover:shadow-medium duration-200 py-4 px-6 overflow-scroll">
        <h3 class="text-secondary text-center text-3x-large font-semibold hover:underline">
            Me in a nutshell
        </h3>
        <p class="text-secondary flex flex-col gap-0">
            <Nutshell key="name" value="Vivaan Verma"/>
            <Nutshell key="age" value="13 years old"/>
            <Nutshell key="location" value="London, England"/>
            <Nutshell key="code" value="Python and Rust"/>
            <Nutshell key="music" value="I play the guitar"/>
            <Nutshell key="random" value="Can solve the Rubik's cube"/>
        </p>
    </div>
    <div class="desktop:col-start-2 desktop:col-end-3 desktop:row-start-1 desktop:row-end-3 mt-4 bg-darkover rounded-medium shadow-small hover:shadow-medium duration-200">
        <h3 class="overflow-ellipsis text-secondary py-4 px-6">
    </div>
</div>