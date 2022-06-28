<script>
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
            id: 4,
            name: 'Contact Us',
            url: '#contact'
        }
    ];
</script>
<ul class="flex gap-x-8 pt-3">
    {#each menuItem as menu}
    <a href={menu.url}><li class="text-blueDeep text-['18px'] font-hammersmith">
        {menu.name.toLocaleUpperCase()}
    </li><div class="w-full h-2 bg-yellow -mt-3 -ml-2" /></a>
    {/each}

</ul>