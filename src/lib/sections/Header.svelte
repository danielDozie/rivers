<script>
	import RegisterButton from '$lib/components/Button/RegisterButton.svelte';
	import Menu from '$lib/components/Menu/Menu.svelte';
	let siteTitle = 'SustainableRIVERS';
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
		<img src="/menuIcon.svg" alt="" class="drop-shadow-sm h-8 mt-2 cursor-pointer" />
	</div>
</div>
