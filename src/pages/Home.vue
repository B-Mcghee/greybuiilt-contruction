<template>
  <div
    class="home-image text-Contrast-dark container mb-10 mx-auto text-center"
  >
    <div>
      <h1 class="title line-title text-7xl text-Contrast-dark">
        Greybuilt Homes
      </h1>
    </div>
    <div class=" -mb-10 lg:-mb-60">
      <img
        svg-inline
        class="image lg:max-h-max "
        :src="'/static/Images/Blueprinthouse.svg'"
        alt=""
      />
    </div>
    <hr class="border-1 border-Contrast-dark w-5/6 mx-auto mb-10" />
    <div class="md:mx-10">
      <p class=" text-base text-l md:text-3xl mt0 mb-8 px-8 mx-4">
        We're so sorry, at the moment our website is also under construction.
        Enter your email and we will let you know when to come back and visit
        us!
      </p>
      <div
        class="flex flex-row flex-nowrap md:min-w-full items-center justify-center"
      >
        <form
          @submit="checkForm"
          method="post"
          class=" flex flex-row w-full justify-center"
        >
          <div
            class="bg-green-50 rounded successful-subscribe"
            v-if="success.length"
          >
            <h3 class="text-xl" v-for="(item, index) in errors" :key="index">
              {{ item }}
            </h3>
          </div>

          <div v-else-if="errors > 0">
            <h3
              class="bg-red-50 text-xl"
              v-for="(item, index) in error"
              :key="index"
            >
              {{ item }}
            </h3>
          </div>
          <div class="flex flex-row w-3/4 justify-center">
            <input
              class="border border-transparent  rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-Contrast-dark focus:border-transparent py-2 px-4 w-3/5"
              type="email"
              placeholder="Enter Email"
              v-model="email"
              name="email"
            />
            <!-- <input type="hidden" name="_token" :value="csrf" /> -->
            <button class="rounded-sm bg-primary text-White py-2 px-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      success: [],
      error: []
    };
  },
  methods: {
    checkForm: function(e) {
      this.success = [];
      if (this.email) {
        this.$store.dispatch("subscribeContact", this.email);
      }
      this.error = [];

      if (!this.email) {
        this.error.push("An email is required");
        let self = this.setTimeout(function() {
          console.log("it needs to update");
        }, 1000);
      }
      e.preventDefault();
      this.email = null;
    },
    clearError() {
      this.error = [];
    }
  },
  computed: {
    errors: function() {
      return this.error.length;
    }
  }
};
</script>

<style></style>
