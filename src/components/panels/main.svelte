<script lang="ts">
    import { fade } from "svelte/transition";
</script>

<div class="h-full w-full grid desktop:grid-cols-main desktop:grid-rows-main gap-3 p-7">
    <img in:fade="{{ delay: 1000, duration: 250 }}" class="desktop:col-start-1 desktop:col-end-2 desktop:row-start-1 desktop:row-end-2 justify-self-center self-center rounded-full shadow-small hover:shadow-large hover:-rotate-6 duration-200 p-6" src="https://avatars.githubusercontent.com/u/54081925?v=4" alt="Profile">
    <div class="desktop:col-start-1 desktop:col-end-2 desktop:row-start-2 desktop:row-end-3 mt-4 bg-darkover rounded-medium shadow-small hover:shadow-medium duration-200">
        <h3 class="overflow-ellipsis text-secondary py-4 px-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tortor dui, ullamcorper at sollicitudin sed, rhoncus at urna. Praesent pellentesque orci non augue pulvinar, et viverra magna suscipit. Quisque sodales magna urna, dignissim pharetra turpis vehicula et. Duis ut turpis vel libero luctus accumsan. Pellentesque sit amet velit nec neque vehicula ultricies in at erat. Proin vel lorem luctus, tristique mi sit amet, tempor orci.</h3>
    </div>
    <div class="desktop:col-start-2 desktop:col-end-3 desktop:row-start-1 desktop:row-end-3 mt-4 bg-darkover rounded-medium shadow-small hover:shadow-medium duration-200">
        <h3 class="overflow-ellipsis text-secondary py-4 px-6">

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tortor dui, ullamcorper at sollicitudin sed, rhoncus at urna. Praesent pellentesque orci non augue pulvinar, et viverra magna suscipit. Quisque sodales magna urna, dignissim pharetra turpis vehicula et. Duis ut turpis vel libero luctus accumsan. Pellentesque sit amet velit nec neque vehicula ultricies in at erat. Proin vel lorem luctus, tristique mi sit amet, tempor orci. Nam eleifend neque id lorem auctor, nec mollis tellus lacinia. Proin eu ullamcorper dui. Nulla malesuada gravida dolor, eu placerat nulla vestibulum vitae. Fusce blandit commodo ligula, eget condimentum lacus posuere quis. Curabitur sapien velit, tincidunt sed aliquet vitae, vestibulum eget mauris. Sed leo leo, semper ac libero sit amet, aliquam porttitor enim. Proin ac lacus quis tellus semper porttitor sit amet quis felis. Donec libero massa, rutrum ut purus et, mattis viverra arcu.
            <br><br>
            Ut vitae tincidunt enim. Quisque porttitor a felis ut iaculis. Quisque nibh ex, euismod sed laoreet non, suscipit non lectus. Vivamus odio sapien, gravida pellentesque elit rutrum, ornare consequat tortor. Morbi ac tristique magna. Duis vitae dapibus mi. Nam condimentum enim non tortor euismod, sit amet dignissim arcu venenatis. Fusce nisi odio, mollis iaculis aliquam vel, pulvinar a sapien. Sed faucibus dapibus lacus sed lobortis. Integer vitae sapien et nunc viverra aliquam. Sed lacinia ante et mauris pretium, vitae venenatis ex porttitor. Nulla libero turpis, auctor id iaculis sit amet, consequat vehicula nibh. Morbi a enim velit. Sed ac felis finibus, consectetur tortor id, fringilla ante.
    </div>
</div>