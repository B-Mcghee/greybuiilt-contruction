<template>
  <!-- <div class="flex">
    <div class="my-2 overflow-x-auto">
      <table class="table-fixed">
        <thead class="bg-gray-50">
          <tr>
            <th>Name</th>
            <th>Email</th> 
            <th>Phone Number</th>
            <th>Call Time</th>
            <th>Contacted</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(contact, index) in contacts" :key="index">
            <td>{{ contact.first_name }} {{ contact.last_name }}</td>
            <td>{{ contact.email }}</td>
            <td>{{ contact.phone_number }}</td>
            <td>{{ contact.call_time | formatDate }}</td>
            <td :class="[{ 'bg-blue-50': status }, 'bg-gray']">
              {{ contact.contacted }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div> -->
  <div
    class="grid grid-cols-12 gap-y-4 w-10/12 mx-auto text-xl text-primary-dark"
  >
    <div class="col-span-12">
      <h1 class="text-5xl text-center">Contacts</h1>
    </div>
    <div
      v-for="(contact, index) in contacts"
      :key="index"
      class="col-span-12 grid gap-y-1 border"
    >
      <div
        class="col-span-12 text-center border-b bg-primary text-3xl text-White"
      >
        {{ contact.first_name }} {{ contact.last_name }}
      </div>
      <div class="col-span-6 px-2 text-center">
        {{ contact.email }}
      </div>
      <div class="col-span-6 px-2 text-center">
        {{ contact.phone_number }}
      </div>
      <div class="col-span-6 px-2 text-center">
        {{ contact.call_time | formatDate }}
      </div>
      <div class="col-span-6 px-2 text-center">
        {{ contact.contacted }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: true,
    };
  },
  computed: {
    contacts: function () {
      return this.$store.state.contacts.contacts.map((contact) => contact);
    },
    name: function () {
      return;
    },
  },
  filters: {
    formatDate: function (value) {
      if (value) {
        var date = new Date(value);
        var parsedDate = date.toDateString();
        return parsedDate;
      }
    },
  },
};
</script>

<style></style>
