<script>
	import { toggleForm } from '$lib/sections/ChatRoom.svelte';
	import { formEntries } from '$lib/store';
	import { fade } from 'svelte/transition';
	import md5 from 'md5';
	
	//generating random colors for each user cards
	let randomColor;
	const randomColorChanger = () => {
		let colors = ['f0eaff', 'ffe6f2', 'd9f7ff', 'fff5de', 'ffe2ec', 'e2fbed', 'fffedd', 'e8f0ff'];
		let length = colors.length;
		let random = Math.floor(Math.random() * length);
		return (randomColor = colors[random]);
	};
	randomColorChanger();
	
	//loading state
	let loading = false;
	let statusMessage;
	let showMessage = false;
	
	//empty form data
	let data = {};
	
	//handling form entries and submissions
	const handleSubmit = async (e) => {
		e.preventDefault();
		randomColorChanger();
		let formData = new FormData(e.target);
		data = Object.fromEntries(formData.entries());
		formEntries.formData(data);
		//calling the method to post form data
		
		sendData();
		data = {};
	};
	
	
	const verifyEmail = async () => {
		const response = await fetch('/api/v1/chats.json')
		const result = await response.json()
		const resultArray = result.data
		
		if(resultArray.length > 0){
			const emaildata = resultArray.filter(({email}) => email === $formEntries.email)
			
			if(emaildata && emaildata.verified !== true){
				const sendmail = await fetch(`/api/v1/sendmail.json?email=${$formEntries.email}&name=${$formEntries.name}&hash=${$formEntries.hash}&comment=${$formEntries.comment}`)
				const result = sendmail;
				if(result.status === 200){
					loading = false;
					statusMessage = 'Your comment has been posted. Please verify your email address to publish 😊';
					showMessage = true;
					document.getElementById('form').reset();
					setTimeout(async () => {
					showMessage = false;
				}, 4000);
				}
			}
			if(emaildata && emaildata.verified === true){
				loading = false;
				showMessage = true;
				statusMessage = 'Your comment has been posted successfully 😊 🎉';
				document.getElementById('form').reset();
				setTimeout(async () => {
					showMessage = false;
				}, 4000);
			}
		}
	};
	
	//Method to post the form data
	const sendData = () => {
		//generate unique identifier `HASH` for every comment.
		//Hash is equiv. to commenter's email address.
		var date = new Date().getTime();
		let hash = {
			hash: md5(date)
		};
		//geneting timeStamp
		let timeStamp = {
			date_added: date
		};
		
		loading = true;
		setTimeout(async () => {
			const res = await fetch('/api/v1/chats.json', {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(Object.assign($formEntries, hash, timeStamp))
			});
			const response = res;
			
			if (response.ok) {
				verifyEmail()
				return {
					status: 200,
					message: 'success'
				};
			}
		}, 500);

		return {
			status: 500,
			error: new Error('Error encounterd. Check your endpoints and try again')
		};
	};
</script>

<div class="flex justify-center items-center text-center">
	<div
		class="w-[350px] md:w-[500px] py-12 px-6 bg-white rounded-[10px] border my-8 border-blueLight/10"
	>
		<form on:submit={handleSubmit} id="form">
			<div class="flex flex-col text-[12px] text-black/60 gap-y-[16px] w-full md:w-[90%] mx-auto">
				<input
					type="text"
					name="name"
					placeholder="Full Name"
					class="py-2 px-4 bg-blueDeep/10 rounded-[5px]"
				required/>
				<input
					type="email"
					name="email"
					id=""
					placeholder="Email Address (Will be verified)"
					class="py-2 px-4 bg-blueDeep/10 rounded-[5px]"
				required/>
				<textarea
					placeholder="Your Comment"
					name="comment"
					class="h-24 py-2 px-4 bg-blueDeep/10 rounded-[5px] resize"
				required/>
				<p
					in:fade
					class={`text-[#38b000] -mb-4 ${showMessage ? 'inline-block' : 'hidden'}`}
					out:fade
				>
					{statusMessage}
				</p>
				<input class="hidden" name="color" value={randomColor} />
				<button
					class={`w-1/2 py-2 px-4 mt-6 rounded-[10px] text-white mx-auto hvr-float ${
						loading ? 'bg-green disabled ' : 'bg-green'
					}`}>{loading ? 'LOADING...' : 'COMMENT'}</button
				>
				<p class="mx-auto text-[10px] text-blueDeep/80 cursor-pointer" on:click={toggleForm}>
					Cancel
				</p>
			</div>
		</form>
	</div>
</div>

<style>
	.disabled {
		background-color: #bdbec1;
		pointer-events: none;
	}
</style>
