<template>
  <nav class="bg-primary w-full h-12 max-h-14 ">
    <figure
      class="image-logo z-10 absolute mt-2 lg:mt-0 ml-1 lg:top-2 lg:left-1 cursor-pointer lg:mr-10 "
      @click="toggleNav"
    >
      <img class="w-16" :src="'/static/Images/GB_Homes_Reverse.png'" alt="" />
    </figure>
    <ul
      class="bg-primary h-full flex flex-col-reverse  fixed 
      lg:flex-row lg:relative md:text-2xl lg:justify-end"
      ref="nav"
    >
      <li
        v-for="(link, index) in navLinks"
        :key="index"
        class="white flex w-full lg:w-40 lg:items-center lg:justify-center my-1 lg:relative cursor-pointer "
        ref="pill"
      >
        <router-link
          :style="{ color: [linkColor, '#FFF'] }"
          tag="div"
          :to="link.path"
          class="flex w-full justify-between lg:inline-block lg:flex-row-reverse lg:justify-center lg:items-center items-center"
          ><span
            @click="navToggle"
            class="mx-3 hover:bg-primary-light rounded-lg p-1"
            >{{ link.text }}</span
          ><i @click="navToggle" class="mr-2 lg:hidden" :class="link.icon"
        /></router-link>
      </li>
    </ul>
    <div
      class=" right-3 bottom-3 py-1 px-2 text-3xl rounded-xl fixed text-White cursor-pointer bg-primary "
      @click="toggleNav"
    >
      <i class="fas fa-bars"></i>
    </div>
  </nav>
</template>

<script>
export default {
  props: [
    "navLinks",
    "background",
    "hoverBackground",
    "imagePath",
    "linkColor"
  ],
  methods: {
    toggleNav() {
      const nav = this.$refs.nav.classList;
      nav.contains("active") ? nav.remove("active") : nav.add("active");
    },
    navToggle() {
      const nav = this.$refs.nav.classList;
      if (nav.contains("active")) {
        nav.remove("active");
      }
    },
    toggleBackground() {
      const pill = this.$refs.pill.classList;
      pill.contains("bg-primary")
        ? pill.remove("bg-primary")
        : pill.add("bg-primary");
    }
  }
};
</script>

<style>
@media screen and (max-width: 1024px) {
  ul {
    width: 240px;

    left: -200px;
    transition: 500ms ease all;
  }

  .active {
    left: 0px;
  }
}
@media screen and (max-width: 500px) {
  ul {
    width: 175px;

    left: -175px;
    transition: 500ms ease all;
  }

  .active {
    left: 0px;
  }
}
</style>
