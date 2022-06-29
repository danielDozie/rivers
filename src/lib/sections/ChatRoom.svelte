<script>
	$:
	comments = [
		{
			name: 'Chidozie Danie',
			email: 'placmedia@gmail.com',
			comment:
				'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et'
		},
		{
			name: 'Ariana Grande',
			email: 'aryraymond@yahoo.com',
			comment:
				'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.'
		},
		{
			name: 'John .K. Wike',
			email: 'justice_wike@gmail.com',
			comment:
				'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
		},
		{
			name: 'Ariana Grande',
			email: 'aryraymond@yahoo.com',
			comment:
				'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.'
		},
		{
			name: 'John .K. Wike',
			email: 'justice_wike@gmail.com',
			comment:
				'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
		},
		{
			name: 'Chidozie Danie',
			email: 'placmedia@gmail.com',
			comment:
				'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et'
		},
		{
			name: 'Ariana Grande',
			email: 'aryraymond@yahoo.com',
			comment:
				'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.'
		},
		{
			name: 'John .K. Wike',
			email: 'justice_wike@gmail.com',
			comment:
				'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
		},
		{
			name: 'Ariana Grande',
			email: 'aryraymond@yahoo.com',
			comment:
				'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.'
		}
	];


</script>



<div class="w-full h-full flex flex-auto mx-auto justify-apart bg-altBlue" id="chatroom">
	<div class="w-[20px] md:w-[150px] md:inline-block bg-blueLighter">
		<div class="rotate-90 scale-x-flip scale-y-flip sticky top-[50%] mt-[28rem] mb-20">
			<h1 class="font-ibmplex font-bold text-[72px] text-white/70 invisible md:visible">CHATROOM</h1>
		</div>
	</div>
	<div class="w-full flex flex-col mx-auto px-4 md:px-16 pb-20 justify-cente">
		<div class="">
			<h1 class="font-hammersmith text-[24px] md:text-[45px] mt-20 mb-8">
				Chatroom <span class="text-blueLight">- Let’s Share</span> Ideas
			</h1>
		</div>

		
		<div class="w-full mx-auto">
			<div class="relative flex flex-col justify-center py-6 sm:py-12">
				<div class="columns-1 md:columns-3 gap-x-4 space-y-4 [column-fill:_balance] box-border mx-auto before:box-inherit after:box-inherit">
					  {#each comments as comment}
						<div class="w-[350px] break-inside-avoid font-light md:w-[320px] min-h-48 py-4 px-6 bg-white rounded-[10px] drop-shadow-md border-blueLight/60">
							<div class="text-[14px] text-blueLight">
								<p class="font-[500]"><span class="font-[500]">Name ~ </span> {comment.name}</p>
								<p><span class="font-[500]">Email ~ </span> {comment.email.replace(/^(.)(.*)(.@.*)$/,
									(_, a, b, c) => a + b.replace(/./g, '*') + c
							   )
							   }</p>
								<p><span class="font-[500]">Comment ~ </span> {comment.comment}</p>
							</div>
						</div>
					{/each}
					  
				  </div>
			  </div>
				
			<div class="flex justify-center">
				<p
					class="font-hammersmith text-[14px] text-blueLight cursor-pointer hover:underline hover:decoration-blueLight hover:underline-offset-4 decoration-2 drop-shadow-lg"
				>
					Load more comments
				</p>
			</div>

			<div class="flex justify-center items-center text-center">
				<div class="w-[350px] md:w-[700px] py-12 px-6 bg-white rounded-[10px] border my-16 border-blueLight/20">
					<div class="flex flex-col text-[14px] text-blueLight gap-y-[20px] w-full md:w-[80%] mx-auto">
						<input
							type="text"
							name=""
							placeholder="Full Name"
							class="py-4 px-8 bg-blueDeep/10 rounded-[10px]"
						/>
						<input
							type="email"
							name=""
							id=""
							placeholder="Email Address (Will be verified)"
							class="py-4 px-8 bg-blueDeep/10 rounded-[10px]"
						/>
						<textarea
							placeholder="Your Comment"
							class="h-32 py-4 px-8 bg-blueDeep/10 rounded-[10px] resize"
						/>
						<button class="py-4 px-8 bg-blueLight mt-6 rounded-[10px] text-white"
							>COMMENT/JOIN US</button
						>
					</div>
				</div>
			</div>

			<div class="text-[22px] md:text-[28px] pb-20">
				<p class="font-hammersmith">Need more information?</p>
				<p class="font-ibmplex text-[22px] md:text-[28px]">
					Reach out to us. We would really love to hear from you.<br />
					<span class="text-blueLighter font-light underline underline-offset-4 decoration-[3px] decoration-blueLighter text-[22px] md:text-[28px]"
						>Use the email below. 
					</span>
					<a href="#email"
							><span class="text-blueDeep cursor-pointer animate-bounce">&darr</span></a
						>
				</p>
			</div>
		</div>
		
	</div>
</div>
