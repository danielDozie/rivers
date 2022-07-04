<script>
	import {toggleMenu} from '$lib/components/Others/Toggle.svelte';
    import { page } from '$app/stores';
    
    export const menuItem = [
        {
            id: 1,
            name: 'About',
            url: '#about'
        },
        {
            id: 2,
            name: 'Schedule',
            url: '#schedule'
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

<ul class="flex flex-col gap-y-8 pt-12 uppercase font-hammersmith text-[16px] text-white md:flex-row md:flex md:gap-x-8 md:pt-3 md:gap-y-0 md:text-white md:text-['18px'] md:font-hammersmith ">
    {#each menuItem as menu}
    <a href={menu.url} class:active="{$page.url.hash === menu.url}"><li on:click={toggleMenu} class="hover:underline underline-offset-4 decoration-[#7ED957] decoration-[5px]">
        {menu.name.toLocaleUpperCase()}
    </li>
</a>
    {/each}
</ul>


<style>
a.active {
  text-decoration: underline;
  text-decoration-color: #7ED957;
  text-decoration-thickness: 4px;
  text-underline-offset: 4px;
  text-underline-position: auto;
}
/* .hvr-underline-from-left:before {
    background: #7ED957;
} */
</style>