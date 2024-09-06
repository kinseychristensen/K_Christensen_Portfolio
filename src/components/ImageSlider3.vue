<script setup>
import { ref, onUnmounted } from 'vue';

const images = [
        { src: 'https://drive.google.com/file/d/1o2OZ2b8Qa-Q5m9eJp12rAmPa_9Y50K3O/view?usp=share_link', 
        alt: 'menu', 
       
      },
      { src: 'https://drive.google.com/file/d/1sdyb5jcQof4ybIOno0EJq5YN45hLhbl9/view?usp=share_link',
        alt: 'send', 
        
      },
      { src: 'https://drive.google.com/file/d/1YgIFoH-LjaZJDidUaA8ej8IDGc5aG3mQ/view?usp=share_link',
        alt: 'request', 
    },
        
        { src: 'https://drive.google.com/file/d/13DBybLi6uE1kHwh_njnJjE1PHLgwZZQp/view?usp=share_link',
        alt: 'approve a request', 
      },

      { src: 'https://drive.google.com/file/d/1NRT1evg1vAj-6a3O9kO8YiYkLPy_Qy1J/view?usp=share_link',
        alt: 'history', 
      
      },
      
];

const currentSliderIndex = ref(0);
let intervalId;

const isTimerPaused = ref(false);

const nextSlide = () => {
    currentSliderIndex.value = (currentSliderIndex.value + 1) % images.length;
    isTimerPaused.value ? '' : startSlider()
};

const prevSlide = () => {
    currentSliderIndex.value = (currentSliderIndex.value - 1 + images.length) % images.length;
    isTimerPaused.value ? '' : startSlider()
};

const startSlider = () => {
    intervalId = setInterval(() => {
        nextSlide();
    }, 3000);
};

const playSlider = () => {
    isTimerPaused.value = false;
    startSlider();
}

const stopSlider = () => {
    clearInterval(intervalId);
    isTimerPaused.value = true;
}

startSlider();

onUnmounted(() => {
    clearInterval(intervalId);
});
</script>

<template>
    <div class="h-screen flex flex-col">
        <div class="bg-slate-500 text-center p-4 uppercase text-gray-50">
    
        </div>
      

        <div class="slider flex h-[50%]">
            <div class="flex mx-auto justify-center relative w-[500px] h-[300px] m-auto">
                <template v-for="(image, index) in images" :key="index">
                    <transition name="fade">
                        <img :src="image.src" :alt="image.alt" class="photo"
                            v-if="index === currentSliderIndex" />
                    </transition>
                </template>

                <!-- next and previous buttons -->
                <i class="fas fa-caret-right absolute right-0 top-1/3 text-4xl m-2 cursor-pointer text-white z-50"
                    @click="nextSlide"></i>
                <i class="fas fa-caret-left absolute left-0 top-1/3 text-4xl m-2 cursor-pointer text-white z-50"
                    @click="prevSlide"></i>

                <!-- play or pause buttons -->
                <i class="fa-solid fa-circle-play absolute bottom-5 text-3xl m-2 cursor-pointer text-gray-500 z-50"
                    @click="playSlider" v-if="isTimerPaused"></i>
                <i class="fa-solid fa-pause absolute bottom-5 text-3xl  m-2 cursor-pointer shadow-2xl text-gray-500 z-50"
                    @click="stopSlider" v-else></i>
            </div>
        </div>
    </div>

</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s, transform 1s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateX(0);
}
.photo {
    width: 90vw;
    height: auto;
}
@media (min-width: 1024px){
    .photo {
    max-width: 600px;
    height: auto;
    margin: auto;
}
}
</style>