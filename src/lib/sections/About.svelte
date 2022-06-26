<script>
    // your script goes here
    import Concept from '$lib/content/concept.svelte'
    import AboutButton from '$lib/components/Button/AboutButton.svelte'
</script>

<div class="w-full h-full flex flex-auto mx-auto justify-center relative" id="about">
    <div class="w-[150px] inline-block bg-blueLight">
        <div class=" rotate-90 scale-x-flip scale-y-flip sticky top-[50%] mt-[20rem] mb-20">
            <h1 class="font-ibmplex font-bold text-[72px] text-white/70">ABOUT</h1>
        </div>
    </div>
    <div class="flex flex-col mx-auto px-16 pb-24 justify-center">
        <div class="">
            <h1 class="font-hammersmith text-[45px] mt-20 mb-8">Why <span class="text-blueLight">Sustainable</span>Rivers?</h1>
            <p class="text-[18px] mt-3 w-4/5 -skew-x-6 relative z-20"><q>...COUNTRYMEN, as you are all aware Nigeria has been immersed in an extremely grave crisis for almost eighteen months. We have now reached a most critical phase where what is at stake is the very survival of Nigeria as one political and economic unit...</q></p>
            <img src="/blob.svg" alt="blob" class="w-[400px] right-0 mr-20 -mt-32 absolute z-10"/>
        </div>

        <div class="flex mx-auto justify-center">
            <div class="w-[700px] h-[250px] bg-blueLight bg-[url('/phroad.jpg')] bg-cover bg-center rounded-[10px] mt-12 z-20 relative justify-center">
                <div class="w-full h-[90px] bottom-0 bg-blueLight/70 absolute rounded-b-[10px]">
                    <div class="text-white text-[14px] mx-8 my-6">
                        <p>Porthacourt City</p>
                        <p class="font-semibold">Rivers State. NG.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="text-[16px] font-light my-16 space-y-8">
            <!-- about page write ups -->
            <Concept />
        </div>
        <AboutButton />
    </div>
    
</div>

<style>

    /* animating quote */
    q::before,
q::after {
  animation: dancing 1s linear infinite;
  display: inline-block;
  transform: rotate(13deg);
}

@keyframes dancing {
  0% {
    transform: rotate(13deg) scale(2);
  }

  25% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(-13deg) scale(2);
  }

  75% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(13deg) scale(2);
  }
}
q {
  quotes: "“" "”" "“" "”";
}
</style>