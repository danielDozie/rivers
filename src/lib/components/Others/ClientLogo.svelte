<script>
    import {clients} from "$lib/store.svelte"
    export let logos = $clients
</script>


<div class="md:w-[80%] px-2 flex flex-wrap gap-4 md:gap-4 mt-8 py-4 justify-center items-center">
    {#each logos as logo}
     <div class="md:min-w-[120px] border border-blueDeep/20 rounded-[10px] px-4 py-4 mx-auto hvr-float">
         <img src={logo.name} alt="" class="mx-auto" />
     </div>
    {/each}
 </div>