<script lang="ts">
    import { fly } from "svelte/transition";

    import Main from "../components/panels/main.svelte";
</script>

<div class="grid desktop:grid-cols-about desktop:grid-rows-about h-9/10 gap-3 p-3 bg-back overflow-hidden">
    <div in:fly="{{ duration: 1000, y: -200 }}" class="desktop:col-start-2 desktop:col-end-3 desktop:row-start-1 desktop:row-end-2 w-full h-full bg-primary shadow-medium hover:shadow-x-large duration-500 rounded-medium">
        <Main/>
    </div>
    <div in:fly="{{ duration: 1000, x: -200 }}" class="desktop:col-start-1 desktop:col-end-2 desktop:row-start-1 desktop:row-end-4 w-full h-full bg-primary shadow-medium hover:shadow-x-large duration-500 rounded-medium">
        Projects & OSS Contributions
    </div>
    <div in:fly="{{ duration: 1000, y: 200 }}" class="desktop:col-start-2 desktop:col-end-3 desktop:row-start-2 desktop:row-end-4 w-full h-full bg-primary shadow-medium hover:shadow-x-large duration-500 rounded-medium">
        Interactive code editor
    </div>
    <div in:fly="{{ duration: 1000, x: 200 }}" class="desktop:col-start-3 desktop:col-end-4 desktop:row-start-1 desktop:row-end-3 w-full h-full bg-primary shadow-medium hover:shadow-x-large duration-500 rounded-medium">
        Latest GitHub actions
    </div>
    <div in:fly="{{ duration: 1000, y: 200, x: 200 }}" class="desktop:col-start-3 desktop:col-end-4 desktop:row-start-3 desktop:row-end-4 w-full h-full bg-primary shadow-medium hover:shadow-x-large duration-500 rounded-medium">
        Random fact
    </div>
</div>
