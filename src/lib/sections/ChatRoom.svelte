<script>
    let comments = [
        {name: 'Chidozie Danie',
        email: 'placmedia@gmail.com',
        comment: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et'},
        {name: 'Ariana Grande',
        email: 'aryraymond@yahoo.com',
        comment: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et'},
        {name: 'John .K. Wike',
        email: 'justice_wike@gmail.com',
        comment: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et'},
    ];
</script>

<div class="w-full h-full flex flex-auto mx-auto justify-center relative" id="chatroom">
    <div class="w-[150px] inline-block bg-blueLighter">
        <div class="rotate-90 scale-x-flip scale-y-flip sticky top-[50%] mt-[28rem]">
            <h1 class="font-ibmplex font-bold text-[72px] text-white/70">CHATROOM</h1>
        </div>
    </div>
    <div class="w-full flex flex-col mx-auto px-16 pb-8 justify-center bg-altBlue">
        <div class="">
            <h1 class="font-hammersmith text-[45px] mt-20 mb-8">Chatroom <span class="text-blueLight">- Let’s Share</span>  Ideas</h1>
        </div>
        
        <div class="w-4/5 justify-center items-center align-middle mx-auto my-8">
            <div clas="flex flex-col">
                    {#each comments as comment}
                    <div class="w-[700px] py-4 px-6 bg-white rounded-[10px] border mb-8 border-blueLight/60">
                    <div class="flex flex-col text-[14px] text-blueLight gap-y-[6px]">
                        <p><b>Name ~ </b> {comment.name}</p>
                        <p><b>Email ~ </b> {comment.email}</p>
                        <p><b>Comment ~ </b> {comment.comment}</p>
                    </div>
                    </div>
                    {/each}
            </div>
            <div class="flex justify-end px-28">
                <p class="font-hammersmith text-[14px] text-blueLight cursor-pointer hover:underline hover:decoration-blueLight hover:underline-offset-4 decoration-2">Load more comments</p>
            </div>

            <div>
                <div class="w-[700px] py-12 px-6 bg-white rounded-[10px] border my-16 border-blueLight/60">
                    <div class="flex flex-col text-[14px] text-blueLight gap-y-[20px] w-[80%] mx-auto">
                        <input type="text" name="" placeholder="Full Name" class="py-4 px-8 bg-blueDeep/10 rounded-[10px]">
                        <input type="email" name="" id="" placeholder="Email Address (Will be verified)"  class="py-4 px-8 bg-blueDeep/10 rounded-[10px]"/>
                        <textarea placeholder="Your Comment"  class="h-40 py-4 px-8 bg-blueDeep/10 rounded-[10px] resize"></textarea>
                    </div>
                    </div>
            </div>
        </div>
    </div>
    
</div>
