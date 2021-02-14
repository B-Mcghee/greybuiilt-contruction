<template>
  <div>
    <div class="container  mx-auto">
      <div class="pt-5">
        <h3
          class="text-2xl py-4 sm:py-8 font-medium leading-6 text-center text-primary-dark"
        >
          Contact Information
        </h3>
        <form action="" class="px-4 lg:px-20 xl:max-w-3/4">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-White space-y-6 sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class=" col-span-6 sm:col-span-3">
                  <label
                    for="name"
                    class="block text-sm font-medium text-primary"
                  >
                    First Name</label
                  >
                  <input
                    type="text"
                    name="name"
                    required
                    class=" mt-1 bg-White-ghost focus:bg-White focus:ring-primary-lightest focus:ring-2 focus:outline-none border focus:border-primary-lightest block w-full shadow-sm sm:text-sm border-primary-light rounded-md lg:py-2 lg:text-lg"
                    placeholder="First Name"
                  />
                </div>

                <div class=" col-span-6 sm:col-span-3">
                  <label
                    for="name"
                    class="block text-sm font-medium text-primary"
                  >
                    Last Name</label
                  >
                  <input
                    type="text"
                    name="name"
                    required
                    class=" mt-1 bg-White-ghost focus:bg-White   focus:ring-primary-lightest focus:ring-2 focus:outline-none border focus:border-primary-lightest block w-full shadow-sm sm:text-sm border-primary-light rounded-md lg:py-2 lg:text-lg"
                    placeholder="Last Name"
                  />
                </div>
                <div class=" col-span-6 sm:col-span-4  lg:col-span-3">
                  <label
                    for="name"
                    class="block text-sm font-medium text-primary"
                    >Email</label
                  >

                  <input
                    type="text"
                    name="email"
                    id="email"
                    required
                    class=" mt-1 bg-White-ghost focus:bg-White focus:ring-primary-lightest focus:ring-2 focus:outline-none border focus:border-primary-lightest block w-full shadow-sm sm:text-sm border-primary-light rounded-md lg:py-2 lg:text-lg"
                    placeholder="Email"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                  <label
                    for="phoneNumber"
                    class="block text-sm font-medium text-primary"
                    >Phone Number</label
                  >
                  <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                    name="phoneNumber"
                    id="phoneNumber"
                    class=" mt-1 bg-White-ghost focus:bg-White  focus:ring-primary-lightest focus:ring-2 focus:outline-none border focus:border-primary-lightest block w-full shadow-sm sm:text-sm border-primary-light rounded-md lg:py-2 lg:text-lg"
                    placeholder="Phone Number"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    for="call"
                    class="block text-sm font-medium text-primary"
                    >Schedule Call</label
                  >
                  <input
                    type="datetime-local"
                    name="call"
                    required
                    id="call"
                    class=" mt-1 bg-White-ghost focus:bg-White  text-gray-500 focus:ring-primary-lightest focus:ring-2 focus:outline-none border focus:border-primary-lightest block w-full shadow-sm sm:text-sm border-primary-light rounded-md lg:py-2 lg:text-lg"
                    placeholder="Schedule call time"
                    v-model="appointment"
                  />
                </div>
                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    for="price-range"
                    class="block text-sm font-medium text-primary"
                    >Price Range</label
                  >
                  <select
                    name="price-range"
                    id="price-range"
                    class="mt-1 bg-White-ghost focus:bg-White block w-full py-0.5 px-3 border focus:ring-2 border-primary-light bg-white rounded-md shadow-sm focus:outline-none
              focus:ring-primary-lightest focus:border-primary sm:text-sm text-gray-500 lg:py-2 lg:text-lg"
                  >
                    <option>Select a Range</option>
                    <option
                      v-for="price in priceRange"
                      :key="price"
                      value="price"
                      >{{ price }}</option
                    >
                  </select>
                </div>
                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="price-range">Sq. Footage</label>
                  <select
                    name="sq-footage"
                    id="sq-footage"
                    class="mt-1 bg-White-ghost focus:bg-White block w-full py-0.5 px-3 border focus:ring-2 border-primary-light bg-white rounded-md shadow-sm focus:outline-none
              focus:ring-primary-lightest focus:border-primary sm:text-sm text-gray-500 lg:py-2 lg:text-lg"
                  >
                    <option
                      v-for="amount in sqFootage"
                      :key="amount"
                      value="price"
                      >{{ amount }}</option
                    >
                  </select>
                </div>
              </div>
            </div>
            <div class=" px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-light hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light"
              >
                Send
              </button>
            </div>
          </div>
        </form>
        <div>{{ appointment }}</div>
      </div>

      <!-- <div
        class=" h-60 w-full bg-clip-content"
        :style="{
          backgroundImage: `linear-gradient(21deg, rgba(91,71,51,0.5) 3%, rgba(157,121,88,0.5) 23%, rgba(218,204,190,0.5) 83%), url('/static/Images/kelsey_jessie.JPG')`
        }"
      > -->
      <!-- <h1>LETS GET CONNECTED!</h1>
      </div>
      <div class="form-container">
        <h2>Get In Touch</h2>
        <div>
          <div
            class="form-group grid grid-cols-1 justify-items-center pt-10 justify-center gap-y-3 text-xl"
          >
            <label for="">Name</label>
            <base-input type="text" />

            <label for="email">Email</label>
            <base-input type="email" name="email" id="" />

            <label for="number">Phone Number</label>
            <base-input type="number" />

            <label for="">Schedule Call</label>
            <base-input type="datetime-local"></base-input>

            <label
              id="price-range"
              class="block text-sm font-medium text-primary-dark-700"
              >Price Range</label
            >
            <div class="mt-1 relative">
              <button
                type="button"
                aria-haspopup="priceRange"
                aria-expanded="true"
                aria-labelledby="price-range"
                class="relative w-full bg-primary-lightest border border-primary-light rounded-md shadow-sm
              pl-3 pr-10 py-2 text-left cursor-default focus:s  outline-none focus:ring-1 focus:ring-primary
              focus:border-primary sm:text-sm"
              >
                <span class="flex items-center"> </span>
              </button>
            </div>
            <select
              name="price-range"
              id="price-range"
              class=" appearance-none"
            >
              <option v-for="price in priceRange" :key="price" value="price">{{
                price
              }}</option>
            </select>

            <label for="price-range">Sq. Footage</label>
            <select name="sq-footage" id="sq-footage">
              <option v-for="amount in sqFootage" :key="amount" value="price">{{
                amount
              }}</option>
            </select>

            <button type="submit" class="rounded bg-primary-light py-3 px-8">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      show: true,
      interests: ["Building a House", "Other"],
      appointment: "",
      contact: {
        FirstName: "",
        LastName: "",
        Email: "",
        PhoneNumber: "",
        Appointment: ""
      },
      timezone: "",
      priceRange: [
        "$200,000 - $300,000",
        "$300,000 - $400,000",
        "$400,000 - $500,000",
        "$500,000 - $600,000",
        "$600,000 +"
      ],
      sqFootage: [
        "1,000 - 1,250",
        "1,250 - 1,500",
        "1,500 - 1,800",
        "1,800 - 2,000",
        "2,000 - 2,500",
        "2,500 - 3,000",
        "3,000 - 4,000",
        "4,000 +"
      ]
    };
  },
  components: {},
  methods: {
    info() {
      this.show = !this.show;
    }
  },
  computed: {
    callTime: function() {
      console.log(this.appointment);
      return "";
    }
  }
};
</script>

<style scoped></style>
