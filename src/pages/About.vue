<template>
  <div>
    <div class="container min-h-screen mx-auto">
      <div>
        <h1 class="text-5xl w-full text-center mt-10">Meet The Team</h1>
      </div>
      <div
        class="grid grid-rows-4 mt-14 gap-y-8 lg:grid-cols-2 lg:grid-rows-2 lg:gap-y-28 gap-x-10 "
      >
        <div
          class="grid grid-rows-2 grid-cols-2 w-full md:col-span-5 lg:col-span-1 lg:grid-rows-2 lg:grid-cols-5  rounded-xl "
          v-for="(member, index) in team"
          :key="index"
        >
          <div
            class="flex items-center bg-Contrast-dark self-center justify-self-center h-28 w-28 md:h-40 md:w-40 rounded-full row-span-2 col-span-1 lg:h-56 lg:w-56 lg:rounded-xl lg:justify-self-start lg:row-span-2 lg:col-span-2 "
          >
            <img :src="'/static/Images/GB_Homes_Reverse.png'" />
          </div>
          <h1
            class=" text-3xl self-center  justify-self-start md:text-5xl row-span-1 md:-ml-10 lg:-ml-0 lg:text-7xl lg:col-span-3"
          >
            {{ member.name }}
          </h1>
          <h4
            class=" text-lg md:text-2xl self-center justify-self-start row-span-1 md:-ml-10 lg:-ml-0 lg:text-4xl lg:col-span-3"
          >
            {{ member.title }}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "Aaron Witt",
          title: "Founder/ Co-Owner"
        },
        {
          name: "Bilal Powell",
          title: "Co-Owner"
        },
        {
          name: "Kelsey Witt",
          title: '"New Home" Consultant / Designer'
        },
        {
          name: "Jessi Powell",
          title: '"New Home" Consultant / Designer'
        }
      ]
    };
  }
};
</script>

<style></style>
