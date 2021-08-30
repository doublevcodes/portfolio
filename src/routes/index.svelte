<script lang="ts">
    import SocialArray from '../components/social/index.svelte';
    import Introduction from '../components/home/index.svelte';
</script>

<svelte:head>
    <title>Vivaan Verma&apos;s Portfolio</title>
    <link rel="icon" href="/favicon.ico"/>
</svelte:head>
<div class="bg-primary border-t-2 border-secondary h-9/10">
    <div class="grid grid-cols-1 desktop:grid-cols-2 h-inherit">
        <div class="my-6 flex flex-col min-w-screen text-secondary justify-center mx-12 tablet:ml-36 widescreen:ml-48 col-start-1 col-end-2">
            <SocialArray
                githubUrl="https://github.com/doublevcodes/"
                linkedinUrl="https://linkedin.com/in/vivaanverma"
            />
            <Introduction/>
        </div>
        <div class="flex flex-col min-w-screen text-primary justify-center items-center mx-12 mb-6 tablet:ml-36 widescreen:ml-48">
            <a href="/about">
                <button class="w-2/3 px-7 py-5 text-4x-large rounded-medium bg-teal transition duration-300 hover:bg-blue self-center">
                    <p>Learn more about me →</p>
                </button>
            </a>
        </div>
    </div>
  </div>