<template>
  <div>
    <div class="container mx-auto">
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
                <div class="col-span-6 sm:col-span-3">
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
                    class="mt-1 bg-White-ghost focus:bg-White focus:ring-primary-lightest focus:ring-2 focus:outline-none border focus:border-primary-lightest block w-full shadow-sm sm:text-sm border-primary-light rounded-md lg:py-2 lg:text-lg"
                    placeholder="First Name"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
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
                    class="mt-1 bg-White-ghost focus:bg-White focus:ring-primary-lightest focus:ring-2 focus:outline-none border focus:border-primary-lightest block w-full shadow-sm sm:text-sm border-primary-light rounded-md lg:py-2 lg:text-lg"
                    placeholder="Last Name"
                  />
                </div>
                <div class="col-span-6 sm:col-span-4 lg:col-span-3">
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
                    class="mt-1 bg-White-ghost focus:bg-White focus:ring-primary-lightest focus:ring-2 focus:outline-none border focus:border-primary-lightest block w-full shadow-sm sm:text-sm border-primary-light rounded-md lg:py-2 lg:text-lg"
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
                    class="mt-1 bg-White-ghost focus:bg-White focus:ring-primary-lightest focus:ring-2 focus:outline-none border focus:border-primary-lightest block w-full shadow-sm sm:text-sm border-primary-light rounded-md lg:py-2 lg:text-lg"
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
                    class="mt-1 bg-White-ghost focus:bg-White text-gray-500 focus:ring-primary-lightest focus:ring-2 focus:outline-none border focus:border-primary-lightest block w-full shadow-sm sm:text-sm border-primary-light rounded-md lg:py-2 lg:text-lg"
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
                    class="mt-1 bg-White-ghost focus:bg-White block w-full py-0.5 px-3 border focus:ring-2 border-primary-light bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-lightest focus:border-primary sm:text-sm text-gray-500 lg:py-2 lg:text-lg"
                  >
                    <option>Select a Range</option>
                    <option
                      v-for="price in priceRange"
                      :key="price"
                      value="price"
                    >
                      {{ price }}
                    </option>
                  </select>
                </div>
                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="price-range">Sq. Footage</label>
                  <select
                    name="sq-footage"
                    id="sq-footage"
                    class="mt-1 bg-White-ghost focus:bg-White block w-full py-0.5 px-3 border focus:ring-2 border-primary-light bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-lightest focus:border-primary sm:text-sm text-gray-500 lg:py-2 lg:text-lg"
                  >
                    <option
                      v-for="amount in sqFootage"
                      :key="amount"
                      value="price"
                    >
                      {{ amount }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-light hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      datetimeEmpty: new Date(),
      minDatetime: "2021-02-11T03:16",
      maxDatetime: "2021-02-11T09:16",
      show: true,
      interests: ["Building a House", "Other"],
      appointment: "",
      contact: {
        FirstName: "",
        LastName: "",
        Email: "",
        PhoneNumber: "",
        Appointment: "",
      },
      timezone: "",
      priceRange: [
        "$200,000 - $300,000",
        "$300,000 - $400,000",
        "$400,000 - $500,000",
        "$500,000 - $600,000",
        "$600,000 +",
      ],
      sqFootage: [
        "1,000 - 1,250",
        "1,250 - 1,500",
        "1,500 - 1,800",
        "1,800 - 2,000",
        "2,000 - 2,500",
        "2,500 - 3,000",
        "3,000 - 4,000",
        "4,000 +",
      ],
    };
  },
  components: {},
  methods: {
    info() {
      this.show = !this.show;
    },
  },
  computed: {
    callTime: function () {
      console.log(this.appointment);
      return "";
    },
  },
};
</script>

<style scoped></style>
