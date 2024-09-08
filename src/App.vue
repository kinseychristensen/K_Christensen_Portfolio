<script>
import Tagline from './components/TagLine.vue'
import HomeComponent from './components/HomeComponent.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';

export default {
    components: {
      HomeComponent,
      ProjectsComponent, 
      Tagline,
    },
    data(){
      return {
        showProjects: false,
        showHome: true,
      }
    }, 
    methods: {
      showHomeNow(){
        this.showHome = true;
        this.showProjects = false;
      }, 
      showProjectNow(){
        this.showProjects = true;
        this.showHome = false;
      },
  },
  }
</script>

<template>

  <div class="profile">
  <header>
    <img alt="Photo of Kinsey" class="logo" src="./assets/KChristensen.jpg"/>

   
      <Tagline msg="Kinsey Christensen" id="tagline"/>

      <nav id="nav-links">
        <a @click="showHomeNow">About Me</a>
        <a @click="showProjectNow">Projects</a>
        <a href=" https://www.linkedin.com/in/kinsey-christensen/">My LinkedIn</a> 
      </nav>
   
  </header>

  <div v-if="showHome"><HomeComponent/></div>

  <div v-if="showProjects"><ProjectsComponent/></div>
  

  <footer><a href="https://www.flaticon.com/free-icons/flower" title="flower icons">Flower icons created by Freepik - Flaticon</a>
          </footer>
</div>
</template>

<style scoped>
header {
  max-height: 100vh;
  display: grid;
 grid-template-columns: 1fr;
 grid-template-areas: 
 "logo"
 "nav-links"
 "tag"
 ;
 margin-top: 40px;
}


.logo {
 margin: auto;
  max-width: 206px;
  max-height: 256px;
  border-radius: 20px;
  grid-area: logo;
  border-color: rgb(246, 66, 180);
  border-style: double;
  
}
.wrapper{
  grid-area: wrapper;
}

nav {
  width: 100%;
  font-size: large;
  text-align: center;

  
}
#nav-links{
  grid-area: nav-links;
  
}
#tagline{
  grid-area: tag;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

footer{
  margin-top: 10px;
  font-size: small;
}


@media (min-width: 1024px) {
  header{ 
  max-height: 100vh;
  display: grid;
 grid-template-columns: 220px 1fr;
 grid-template-rows: 200px 60px 1fr;
 grid-template-areas: 
 "logo tag"
 "logo nav-links"
 ". ."
 ;
 margin-top: 40px;
 gap: 3px;
  }
  .logo {
    margin: 0px;
  }

  #tagline{
  grid-area: tag;
  max-height: 200px;
  padding-right: 3px;
}
#nav-links{
  grid-area: nav-links;
  align-content: center;
}

  nav {
    text-align: left;
    font-size: 1rem;
    
 
  }
  .profile{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
    "header router"
    ". router"
    ". footer"
    ;
 
  }
  footer {
    grid-area: footer;
  }
  .router{
    grid-area: router;
  }
}
</style>
