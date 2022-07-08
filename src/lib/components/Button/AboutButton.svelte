<script>
    import {readMoreStore} from '$lib/store';
    
    export const readmore = () => {
      readMoreStore.readMoreToggle(true)
      console.log($readMoreStore)
    };
    
</script>

<div class="flex mx-auto">
        <button class="font-normal shadow-lg rounded-[10px] font-[22px] text-blueLight bg-[#D9D9D9] px-24 md:px-32 py-4  hvr-sweep-to-right" on:click={readmore}>{!$readMoreStore ? 'Continue reading...' : "Alright... I'm done"}</button>
</div>

<style>
    .hvr-sweep-to-right:before {
        background: rgb(0 87 146);
    }
</style>