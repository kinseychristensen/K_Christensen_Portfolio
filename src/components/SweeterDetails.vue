<template>
    <h1>Sweeter By The Dozen</h1>
       <h4>A Recipe Sharing Website</h4>
       <p>
        Sweeter by the Dozen is a family recipe sharing website.   The backend was created in IntelliJ using Java and 
        Springboot to speak with a PostgreSQL database.  The frontend is Vue.js.  The goal of this website is to allow users to share and save their favorite recipes easily 
        without having to slog through endless text and images.  The vintage recipe cards will be sleek and streamlined, isolating the recipes for easy reading.  Registered viewers 
        can save favorite recipes, leave comments, and upload their own images. Users can also use the complex search option wich returns unique recipe lists ordered by both keywords and tags.  
         Admins approve recipes, user images, and can remove flagged comments.  Admins can also edit existing recipes, user access, and grant other members admin privleges. 
         Email.js is utilized to allow for two factor authentication for password resets as well as sending user notifications.  
 </p>

 <p>The site is now at the point of styling and final tests.  It should be live by December 24, 2024.</p>
 <ImageSlider3/>
   </template>
  
  
  
  <script>


    import ImageSlider3 from './ImageSlider3.vue';

export default {
  components: {
  
    ImageSlider3,
}, 

}
   </script>