<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper';

	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
    import "swiper/css/effect-fade";

	const rotatingText = [
		{
			title: 'Apolitical',
			description: 'nuetral platform with primary focus on development of state'
		},
		{
			title: 'Inclusive',
			description: 'trans-generational demographic appeal, import, and relevance'
		},
		{
			title: 'Sustainable',
			description: 'structural eco-system to ensure realisation of SDG domestication'
		},
		{
			title: 'Community',
			description: 'state as an inclusive community, city as economic accelerator'
		},
		{
			title: 'Development',
			description: 'methodical, planned, measured, and deliberate incrementals'
		},
	];
</script>

<div class="w-full h-[650px] bg-[url('/hero.png')] bg-cover mt-20">
	<div class="w-full flex flex-col h-[650px] bg-blueDeep/60 absolute mx-auto justify-center">
		<div class="justify-center items-center text-center mt-24">
			<h1 class="font-ibmplex font-bold text-white text-[38px] md:text-[75px]">
				Sustainable<span class="font-light">RIVERS</span>
			</h1>
			<span class="">
				<ul
					class="flex flex-col md:flex-row my-4 gap-x-4 text-2xl md:text-[25px] font-hammersmith text-white font-normal justify-center items-center text-center"
				>
					<li>Yesterday</li>
					<li class="border-x-4 px-4 border-spacing-2 border-yellow">Today</li>
					<li>Tomorrow</li>
				</ul>
			</span>
		</div>

		<div class="font-ibmplex text-center text-white text-[18px] mt-8">
			<Swiper
				modules={[Autoplay, Navigation, Pagination, EffectFade]}
				spaceBetween={50}
                slidesPerGroup={1}
				slidesPerView={1}
				loop={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false
				}}
               
			>
				{#each rotatingText as text}
					<SwiperSlide>
						<p>
							<span class="text-yellow font-semibold font-ibmplex"
								>{text.title.toLocaleUpperCase()}</span
							>
							~ <span class="text-white font-light">{text.description}</span>
						</p>
					</SwiperSlide>
				{/each}
			</Swiper>
		</div>

		<div class="flex flex-col text-white items-center mt-40 cursor-pointer animate-bounce">
			<a href="#about"
				><img src="/downIcon.svg" class="w-10 opacity-60 hover:opacity-100" alt="" /></a
			>
		</div>
	</div>
</div>
