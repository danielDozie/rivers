<script>
	import {toggleMenu} from '$lib/components/Others/Toggle.svelte';
</script>
<div class="flex mt-32 space-x-8 md:space-x-0 md:mt-0">
	<a href="/" class="md:px-8 md:py-2 underline underline-offset-4 decoration-4 md:no-underline decoration-green" on:click={toggleMenu}>
		<span class="font-hammersmith text-[16px] md:text-[14px] text-green cursor-pointer drop-shadow-lg md:drop-shadow-none md:uppercase"> Sign-in </span>
	</a>
	<a href="/" class="">
		<button
			class="font-hammersmith rounded-[10px] text-[16px] text-green md:text-white md:bg-green md:px-8 md:py-2 drop-shadow-lg md:drop-shadow-none md:uppercase md:no-underline underline underline-offset-4 decoration-4"
			on:click={toggleMenu}>Register</button
		>
	</a>
</div>
