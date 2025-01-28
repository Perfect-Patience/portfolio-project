<script setup>

</script>

<template>
  <main class="bg-slate-950 h-fit">
  <div class="min-h-screen flex items-center justify-center">
    <div class="container mx-auto px-6 md:flex md:items-center">
     <!-- Introduction -->
      <div class="text-center md:text-left md:w-1/2 grid gap-6" >
        <h1 class="text-3xl sm:text-5xl font-bold text-white mb-4">Hi, I'm Perfect Patience Dah</h1>
        <p class="text-xl sm:text-2xl text-gray-200 mb-6">I'm a Web developer. Passionate about creating amazing digital experiences.</p>
        
        <div class="flex flex-col sm:flex-row sm:justify-start gap-4">
          <Button class="">Let's Connect
            <i class="bi bi-arrow-right"></i>
          </Button>
          <a href="https://x.com/Dev_Edem" target="_blank" class="text-white hover:text-gray-800">
            <i class="bi bi-twitter text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/perfect-patience-dah/" target="_blank" class="text-white hover:text-gray-800">
            <i class="bi bi-linkedin text-2xl"></i>
          </a>
          <a href="https://github.com/Perfect-Patience" target="_blank" class="text-white hover:text-gray-800">
            <i class="bi bi-github text-2xl"></i>
          </a>
        </div>
        <br>
         

         <!-- Skills -->
         <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">Skills</h2>
         <div class="flex flex-col sm:flex-row sm:justify-start items-center gap-10 mt-6">
          
          <img src="../assets/html.jpg" class="size-10 sm:size-15 rounded"/>
          <img src="../assets/css.jpg" class="size-10 sm:size-15 rounded"/>
          <img src="../assets/JavaScript.jpg" class="size-10 sm:size-15 rounded"/>
          <img src="../assets/vue.net" class="size-10 sm:size-15 rounded"/>
          <img src="../assets/tailwind.jpg" class="size-10 sm:size-15 rounded"/>
          <img src="../assets/firebase.jpg" class="size-10 sm:size-15 rounded"/>
          <br>
            
            
          </div>
      </div>

      
      <div class="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <img src="../assets/profile photo.jpg" alt="Portfolio" class="rounded-full w-48 h-48 sm:w-94 sm:h-94">
      </div>
    </div>
  </div>
  </main>
</template>

<script>
import Button from '../components/BlueButton.vue'
export default {
  name: "PortfolioHomePage",
  components: {
    Button
  }
};
</script>