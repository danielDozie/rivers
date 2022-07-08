<script>
import ClientLogo from "../components/Others/ClientLogo.svelte";
    import {page} from "$app/stores"

    let ResearchVolunteerData = [
        {name: "/logos/1.svg"},
        {name: "/logos/2.svg"},
        {name: "/logos/9.svg"},
        {name: "/logos/10.svg"},
        {name: "/logos/11.svg"},
        {name: "/logos/12.svg"},
        {name: "/logos/3.svg"},
        {name: "/logos/4.svg"},
        {name: "/logos/5.svg"},
        {name: "/logos/6.svg"},
        {name: "/logos/7.svg"},
        {name: "/logos/8.svg"},
    ]
    
    
    let menuItem = [
        {id: 1, item: "Facebook", link: "https://www.facebook.com"},
        {id: 2, item: "Twitter", link: "https://www.twitter.com"},
        {id: 3, item: "Instagram",link: "https://www.instagram.com"},
        {id: 4, item: "Linkedin", link: "https://www.linkedin.com"},
        {id: 5, item: "Youtube", link: "https://www.youtube.com"}
    ];
    let date = new Date();
    let year = date.getFullYear()

    let footerPoint = [
        {name: "Research Volunteer", url: "#research-volunteer"},
        {name: "Operational Volunteer", url: "#operational-volunteer"},
        {name: "Proud Sponsors", url: "#sponsors"},
        {name: "Proud Partners", url: "#partners"}
    ];
    
</script>

<div class="w-full h-full flex flex-auto mx-auto justify-apart" id="contact">
	<!-- <div class="w-[20px] md:w-[150px] inline-block bg-blueDeep/60">
		<div class="rotate-90 scale-x-flip scale-y-flip sticky top-[50%] mt-[28rem] mb-10">
			<h1 class="font-ibmplex font-bold text-[72px] text-white/70 invisible md:visible">CONTACT</h1>
		</div>
	</div>
     -->
    <div class="w-full flex flex-col mx-auto justify-center items-center text-center mt-32">
        <div class="">
			<h1 class="font-hammersmith text-[24px] md:text-[45px] mb-8 leading-0">
				Contact <span class="text-blueLight">- Join us.</span> Let's build Together.
			</h1>
		</div>
        
        <div class="flex flex-wrap justify-center items-center text-center gap-4 ">
            {#each footerPoint as point}
            <a class="w-4/5 md:w-[180px] bg-white shadow-lg rounded-[10px] text-blueDeep/70 text-sm font-normal mx-auto px-4 py-3 border border-green hvr-shutter-out-horizontal cursor-pointer" href={point.url} class:active="{$page.url.hash === point.url}">
                <span >{point.name}</span>
            </a>
            {/each}
        </div>
        <ClientLogo logos={ResearchVolunteerData} />

        <div class="border border-b w-[50%] border-blueDeep/20 my-20" />
        
        <img src="/subRiverLogo.svg" alt="footer logo" class="w-[60px] md:w-[80px] "/>
        <div class="w-5/6 md:w-3/5 mx-auto my-4 items-center text-center">
            <h1 class="font-ibmplex text-[26px] md:text-[32px] text-blueDeep/60"><b>Sustainable</b>Rivers</h1>
            <p class="font-ibmplex text-[16px] md:text-[18px] font-light my-4">The <span class="font-bold">Sustanable</span>RIVERS initiative is a platform that seeks to understand the past, particularly as it lays foundation for what has evolved into the present, and review the present against a series of developmental barometers, to articulate an informed outlook into the future in economic, social, development, and political terms amongst others.
                
                This agenda-setting non-partisan vehicle is designed to steer narrative towards people orientated inclusive growth, climate considerate fiscal interventions, investor focused sustainable development, and economy strengthening polity maturation.
                
                Rivers State founded in 1967, reshaped in 1996, has effectively existed for well over fifty years and as such by the turn of the current administrative cycle in 2023 deserves necessary opportunity to set itself on a long-term path of progressive statehood.
            </p>
            
            <a href="mailto:Info@sustainablerivers.org" id="email"><h1 class="font-ibmplex font-semibold text-[24px] md:text-[32px] mt-12 hover:opacity-70"># info@sustainablerivers.org</h1></a>
            <div class="border-b-4 border-blueLighter w-40 md:w-60 mt-2 mx-auto" />
    
             <div class="font-semibold space-x-4 md:space-x-12 mx-auto mt-20 md:mt-24 pb-2 text-[13px] md:text-[14px">
                {#each menuItem as menu (menu.id)}
                 <a rel="external" href={menu.link} target="_blank" class="hover:text-green">{menu.item}</a>
                {/each}
             </div>
            <p class="font-light text-[14px] my-4">&copy; {year} The <span class="font-semibold">Substainable</span>Rivers Initiative. All rights reserved.</p>
        </div>
    </div>
</div>


<style>
    .hvr-shutter-out-horizontal::before {
      background: #7ED957;
      border-radius: 10px;
    }
a.active {
  background: #7ED957;
  color:#ffffff
}

</style>