<script setup>
import Navbar from './components/TheNavbar.vue';
import Footer from './components/TheFooter.vue'

</script>

<template>

  <header class=" sticky top-0 bg-slate-950 h-md z-10">
   <Navbar/>
  </header>

  <RouterView />
  <footer>
    <Footer/>
  </footer>
</template>

