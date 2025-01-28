
<template>
  <div tabindex="0" class="text-gray-100 py-3.5 px-6 md:flex justify-between items-center">
    <a href="/"><div class="flex items-center cursor-pointer">
      <span class="text-gray-100 text-xl mr-1">
        <i class="bi bi-code-square"></i>
      </span>
      <h1 class="text-xl px-2">Perfect</h1>
    </div></a>
    <span
      class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl"
      @click="toggleMenu()"
    >
      <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
    </span>
    <ul
      class="md:flex md:items-center md:px-0 px-6 md:pd-0 pd-10 md:static absolute bg-slate-950 md:w-auto w-full top-14 duration-700 ease-in"
      :class="[open ? 'left-0' : 'left-[-100%]']"
    >
      <li role="listitem" class="md:px-6 md:py-0 py-2" v-for="link in links" :key="link.name">
        <a :href="link.link" class="text-xl hover:text-blue-600">{{
          link.name
        }}</a>
      </li>
      <li class="md:px-6 md:py-0 py-4">
        <Button @click="sendEmail" class="cursor-pointer">Let's talk</Button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import Button from "./BlueButton.vue";
export default {
  components: {
    Button,
  },
  setup() {
    let open = ref(false);
    let links = [
      { name: "Home", link: "/portfolio-project/" },
      { name: "About me", link: "/portfolio-project/about" },
      { name: "Projects", link: "/portfolio-project/projects" },
    ];

    function toggleMenu() {
      open.value = !open.value;
    }
    function sendEmail () {
    const mailtoLink = `mailto:patiencedah@gmail.com`;
    window.location.href = mailtoLink;
    }
    return {
      links,
      open,
      toggleMenu, 
      sendEmail,
    };
  },
};
</script>
