<template>
  <div
    class="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 divide-Contrast-dark divide-opacity-20 xl:container
          mx-auto mb-16"
  >
    <router-link
      :to="{ name: 'SingleProject', params: { id: project.id } }"
      v-for="project in projects"
      :key="project.id"
    >
      <div
        class=" bg-opacity-50 hover:opacity-75 h-52 md:h-64 lg:h-72  text-center grid items-center border-primary-light border-2 bg-cover cursor-pointer"
        :style="{
          backgroundImage: `linear-gradient(21deg, rgba(91,71,51,0.5) 3%, rgba(157,121,88,0.5) 23%, rgba(218,204,190,0.5) 83%), url(${project.cover_image} )`
        }"
      >
        <h1
          class="text-4xl md:text-5xl lg:text-6xl font-medium text-primary-lightest"
        >
          {{ project.title }}
        </h1>
      </div>
    </router-link>
  </div>
</template>

<script>
import ProjectListItem from "./ProjectListItem.vue";
export default {
  components: { ProjectListItem },
  data() {
    return {
      length: 8
    };
  },
  computed: {
    projects: function() {
      return this.$store.state.projects.projects;
    }
  }
};
</script>

<style></style>
