<template>
  <div class="xl:grid xl:grid-cols-2">
    <!-- <div>{{ $route.params.id }}</div> -->
    <div class=" text-center grid items-center cursor-pointer xl:col-span-1">
      <h1 class=" text-4xl md:text-6xl pt-4 xl:text-7xl text-primary-dark">
        {{ project.title }}
      </h1>
      <div
        class="grid align-middle px-6 pt-8 md:py-12 pb-4 justify-center max-h-144"
      >
        <div v-if="!show">
          <img
            :src="project.cover_image"
            alt=""
            class="max-h-120 md:h-136  rounded-sm shadow-2xl"
          />
        </div>
        <div v-else>
          <img
            :src="image"
            alt=""
            class="max-h-120  md:h-136  rounded-sm shadow-2xl"
          />
        </div>
      </div>
      <div class="flex flex-row justify-center space-x-5 pb-4 md:pb-8">
        <button
          @click="left"
          class="border-2 border-primary-lightest bg-primary text-White py-1.5 px-2.5 rounded-lg focus:outline-none md:text-2xl md:py-4 md:px-6"
        >
          prev</button
        ><button
          @click="right"
          class="border-2 border-primary-lightest bg-primary text-White py-1.5 px-2.5 md:text-2xl md:py-4 md:px-6 rounded-lg focus:outline-none"
        >
          right
        </button>
      </div>
      <div
        class=" flex flex-row flex-wrap md:h-20 lg:h-24 mx-auto w-5/6 justify-center space-x-1"
      >
        <img
          v-for="(image, index) in project.images"
          :key="index"
          @click="loadPic(index)"
          :src="image"
          class="h-14 mb-1 rounded-sm"
          alt=""
        />
      </div>
    </div>
    <div class="xl:self-center">
      <base-card>
        <div class="text-center  grid grid-col-2 xl:py-10 xl:px-10">
          <h1 class="col-span-2  md:text-3xl">
            {{ project.sq_footage }} sq.ft
          </h1>
          <h3 class="col-span-2 mt-3 px-6 md:text-xl">
            {{ project.description }}
          </h3>
        </div>
      </base-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      image: "",
      index: 0
    };
  },
  methods: {
    loadPic(index) {
      this.image = this.project.images[index];
      this.toggleShow();
      this.index = index;
      console.log(this.index);
    },
    left() {
      this.index--;
      if (this.index >= 0) {
        this.toggleShow();
        this.image = this.project.images[this.index];
      } else {
        this.index = 0;
      }
      console.log(this.index);
    },
    right() {
      this.index++;
      if (this.index < this.project.images.length) {
        this.toggleShow();
        this.image = this.project.images[this.index];
      } else {
        this.index = this.project.images.length - 1;
      }
      console.log(this.index);
    },
    toggleShow() {
      this.show = true;
    }
  },
  computed: {
    project: function() {
      return this.$store.state.projects.projects.filter(project => {
        if (project.id == this.$route.params.id) {
          return project;
        }
      })[0];
    },
    currentImage: function() {
      console.log(this.image);
      return this.image;
    }
  }
};
</script>

<style>
.right-enter-active {
  animation: rightInAnimation 0.4s ease-in-out;
}
.right-leave-active {
  animation: rightOutAnimation 0.4s ease-in-out;
}

@keyframes rightInAnimation {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes rightOutAnimation {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>
