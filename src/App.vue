<template>
  <div id="app">
    <Navigation :navLinks="navLinks" />
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/layouts/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation
  },
  data: () => ({
    navLinks: [
      {
        text: "About",
        path: "/about",
        icon: "fas fa-user"
      },
      {
        text: "Projects",
        path: "/projects",
        icon: "fas fa-hammer"
      },
      {
        text: "Home",
        path: "/",
        icon: "fas fa-home"
      },
      {
        text: "Floor Plans",
        path: "/testimonials",
        icon: "fas fa-book-open"
      },

      {
        text: "Contact Us",
        path: "/contact",
        icon: "fas fa-id-card"
      }
    ]
  })
};
</script>

<style>
body {
  font-family: "Barlow Condensed";
}
</style>
