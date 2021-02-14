<template>
  <input
    :type="type"
    class=" rounded-lg w-3/4 block py-1.5 pr-2 focus:ring-2 focus:ring-offset-primary-light bg-primary-lightest
      border-primary-dark border-2"
  />
</template>

<script>
export default {
  props: ["type"]
};
</script>

<style scoped>
input {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
}
</style>
