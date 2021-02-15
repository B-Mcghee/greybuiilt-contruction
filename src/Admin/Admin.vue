<template>
  <div>
    <div>
      <h1
        class="text-4xl text-center py-4 xl:text-7xl xl:mb-10 text-primary-dark"
      >
        Admin Dashboard
      </h1>
    </div>

    <div class="mt-2 xl:container mx-auto">
      <div class="grid grid-cols-12 text-primary-dark text-xl md:text-4xl">
        <button
          @click="SeeAll()"
          class="col-span-4 bg-primary-lightest border-primary-dark border py-3 outline-none focus:outline-none focus:text-White-ghost focus:bg-primary"
          ref="seeAll"
        >
          See all projects
        </button>
        <button
          class="col-span-4 bg-primary-lightest border-primary-dark border py-3 focus:outline-none focus:text-White-ghost focus:bg-primary"
          @click="AddNewProject()"
          ref="addNew"
        >
          Add New Project
        </button>
        <button
          class="col-span-4 bg-primary-lightest border-primary-dark border py-3 focus:outline-none focus:text-White-ghost focus:bg-primary"
          @click="Contact()"
          ref="contacts"
        >
          See Contacts
        </button>
      </div>

      <div class="h-136 md:h-max lg:h-full md:w-full mt-4 overflow-y-auto">
        <div
          v-if="showAll"
          class="grid grid-cols-12 mx-4 items-center justify-items-center h-120 md:h-3/4 md:w-full md:mb-10 gap-y-3 overflow-y-auto"
        >
          <div
            class="col-span-12 text-2xl inset-0 sticky text-center bg-White-ghost w-full z-10"
          >
            <h1 class="bg-White-ghost -mt-1 pb-2 lg:text-5xl text-primary-dark">
              All Projects
            </h1>
          </div>

          <div
            class="col-span-12 grid grid-cols-12 shadow-md py-1 xl:col-span-6"
            v-for="(project, index) in allProjects"
            :key="project.id"
          >
            <img
              :src="project.cover_image"
              alt=""
              class="h-28 md:h-44 col-span-5"
            />
            <div class="col-span-4 grid grid-rows-4 text-primary-dark">
              <h3 class="row-span-2 text-2xl text-center self-center">
                {{ project.title }}
              </h3>
              <h3 class="row-span-2 text-lg text-center">
                {{ project.sq_footage }} sq.ft.
              </h3>
            </div>
            <div
              class="grid col-span-3 grid-rows-4 p-3 md:p-5 gap-y-2 text-xl md:text-3xl"
              aria-hidden="true"
            >
              <button
                class="bg-primary rounded text-White row-span-2"
                @click="remove(project, index)"
              >
                <i class="far fa-trash-alt"></i>
              </button>
              <confirm-modal ref="confirmModal"></confirm-modal>
              <base-button
                class="bg-primary rounded text-White row-span-2"
                @click.native="edit(project)"
              >
                <i class="fas fa-edit"></i>
              </base-button>
            </div>
          </div>
        </div>
        <div v-else-if="AddProject || EditProject" class="relative">
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
        <div v-else>
          <contact-table></contact-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddProjectItem from "../components/AddProjectItem";
import EditProjectItem from "../components/EditProjectItem";
import ContactTable from "../components/ContactTable.vue";
import ConfirmModal from "../components/UI/ConfirmModal.vue";

export default {
  components: {
    AddProjectItem,
    EditProjectItem,
    ContactTable,
    ConfirmModal,
  },
  data() {
    return {
      showAll: true,
      AddProject: false,
      EditProject: false,

      project: null,
      confirmDelete: false,
    };
  },
  methods: {
    ...mapActions(["addProject", "deleteProject", "updateProject"]),
    toggleMenu($event) {
      console.log($event);
    },
    async remove(project, index) {
      const ok = await this.$refs.confirmModal[index].show({
        title: "Are you sure you want to remove?",
        message: project.title,
        cancelButton: "Cancel",
        confirmButton: "Remove",
      });
      if (ok) {
        this.deleteProject(project.id);
      }
    },
    edit(project) {
      this.showAll = false;
      this.AddProject = false;
      this.EditProject = true;
      this.Contacts = false;
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
    Contact() {
      this.showAll = false;
      this.AddProject = false;
      this.EditProject = false;
    },
  },
  computed: {
    ...mapGetters(["allProjects"]),
  },
};
</script>

<style></style>
