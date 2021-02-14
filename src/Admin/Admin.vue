<template>
  <div>
    <div><h1 class="text-4xl text-center py-10">ADMIN</h1></div>

    <div>
      <div class="grid grid-cols-12">
        <button
          @click="SeeAll"
          class="col-span-6 bg-primary border-primary border py-3"
        >
          See all projects
        </button>
        <button
          class="col-span-6 bg-primary-light border-primary border py-3"
          @click="AddNewProject"
        >
          Add New Project
        </button>
      </div>

      <div
        v-if="showAll"
        class="grid grid-cols-12 gap-4 mx-4 items-center justify-items-center"
      >
        <h1 class="col-span-full py-4 text-2xl">All Projects</h1>
        <div
          class="col-span-6"
          v-for="project in allProjects"
          :key="project.id"
        >
          <img :src="project.cover_image" alt="" class="h-28" />
          <div class="grid grid-cols-12 mt-1.5 gap-x-2" aria-hidden="true">
            <button
              class="bg-red-500 px-1 rounded text-White col-span-6"
              @click="remove(project)"
            >
              Delete
            </button>
            <button
              class="bg-green-500 px-1 rounded text-White col-span-6"
              @click="edit(project)"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <div v-else>
        <div v-if="AddProject">
          <AddProjectItem @SeeAll="SeeAll"></AddProjectItem>
        </div>
        <div v-else-if="EditProject">
          <edit-project-item
            :projectEdit="project"
            @SeeAll="SeeAll"
          ></edit-project-item>
        </div>
      </div>
      <!-- 
      <div>
        <button
          class="mt-10 bg-gray-300 px-4 rounded-xl"
          @click="AddProject = !AddProject"
        >
          Add Project
        </button>
        <div v-if="AddProject">
          <AddProjectItem></AddProjectItem>
        </div>
      </div>
      <div v-if="EditProject">
        <edit-project-item></edit-project-item>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ModalDelete from "../components/UI/ModalDelete.vue";
import AddProjectItem from "../components/AddProjectItem";
import EditProjectItem from "../components/EditProjectItem";
export default {
  components: { ModalDelete, AddProjectItem, EditProjectItem },
  data() {
    return {
      showAll: true,
      AddProject: false,
      EditProject: false,
      project: null,
    };
  },
  methods: {
    ...mapActions(["addProject", "deleteProject", "updateProject"]),
    toggleMenu($event) {
      console.log($event);
    },
    remove(project) {
      console.log(project);

      // this.$modal.show("my-first-modal");
      // const response = confirm(
      //   `Are you sure you would like to delete the ${project.title} project`
      // );
      // if (response) {
      //   this.deleteProject(project.id);
      // } else {
      //   alert(`${project.title} not deleted`);
      // }
    },
    edit(project) {
      this.showAll = false;
      this.AddProject = false;
      this.EditProject = true;
      this.project = project;
    },
    AddNewProject() {
      this.showAll = false;
      this.AddProject = true;
    },
    SeeAll() {
      this.AddProject = false;
      this.showAll = true;
    },
  },
  computed: {
    ...mapGetters(["allProjects"]),
  },
};
</script>

<style></style>
