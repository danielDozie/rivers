<script>
    import {toggleMenu} from '$lib/components/Others/Toggle.svelte';
</script>

<img src="/menuIcon.svg" alt="" class="drop-shadow-sm h-8 mt-2 cursor-pointer" on:click={toggleMenu} />