<script>
	import RegisterButton from '$lib/components/Button/RegisterButton.svelte';
	import Menu from '$lib/components/Menu/Menu.svelte';
	let siteTitle = 'SustainableRIVERS';
	import {mobileMenuStore} from '$lib/store'
	import MenuOpenIcon from '$lib/components/Others/MenuOpenIcon.svelte'
	import MenuCloseIcon from '$lib/components/Others/MenuCloseIcon.svelte'
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>{siteTitle}</title>
	<link rel="icon" href="./subRiverLogo.svg" />
</svelte:head>

<div class="w-full h-[80px] md:h-[100px] bg-blueLight md:inline-block fixed z-50 top-0">
	<div class="hidden md:flex mx-auto pt-8 px-16 justify-between">
		<a href="/"><img src="/subRiverLogo.svg" alt="" class="w-[40px] -mt-1" /></a>
		<Menu />
		<RegisterButton />
	</div>
	<!-- Mobile Menu -->
	<div class="flex md:hidden h-[80px] mx-auto pt-4 justify-between px-4">
		<a href="/"><img src="/subRiverLogo.svg" alt="" class="drop-shadow-sm w-8 mt-1" /></a>
		{#if $mobileMenuStore}
		<MenuOpenIcon />
		{:else}
		<MenuCloseIcon />
		{/if}
	</div>
	<!-- Off canvas mobile menu -->
	<div class={`${!$mobileMenuStore ? 'hidden' : 'flex'} w-full h-screen md:hidden bg-black/50 mx-auto relative`}>
		<div class="w-3/5 h-full bg-blueLight pt-6">
			<div class="flex flex-col mx-auto px-12">
				<h1 class="text-[24px] text-white">NAVIGATION</h1>
				<Menu />
				<RegisterButton/> 
			</div>
		</div>
	</div>
	<!-- Off canvas mobile menu end -->
</div>
