<script>
    let menuItem = [
        {id: 1, item: "Facebook", link: "www.facebook.com"},
        {id: 2, item: "Twitter", link: "www.twitter.com"},
        {id: 3, item: "Instagram",link: "www.instagram.com"},
        {id: 4, item: "Linkedin", link: "www.linkedin.com"},
        {id: 5, item: "Tiktok", link: "www.tiktok.com"}
    ];
    
    let date = new Date();
    let year = date.getFullYear()
</script>

<div class="w-full h-full flex flex-auto mx-auto justify-center relative" id="contact">
	<div class="w-[20px] md:w-[150px] inline-block bg-blueDeep/60">
		<div class="rotate-90 scale-x-flip scale-y-flip sticky top-[50%] mt-[28rem] mb-10">
			<h1 class="font-ibmplex font-bold text-[72px] text-white/70 invisible md:visible">CONTACT</h1>
		</div>
	</div>


    <div class="w-full flex flex-col mx-auto bg-white justify-center items-center text-center">
        <img src="/logo.svg" alt="footer logo" class="w-[100px] md:w-[110px] mt-20 md:mt-28"/>
        <div class="w-5/6 md:w-3/5 mx-auto my-4 items-center text-center">
            <h1 class="font-ibmplex text-[26px] md:text-[32px] text-blueDeep/60"><b>Sustainable</b>Rivers</h1>
            <p class="font-ibmplex text-[16px] md:text-[18px] font-light my-4"><span class="font-bold">Sustanable</span>Rivers initiative is a platform that seeks to understand the past, particularly as it lays foundation for what evolved into today; review the present against a series of developmental barometers; with an informed outlook into the future in economic, social, and political terms amongst others.</p>
            
            <a href="mailto:Info@sustainablerivers.org" id="email"><h1 class="font-ibmplex font-semibold text-[24px] md:text-[32px] mt-12 hover:opacity-70">info@sustainablerivers.org</h1></a>
            <div class="border-b-4 border-blueLighter w-40 md:w-60 mt-2 mx-auto" />
    
             <div class="font-semibold space-x-2 md:space-x-12 mx-auto mt-20 md:mt-24 pb-2 text-[14px]">
                {#each menuItem as menu (menu.id)}
                 <a rel="external" href={menu.link} target="_blank">{menu.item}</a>
                {/each}
             </div>
            <p class="font-light text-[14px] my-4">Copyright &copy; {year} <span class="font-semibold">Substainable</span>Rivers. All rights reserved.</p>
        </div>
    </div>
</div>


