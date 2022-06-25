<script>
    import RegisterButton from '$lib/components/Button/RegisterButton.svelte'
import Menu from '$lib/components/Menu/Menu.svelte';
</script>

<div class="w-full h-[100px] bg-white">
    <div class="flex mx-auto pt-8 px-16 justify-between">
        <img src="/logo.svg" alt="" />
        <Menu />
        <RegisterButton />
    </div>
</div>