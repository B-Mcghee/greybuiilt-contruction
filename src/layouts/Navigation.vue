<template>
  <nav
    class="bg-primary min-w-full h-12 lg:h-14 xl:justify-end xl:flex fixed top-0 left-0 right-0 z-10 "
  >
    <figure
      class=" left-1 top-2 absolute mr-2 z-20 cursor-pointer xl:left-1"
      @click="toggleNav"
    >
      <img class=" w-16" :src="'/static/Images/GB_Homes_Reverse.png'" alt="" />
    </figure>
    <ul
      class="bg-primary flex items-center fixed flex-col-reverse w-44 -left-44 xl:left-0  h-full justify-start
      xl:flex xl:relative xl:justify-end xl:flex-row xl:w-1/2 "
      ref="nav"
    >
      <li
        v-for="(link, index) in navLinks"
        :key="index"
        class=" justify-end w-full mb-2.5 xl:mb-0"
        ref="pill"
      >
        <router-link
          :style="{ color: [linkColor, '#FFF'] }"
          :to="link.path"
          role="a"
          ><a
            class="flex flex-row justify-between mb-1.5 mr-1 text-xl xl:flex-row-reverse xl:justify-center xl:items-center xl:text-4xl"
            ><span @click="navToggle" class="pl-2">{{ link.text }}</span
            ><i
              @click="navToggle"
              class=" text-xl xl:hidden"
              :class="link.icon"/></a
        ></router-link>
      </li>
    </ul>
    <div
      class="toggle right-5 bottom-5 py-1 xl:hidden px-2 text-3xl rounded-xl fixed text-White cursor-pointer bg-primary"
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
      console.log("active");
    },
    navToggle() {
      const nav = this.$refs.nav.classList;

      nav.remove("active");
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
    /* width: 250px;

    left: -200px; */
    transition: 400ms ease all;
  }
  .active {
    left: 0px;
  }
  i {
    font-size: 3em;
  }
}
@media screen and (max-width: 500px) {
  ul {
    /* width: 175px;

    left: -175px; */
    transition: 400ms ease-in;
  }

  .active {
    left: 0px;
  }
}
i {
  font-size: 1em;
}
</style>
