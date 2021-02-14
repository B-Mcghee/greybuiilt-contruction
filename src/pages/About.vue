<template>
  <div>
    <div class="lg:container  mx-auto text-primary-darkest">
      <div class="lg:mt-4">
        <h1 class="text-5xl w-full text-center xl:text-7xl xl:mb-10">
          Meet Our Team
        </h1>
      </div>

      <div class="grid grid-cols-2 pt-4 mb-10 ">
        <base-card
          class="grid grid-rows-5 col-span-2 md:col-span-1  shadow-xl h-80 bg-White my-3 mx-4 rounded-xl lg:grid-cols-2 "
          v-for="(member, index) in team"
          :key="index"
        >
          <div
            class="flex items-center row-span-3 bg-primary-darkest self-center justify-self-center h-40 w-40 lg:h-52 lg:w-52 lg:mt-4 rounded-full lg:row-span-5"
          >
            <img :src="'/static/Images/GB_Homes_Reverse.png'" />
          </div>
          <h1
            class=" text-3xl lg:text-5xl text-center pt-2 h-10 lg:col-start-2 lg:row-start-3"
          >
            {{ member.name }}
          </h1>
          <h4
            class="text-xl lg:text-3xl text-center text-primary content-start lg:col-start-2 lg:row-start-4 lg:pr-3"
          >
            {{ member.title }}
          </h4>
        </base-card>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from "../components/UI/BaseCard.vue";
export default {
  components: { BaseCard },
  computed: {
    team: function() {
      return this.$store.state.bios.bios.map(bio => bio);
    }
  }
};
</script>

<style></style>
