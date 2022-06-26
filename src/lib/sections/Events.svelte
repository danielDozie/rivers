<script>
    let events = [
        {date: 'July 10 + 24'},
        {date: 'August 7 + 21'},
        {date: 'September 9 + 18'},
        {date: 'October 9 + 23'},
        {date: 'November 6 + 20'},
        {date: 'December 4 + 11'},
        {date: 'January (Final)'},
        {date: '........'},
    ];
</script>

<div class="w-full h-full flex flex-auto mx-auto justify-center relative " id="event">
    <div class="w-[150px] inline-block bg-yellow">
        <div class=" rotate-90 scale-x-flip scale-y-flip sticky top-[50%] mt-[20rem] mb-16">
            <h1 class="font-ibmplex font-bold text-[72px] text-white/70">EVENTS</h1>
        </div>
    </div>
    <div class="w-full flex flex-col mx-auto px-16 pb-24 justify-center bg-altYellow">
        <div class="">
            <h1 class="font-hammersmith text-[45px] mt-20 mb-8">Timeline <span class="text-blueLight">- Upcoming</span> events.</h1>
            <div>
                <h1 class="font-ibmplex font-normal text-[35px] text-center">ZOOM PLATFORM SESSIONS</h1>
                <div class="border-b-4 border-blueLighter w-64 mx-auto" />
            </div>
            <div class="w-[594px] h-[85px] mt-12 flex mx-auto bg-blueDeep text-center justify-center items-center rounded-[50px] drop-shadow-md text-white">
                <p class="font-ibmplex text-[30px] font-normal">Sundays 1600hrs - 1800hrs GMT<sup class="font-bold text-5xl absolute mt-2 text-yellow animate-pulse">.</sup></p>
            </div>
        </div>

       
        <div class="w-[80%] mx-auto my-16">
           <div class="grid grid-cols-2 gap-x-4 gap-y-12">
               {#each events as event}
                <div class="w-[350px] h-[80px] bg-white rounded-[10px]">
                    <p class="text-center mt-4 text-[30px]">{event.date}</p>
                </div>
               {/each}
           </div>
        </div>
        <div>
            <p class="text-center text-[16px] font-light px-4">This agenda-setting non-partisan vehicle is shaped to steer narrative towards people orientated inclusive growth, climate considerate fiscal interventions, investor focused sustainable development, and economy strengthening polity maturation.</p>
        </div>
    </div>
    
</div>
