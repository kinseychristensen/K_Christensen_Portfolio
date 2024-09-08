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
            { src: './informative_images/home_view.png', 
            alt: 'mobile home', 
            caption: 'Users access classes, subjects, and groups easily from the home menu.',
           
          },
          { src: './informative_images/create_class.png',
            alt: 'desktop create class page', 
            caption: 'Class Page allows user to edit class details including assigning and archiving subjects.',
            
          },
          { src: './informative_images/create_subject.png',
            alt: 'desktop create subject page', 
            caption: 'Creating a subject allows for maximum personalization.',
        },
            
            { src: './informative_images/subject_database.png',
            alt: 'desktop subject search page', 
            caption: 'Users can search and clone existing subjects from other users.',
          },
    
          { src: './informative_images/class_roster.png',
            alt: 'mobile class roster', 
            caption: 'Teachers can easily add and remove students.  Student data remains linked to the school id number for each student so data does not get lost.',
            
          },
          { src: './informative_images/groups.png',
            alt: 'mobile groups page', 
            caption: 'Teachers can assign students to groups in order to easily add scores or view data on the go.',
            
          },
          { src: './informative_images/artifact.png',
            alt: 'desktop create artifact page', 
            caption: 'Artifacts are the various data points that users can collect: whether it is an assignment, confrence, performance, discussion, or more.',
            
          },
          { src: './informative_images/subject_page.png',
            alt: 'desktop subject page', 
            caption: 'From the subject page, users can see data, add scores, or create artifacts.',
            
          },
          { src: './informative_images/student_page.png',
            alt: 'desktop student page', 
            caption: 'Student pages will show both their scores and mastery levels.',
            
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