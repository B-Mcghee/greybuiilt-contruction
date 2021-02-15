<template>
  <div class="relative">
    <h1
      class="text-3xl text-center py-1 sticky inset-0 bg-White-ghost text-primary-dark"
    >
      Add New Project
    </h1>
    <div class="py-2 mb-8">
      <form action="" class="px-6 lg:px-20 sm:w-10/12 mx-auto">
        <div class="shadow-xl sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-White-powder space-y-6 sm:p-6">
            <div class="grid grid-cols-6 gap-6 sm:w-9/12 sm:mx-auto">
              <div class="col-span-6">
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
              <div class="col-span-6">
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
                  v-model="project.sqFootage"
                />
              </div>
              <div class="col-span-6">
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

              <div class="grid grid-cols-12 space-x-2 col-span-6 text-White">
                <button
                  class="bg-primary rounded-md col-span-4 py-0.5"
                  @click="$refs.coverImage.click()"
                >
                  Cover Image
                </button>
                <button
                  class="bg-primary rounded-md col-span-4"
                  @click="$refs.fileInput.click()"
                >
                  Project Images
                </button>
                <button
                  class="bg-primary rounded-md col-span-4"
                  @click="onUpload"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
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
  components: {},
  data() {
    return {
      title: "",
      image: "",
      project: {
        title: "",
        sqFootage: "",
        description: "",
        cover_image: null,
        images: [],
        showProject: false,
      },
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
      this.$store.dispatch("addProject", this.project);
      this.$emit("SeeAll");
    },
  },
};
</script>

<style></style>
