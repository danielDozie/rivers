<script context="module">
	import {formDialog} from '$lib/store'
	export const toggleForm = () =>{
		formDialog.showForm();
	}
</script>

<script>
	import { fade } from 'svelte/transition';
	import CommentForm from '$lib/components/Forms/CommentForm.svelte';
	import {commentData} from '$lib/store';
	import moment from 'moment';

</script>



<div class="w-full h-full flex flex-auto mx-auto justify-apart bg-altBlue" id="chatroom">
	<div class="w-full flex flex-col mx-auto px-4 md:px-16 pb-20 justify-center mt-32">
		<div class="">
			<h1 class="font-hammersmith text-[24px] md:text-[45px] mb-8">
				Chatroom <span class="text-blueLight">- Please Share</span> Your Ideas.
			</h1>
		</div>
		<div class="w-full mx-auto">
			<div class="relative flex flex-col justify-center py-6 sm:py-12">
				<div class="columns-1 md:columns-3 gap-x-4 space-y-4 [column-fill:_balance] box-border mx-auto before:box-inherit after:box-inherit">
					  {#each $commentData as chat}
					  	{#if chat.verified === true}
						  <div class="w-full break-inside-avoid font-light min-h-48 py-4 px-6 rounded-[10px] drop-shadow-md border-blueLight/60 hvr-float" style={`background-color: ${chat.color ?'#'+chat.color : '#ffffff'}`}>
							<div class="text-[14px] text-black/80">
								<p class="font-[500] text-ellipsis text"><span class="font-[500]">Name ~ </span> {chat.name}</p>
								<p><span class="font-[500]">Email ~ </span> {chat?.email?.replace(/^(.)(.*)(.@.*)$/,
									(_, a, b, c) => a + b.replace(/./g, '*') + c
							   )
							   }</p>
								<p class="text-ellipsis"><span class="font-[500]">Comment ~ </span> {chat.comment}</p>
							</div>
							<span class="font-[300] float-right text-[11px] text-blueLight">Added ~ {moment(chat.date_added).fromNow()}</span>
						</div>
						{/if}
						
					{/each}
					  
				  </div>
			  </div>
				
			<div class="flex justify-center">
				<p
					class="font-hammersmith text-[14px] text-blueLight cursor-pointer hover:underline hover:decoration-blueLight hover:underline-offset-4 decoration-2 drop-shadow-lg hvr-wobble-horizontal">
					Load more comments
				</p>
			</div>
			{#if $formDialog}
				<CommentForm />
			{/if}
			<div class="flex justify-center pt-4 pb-20 ">
				<button in:fade class={`${$formDialog ? "hidden" : ""} py-3 px-8 bg-blueLight mt-6 rounded-[10px] text-white hvr-sweep-to-right`}
				on:click={toggleForm} out:fade>ADD COMMENT</button
						>
			</div>

			<div class="text-[20px] md:text-[22px] pb-20">
				<p class="font-hammersmith">Need more information?</p>
				<p class="font-ibmplex text-[20px] md:text-[22px] hvr-wobble-horizontal">
					Reach out to us. We would really love to hear from you.<br />
					<a href="#email"
					>
					<span class="text-blueLighter font-light underline underline-offset-4 decoration-[3px] decoration-blueLighter text-[20px] md:text-[22px] "
						>Use the email below. 
					</span>
					<span class="text-blueDeep cursor-pointer animate-bounce">&darr</span></a
						>
				</p>
			</div>
		</div>
	</div>
</div>
