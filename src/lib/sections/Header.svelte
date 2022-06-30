<script>
	import RegisterButton from '$lib/components/Button/RegisterButton.svelte';
	import Menu from '$lib/components/Menu/Menu.svelte';
	let siteTitle = 'SustainableRIVERS';
	import {mobileMenuStore} from '$lib/store.svelte'
	import {toggleMenu} from '$lib/components/Others/Toggle.svelte';
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>{siteTitle}</title>
	<link rel="icon" href="./logo.svg" />
</svelte:head>

<div class="w-full h-[80px] md:h-[100px] bg-white md:inline-block fixed z-50 top-0">
	<div class="hidden md:flex mx-auto pt-8 px-16 justify-between">
		<a href="/"><img src="/logo.svg" alt="" /></a>
		<Menu />
		<RegisterButton />
	</div>
	<!-- Mobile Menu -->
	<div class="flex md:hidden mx-auto pt-4 justify-between px-4">
		<a href="/"><img src="/logo.svg" alt="" class="drop-shadow-sm w-8 mt-2" /></a>
		<img src="/menuIcon.svg" alt="" class="drop-shadow-sm h-8 mt-2 cursor-pointer" on:click={toggleMenu} />
	</div>
	<!-- Off canvas mobile menu -->
	<div class={`${$mobileMenuStore ? 'hidden' : 'flex'} w-full h-screen md:hidden bg-black/30 mx-auto mt-6 relative`}>
		<div class="w-3/5 h-full bg-white pt-4">
			<div class="flex flex-col mx-auto px-4">
				<h1 class="text-2xl text-black/80">MENU</h1>
				<Menu />
				<RegisterButton />
			</div>
		</div>
	</div>
	<!-- Off canvas mobile menu end -->
</div>
