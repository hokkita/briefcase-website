<template>
    <layout-blank>
        <section 
        class="bg-local bg-center h-full w-full bg-cover" 
        :style="{ backgroundImage: `url(${mainBg})` }">
            <div class="backdrop-blur bg-black bg-opacity-75 h-full">
                <div class="h-full flex flex-wrap items-center justify-center">
                    <div class="p-[1rem] flex flex-col items-center text-white text-center space-y-1">
                        <img class="max-h-[128px]" src="@/assets/img/briefcase-icon.png" alt="Small Empire Logo">
                        <div class="text-displaylarge text-center uppercase">
                            <span class="text-primary-blue italic">BRIEF</span>
                            <span class="text-primary-silver font-bold">CASE</span>
                        </div>
                        <div class="text-lg md:text-xl">Welcome to our investment game!</div>
                        <a href="https://briefcase-pwa.hokkita.com" target="_blank">
                            <div class="px-2 py-0.5 bg-primary-blue hover:bg-bluetint-900 rounded-lg">Live Demo</div>
                        </a>
                        <!-- <div class="flex flex-col items-center justify-center gap-0.5">
                            <div class="text-2xl font-bold">
                                Follow our social media:
                            </div>
                            <div class="flex items-center justify-center gap-4">
                                <a href="https://www.facebook.com/smallempiresb" target="_blank" rel="noopener noreferrer">
                                    <img class="max-w-[6rem]" src="@/assets/img/3d-icon/facebook.png" alt="Facebook">
                                </a>
                                <a href="https://www.tiktok.com/@smallempiresb" target="_blank" rel="noopener noreferrer">
                                    <img class="max-w-[6rem]" src="@/assets/img/3d-icon/tiktok.png" alt="Tik Tok">
                                </a>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </section>
    </layout-blank>
</template>
  
<script>
import mainBg from '@/assets/img/main-background.png';

export default {
    name: 'ComingSoon',
    data() {
        return {
        mainBg
        }
    },
}
</script>