<script>
	import {toggleMenu} from '$lib/components/Others/Toggle.svelte';

    // import { page } from '$app/stores';
    // let path;
    // $: path = $page.url.href;
    
    export const menuItem = [
        {
            id: 1,
            name: 'About',
            url: '#about'
        },
        {
            id: 2,
            name: 'Event Schedule',
            url: '#event'
        },
        {
            id: 3,
            name: 'Chatroom',
            url: '#chatroom'
        },
        {
            id: 4,
            name: 'Publications',
            url: '#publications'
        },
        {
            id: 5,
            name: 'Contact Us',
            url: '#contact'
        }
    ];
</script>

<ul class="flex flex-col gap-y-8 pt-12 uppercase font-hammersmith text-[16px] text-black/80 md:flex-row md:flex md:gap-x-8 md:pt-3 md:gap-y-0 md:text-blueDeep md:text-['18px'] md:font-hammersmith ">
    {#each menuItem as menu}
    <a href={menu.url}><li class="active:text-blueLighter" on:click={toggleMenu}>
        {menu.name.toLocaleUpperCase()}
    </li>
    <!-- <div class="w-12 md:w-full h-2 bg-yellow -mt-3 -ml-1 md:-ml-2" /> -->
</a>
    {/each}
</ul>