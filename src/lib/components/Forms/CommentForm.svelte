<script>
	import {toggleForm} from '$lib/sections/ChatRoom.svelte'
</script>

<div class="flex justify-center items-center text-center">
	<div
		class="w-[350px] md:w-[500px] py-12 px-6 bg-white rounded-[10px] border my-8 border-blueLight/10"
	>
		<div class="flex flex-col text-[12px] text-black/60 gap-y-[16px] w-full md:w-[90%] mx-auto">
			<input
				type="text"
				name=""
				placeholder="Full Name"
				class="py-2 px-4 bg-blueDeep/10 rounded-[5px]"
			/>
			<input
				type="email"
				name=""
				id=""
				placeholder="Email Address (Will be verified)"
				class="py-2 px-4 bg-blueDeep/10 rounded-[5px]"
			/>
			<textarea
				placeholder="Your Comment"
				class="h-24 py-2 px-4 bg-blueDeep/10 rounded-[5px] resize"
			/>
			<button class="w-1/2 py-2 px-4 bg-green mt-6 rounded-[10px] text-white mx-auto hvr-float">COMMENT/JOIN US</button>
			<p class="mx-auto text-[10px] text-blueDeep/80 cursor-pointer" on:click={toggleForm}>Cancel</p>
		</div>
	</div>
</div>
