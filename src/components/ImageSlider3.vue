<template>

    <div class="image-grid">
      
        <button @click="previousPhoto" class="previous"><a class="min-button">Previous</a><a class="max-button"> Previous Image</a></button>
        <button @click="nextPhoto" class="next"><a class="min-button">Next</a><a class="max-button"> Next Image</a></button>
        <div v-for="(image, index) in images" :key="index" class="image-loop">
                        
                            <img :src="image.src" :alt="image.alt" class="photo"
                                v-if="index === interval" />
                                <div class="caption" v-if="index===interval">{{ image.caption }}</div>
                 </div>
    </div>
    
    
    </template>
    <script>
    
    
    export default {
     
        data(){
          return {
            images: [
    
            { src: './tenmo_images/tenmo_menu.png', 
            alt: 'menu', 
           
          },
          { src: './tenmo_images/tenmo_send.png',
            alt: 'send', 
            
          },
          { src: './tenmo_images/tenmo_request.png',
            alt: 'request', 
        },
            
            { src: './tenmo_images/tenmo_approve.png',
            alt: 'approve a request', 
          },
    
          { src: './tenmo_images/tenmo_history.png',
            alt: 'history', 
          
          },
            ],
            interval: 0,
          }
        }, 
        methods: {
            nextPhoto(){
                if(this.interval + 1 === this.images.length){
                    this.interval = 0;
                }else {
                    this.interval += 1;
                }
            }, 
            previousPhoto() {
                if(this.interval == 0){
                    this.interval = this.images.length - 1;
                }else {
                    this.interval -= 1;
                }
            }
        }
    }
    </script>
    <style scoped>
    
    .image-grid{
        display: grid;
        max-width: 600px;
        grid-template-columns: 1fr  1fr;
        grid-template-areas: 
        "previous-button  next-button"
        "image-loop image-loop"
        ;
    }
    .previous{
        grid-area: previous-button;
    }
    .next{
        grid-area: next-button;
        justify-self: right;
    }
    
    .image-loop {
        max-width: 600px;
        grid-area: image-loop;
    }
    
    .min-button{
      display: normal;
      }
      .max-button{
        display: none;
      }
      .photo{
        max-width: 90vw;
      }
      
      @media (min-width: 1024px) {
      
        .photo{
        max-width: 600px;
      }
        .min-button{
          display: none;
      }
      .max-button{
        display: block;
      }
    }
    </style>