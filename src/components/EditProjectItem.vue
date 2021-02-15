<template>
  <div>
    <h1
      class="text-3xl text-center py-1 sticky inset-0 bg-White-ghost text-primary-dark"
    >
      Edit Project
    </h1>
    <div class="py-2 mb-8">
      <form action="" class="px-6 lg:px-20 xl:max-w-3/4">
        <div class="shadow-xl sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-White-powder space-y-6 sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="title"
                  class="block text-sm font-medium text-primary"
                >
                  Title</label
                >
                <input
                  type="text"
                  id="title"
                  class="mt-1 bg-White-ghost focus:bg-White focus:ring-primary-lightest focus:ring-2 focus:outline-none border focus:border-primary-lightest block w-full shadow-sm sm:text-sm border-primary-light rounded-md lg:py-2 lg:text-lg"
                  placeholder="Title"
                  v-model="project.title"
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="sq-footage"
                  class="block text-sm font-medium text-primary"
                >
                  Sq. Footage</label
                >
                <input
                  type="text"
                  id="sq-footage"
                  class="mt-1 bg-White-ghost focus:bg-White focus:ring-primary-lightest focus:ring-2 focus:outline-none border focus:border-primary-lightest block w-full shadow-sm sm:text-sm border-primary-light rounded-md lg:py-2 lg:text-lg"
                  placeholder="Square Footage"
                  v-model="project.sq_footage"
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="description"
                  class="block text-sm font-medium text-primary"
                >
                  Description</label
                >
                <textarea
                  type="textarea"
                  id="description"
                  class="mt-1 bg-White-ghost focus:bg-White focus:ring-primary-lightest focus:ring-2 focus:outline-none border focus:border-primary-lightest block w-full shadow-sm sm:text-sm border-primary-light rounded-md lg:py-2 lg:text-lg"
                  placeholder="Enter Description"
                  v-model="project.description"
                ></textarea>
              </div>
              <div class="col-span-6 sm:col-span-4 lg:col-span-3">
                <label
                  for="image"
                  class="block text-sm font-medium text-primary"
                  >Images</label
                >
                <div class="flex space-x-1.5 pt-2">
                  <div v-for="(image, index) in project.images" :key="index">
                    <img :src="image" alt="" class="h-10" />
                  </div>
                </div>
              </div>
              <div class="col-span-6 sm:col-span-4 lg:col-span-3">
                <label
                  for="coverImage"
                  class="block text-sm font-medium text-primary"
                  >Cover Image</label
                >
                <div class="flex space-x-1.5 pt-2">
                  <img :src="project.cover_image" alt="" class="h-10" />
                </div>
              </div>

              <div>
                <input
                  type="file"
                  @change="onFileSelected"
                  id="image"
                  style="display: none"
                  class="mt-1 bg-White-ghost block w-full shadow-sm sm:text-sm border-primary-light rounded-md lg:py-2 lg:text-lg"
                  ref="fileInput"
                />
              </div>
              <div>
                <input
                  type="file"
                  @change="coverImage"
                  id="image"
                  style="display: none"
                  class="mt-1 bg-White-ghost block w-full shadow-sm sm:text-sm border-primary-light rounded-md lg:py-2 lg:text-lg"
                  ref="coverImage"
                />
              </div>
              <div class="flex space-x-4 col-span-6">
                <base-button
                  class="bg-primary px-4 py2 rounded-md"
                  @click="$refs.coverImage.click()"
                >
                  Cover Image
                </base-button>
                <base-button
                  class="bg-primary px-4 py2 rounded-md"
                  @click="$refs.fileInput.click()"
                >
                  Project Images
                </base-button>
                <base-button
                  class="bg-primary px-4 py2 rounded-md"
                  @click="onUpload"
                >
                  Save
                </base-button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <!-- <div v-if="project.showProject">
        <h1>{{ project.title }}</h1>
        <h5>{{ project.sqFootage }}</h5>
        <p>{{ project.description }}</p>
        <img class="h-10" :src="project.cover_image" alt="" />
        <div v-for="(image, index) in project.images" :key="index">
          <img :src="image" alt="" class="h-10" />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["projectEdit"],
  components: {},
  data() {
    return {
      title: "",
      image: "",
      project: this.projectEdit,
    };
  },
  methods: {
    onFileSelected($event) {
      const files = $event.target.files;
      let fileName = $event.target.files[0].name;
      if (fileName.lastIndexOf(".") <= 0) {
        return alert("Please add a valid file");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.project.images.push(fileReader.result);
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    },
    coverImage($event) {
      const files = $event.target.files;
      let fileName = $event.target.files[0].name;
      if (fileName.lastIndexOf(".") <= 0) {
        return alert("Please add a valid file");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.project.cover_image = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    },
    onUpload() {
      this.project.showProject = true;
      this.$store.dispatch("updateProject", this.project);
      this.project = {
        title: "",
        sqFootage: "",
        description: "",
        cover_image: null,
        images: [],
        showProject: false,
      };
      this.$emit("SeeAll");
    },
    remove(index) {
      this.project.images.splice(index, 1);
    },
  },
};
</script>

<style></style>
