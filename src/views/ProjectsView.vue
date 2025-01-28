<template>
  <div class="min-h-screen bg-slate-900 py-12">
    <div class="container mx-auto px-6 grid gap-6">
      <h1 class="text-4xl font-bold text-white mb-8 text-center mb-8">
        Projects
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="listitem">
        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-white rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-48 object-cover"
          />
          <a
            :href="project.link"
            target="_blank"
            class="text-blue-500 hover:no-underline"
          >
            <div class="p-4">
              <h2 class="text-xl font-bold text-gray-800 mb-2">
                {{ project.title }}
              </h2>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              View Project
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsPage",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "DevJobs",
          description:
            "A web application showcasing job opportunities with a user-friendly interface. The application features Dark and Light modes that provide users with a customizable visual preference.",
          image: "src/assets/devjobs.png",
          link: "https://devjobs-o6nzcl5cp-perfect-patience.vercel.app",
        },
        {
          id: 2,
          title: "Portfolio Website",
          description:
            "A personal portfolio built with Vue.js and TailwindCSS.",
          image: "src/assets/portfolio.png",
          link: "https://perfect-patience.github.io/Portfolio-project/",
        },
        {
          id: 3,
          title: "Cloudinary Image Uploader",
          description:
            "A local Ghanaian restuarant application built with HTML, CSS and JavaScript ",
          image: "src/assets/sankofa eats.png",
          link: "https://perfect-patience.github.io/Sankofa_Eats/",
        },
        {
          id: 4,
          title: "SofaHouse",
          description: "A figma design of a furniture E-commerce application",
          image: "src/assets/sofaHouse.png",
          link: "https://www.figma.com/design/ALbfVDlSpm8sqtk6j5gNQU/SofaHouse?node-id=0-1&t=EZXl6AZkCQeTWIXU-1",
        },
        {
          id: 5,
          title: "Qr-Code Component",
          description: "A beginner friendly project from Frontend Mentor",
          image: "src/assets/qr-code.png",
          link: "https://perfect-patience.github.io/frontend-mentor-challenges/qr-code-component",
        },
        {
          id: 6,
          title: "Blog Card Preview",
          description: "A beginner friendly project from Frontend Mentor",
          image: "src/assets/card.png",
          link: "https://perfect-patience.github.io/frontend-mentor-challenges/blog-preview-card",
        },
      ],
    };
  },
};
</script>
