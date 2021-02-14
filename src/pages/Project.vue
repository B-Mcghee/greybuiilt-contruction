<template>
  <div>
    <div>
      <div>
        <h1
          class="text-6xl xl:text-7xl text-primary-dark text-center py-8 lg:pb-14 "
        >
          Projects
        </h1>
      </div>

      <project-list></project-list>
    </div>
  </div>
</template>

<script>
import ProjectList from "../components/ProjectList.vue";
export default {
  components: { ProjectList },

  computed: {
    columns: function() {
      const r = this.columns % 3;
      console.log(r);
    }
  }
};
</script>

<style></style>
