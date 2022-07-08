<script context="module">
	export async function load({ fetch }) {
		const url = '/chats';
		const res = await fetch(url);
        const {data} = await res.json();
		
		if (res.ok) {
			return {
				props: {
					chatsData: data
				}
			};
		}
		return {
			status: res.status,
			error: new Error('A problem has occurred')
		};
	};
</script>

<script>
	export let chatsData
	import Hero from '$lib/sections/Hero.svelte';
	import About from '$lib/sections/About.svelte';
	import Events from '$lib/sections/Events.svelte';
	import ChatRoom from '$lib/sections/ChatRoom.svelte';
	import Publications from '../lib/sections/Publications.svelte';
	import {commentData} from '$lib/store'
	commentData.updateWith(chatsData)
</script>

<Hero />
<About />
<Events />
<ChatRoom chats={commentData} />
<Publications />
