<template>
   <h1>inFormative</h1>
      <h4>Classroom Mastery Tracking System</h4>
      <p>inFormative Teacher is a classroom proficency tracking system.  The backend was created in IntelliJ using Java and 
        Springboot to speak with a PostgreSQL database.  The frontend is Vue.js.  The goal of inFormative is to allow 
        classroom teachers, specialists, and coaches to have a quick and easy way to track 'soft' data about their students 
        continuing progress outside of the formalized gradebook and final assessments.  Teachers are able to utilize pre-built 
        subjects from our database for core curriculum, behavior tracking, etc or customize their own set of diagnostic criteria. 
         They then assign artifacts to individual indicators.  Artifacts recieve a numbered score that can then be used to create 
         robust data maps showing how a student, class, or study group improves and develops their skills for that indicator.  
</p><p>
The website is <a href="https://informative-teacher.netlify.app/">now live</a>!   The backend is hosted via Heroku and the front end is hosted on Netlify.  
</p><p>
Future goals include building out the archive further so that past courses' data to be compared to current course data, creating a print report option, 
and developing a full mobile app in addition to the current mobile web design. 
</p>
<ImageSlider1/>
   </template>
  
  
  
  <script>


    import ImageSlider1 from './ImageSlider1.vue';

export default {
  components: {
  
    ImageSlider1,
}, 

}
   </script>
  