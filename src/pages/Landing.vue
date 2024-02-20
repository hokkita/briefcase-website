<template>
    <layout-default>

        <section 
        class="bg-local bg-center h-full w-full bg-cover" 
        :style="{ backgroundImage: `url(${mainBg})` }">
            <div class="backdrop-blur bg-black bg-opacity-50 h-full">
                <div class="h-full flex flex-wrap items-center justify-center">
                    <div class="w-full max-w-6xl mx-auto py-4 md:py-8 px-1 flex flex-col md:flex-row items-center justify-between text-white text-left space-y-4 md:space-y-0 md:space-x-3">
                        <div class="md:flex-1 space-y-1 text-center md:text-left">
                            <div class="text-displaylarge md:text-displayxl font-extrabold">Trade stocks easy as cake.</div>
                            <div class="text-base md:text-lg">
                                Play trade anytime, anywhere you're visit. 
                                Collect point on any merchant nearby you.
                                Compete with local players.
                                All in one.
                            </div>
                            <div class="hidden md:flex">
                                <a href="https://briefcase-pwa.hokkita.com" target="_blank">
                                    <div class="px-2 py-0.5 bg-gradient-to-br rounded-lg
                                    from-bluetint-300 to-bluetint-500 text-bluetint-950 
                                    hover:from-bluetint-200 hover:to-bluetint-400">Try our Live Demo</div>
                                </a>
                            </div>
                        </div>
                        <div class="flex-1 flex flex-col items-center md:items-end space-y-1">
                            <img class="max-h-[100px] md:max-h-[128px]" src="@/assets/img/briefcase-icon.png" alt="Small Empire Logo">
                            <div class="text-h1 md:text-displaylarge text-center uppercase">
                                <briefcase-text/>
                            </div>
                            <div class="flex md:hidden">
                                <a href="https://briefcase-pwa.hokkita.com" target="_blank">
                                    <div class="px-2 py-0.5 bg-gradient-to-br rounded-lg
                                    from-bluetint-300 to-bluetint-500 text-bluetint-950 
                                    hover:from-bluetint-200 hover:to-bluetint-400">Try our Live Demo</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="w-full bg-zinc-900 text-white">
            <div class="w-full max-w-6xl mx-auto py-4 md:py-8 px-1 space-y-2">
                <div class="text-h1 md:text-displaylarge text-bluetint-200 text-center">
                    What is <briefcase-text/>?
                </div>
                <div class="text-center text-base md:text-lg">
                    3 main components of  <briefcase-text/> :
                </div>
                <div class="w-full flex flex-col md:flex-row gap-4 text-center">
                    <div class="flex-1 flex flex-col items-center gap-0.5">
                        <div class="w-4 h-4 flex flex-wrap items-center justify-center bg-gradient-to-br from-bluetint-400 to-bluetint-800 rounded-full">
                            <span>1</span>
                        </div>
                        <div class="text-bluetint-200">Simulation of stock investment game in real time.</div>
                    </div>
                    <div class="flex-1 flex flex-col items-center gap-0.5">
                        <div class="w-4 h-4 flex flex-wrap items-center justify-center bg-gradient-to-br from-bluetint-400 to-bluetint-800 rounded-full">
                            <span>2</span>
                        </div>
                        <div class="text-bluetint-200">Redeem and collect points on any nearby merchant.</div>
                    </div>
                    <div class="flex-1 flex flex-col items-center gap-0.5">
                        <div class="w-4 h-4 flex flex-wrap items-center justify-center bg-gradient-to-br from-bluetint-400 to-bluetint-800 rounded-full">
                            <span>3</span>
                        </div>
                        <div class="text-bluetint-200">Get latest information on what happend in your area.</div>
                    </div>
                </div>
            </div>
        </section>

        <section 
        class="bg-local bg-center h-full w-full bg-cover" 
        :style="{ backgroundImage: `url(${mainBg})` }">
            <div class="backdrop-blur bg-black text-bluetint-200 bg-opacity-50 h-full">
                <div class="w-full max-w-6xl mx-auto py-4 md:py-8 px-1 space-y-2">
                    <div class="text-center text-base md:text-lg">
                        BEST THING ABOUT <briefcase-text/>
                    </div>
                    <div class="text-h1 md:text-displaylarge text-white text-center italic">
                        "Play and simulate stock so you know how to trade them properly" 
                    </div>
                    <div class="text-center text-base md:text-lg space-y-0.5">
                        <div class="text-xl">Shahrul Nizam</div>
                        <div class="text-sm">
                            <briefcase-text/> <span class="italic">Creator</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

<section class="w-full bg-zinc-900 text-white">
    <div class="w-full max-w-6xl mx-auto flex flex-col items-center py-4 md:py-8 px-1 space-y-2">
        <div class="text-h1 md:text-displaylarge text-bluetint-200 text-center">
            Try out our live demo now!
        </div>
        <div class="text-center text-base md:text-lg">
            Be a step ahead of your family and friends. Try out our live demo to get better insights of <briefcase-text /> before our official launch soon!
        </div>
        <div class="flex">
            <a href="https://briefcase-pwa.hokkita.com" target="_blank">
                <div class="px-2 py-0.5 bg-gradient-to-br rounded-lg
                from-bluetint-300 to-bluetint-500 text-bluetint-950 
                hover:from-bluetint-200 hover:to-bluetint-400">Open Live Demo</div>
            </a>
        </div>
    </div>
</section>

    </layout-default>
</template>

<script>
import mainBg from '@/assets/img/main-background.png';

export default {
    name: 'Landing',
    data() {
        return {
        mainBg
        }
    },
}
</script>