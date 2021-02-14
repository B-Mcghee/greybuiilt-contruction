<template>
  <div class="flex">
    <div class=" my-2 overflow-x-auto ">
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
            <td>{{ contact.call_time }}</td>
            <td :class="[{ 'bg-blue-50': status }, 'bg-gray']">
              {{ contact.contacted }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: true
    };
  },
  computed: {
    contacts: function() {
      return this.$store.state.contacts.contacts.map(contact => contact);
    }
  }
};
</script>

<style></style>
