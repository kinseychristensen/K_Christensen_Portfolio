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
    
            { src: './flip_images/admin_decks.png', 
            alt: 'view of admin page', 
            caption: 'Unregistered users can view decks made by school administration.',
           
          },
          { src: './flip_images/deck_page.png',
            alt: 'view of user decks', 
            caption: 'Once registered, users can collect an unlimited number of flash card decks.',
            
          },
          { src: './flip_images/update_deck.png',
            alt: 'view of update deck page', 
            caption: 'If a user updates a deck that belongs to another user, it automatically makes a duplicate for the user to edit.',
            
          },
          { src: './flip_images/create_card.png',
            alt: 'view of create card page', 
            caption: 'Flash cards may add images on the front of the card using Cloudinary.',
            
          },
          { src: './flip_images/search_cards.png',
            alt: 'view of card page with search bar', 
            caption: 'Users can also search all existing cards to then add to their own decks.',
            
          },
          { src: './flip_images/study_session2.png',
            alt: 'view of study session page', 
            caption: 'In a study session, users will be given the front of the card and once they believe they know the answer, they flip to see the back of the card.',
            
          },
          { src: './flip_images/study_session.png',
            alt: 'view of study session page', 
            caption: 'The user will self-score if they knew the answer or need more study for that question.',
            
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
      
        .min-button{
          display: none;
      }
      .max-button{
        display: block;
      }
      .photo{
        max-width: 600px;
      }
    }
    </style>