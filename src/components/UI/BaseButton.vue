<template>
  <button
    class="bg-primary rounded-md text-White px-2 py-0.5 shadow-lg hover:bg-primary-dark outline-none ring-1 ring-Contrast-lightest focus:ring-2 focus:ring-primary-light"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["size", "color", "mode"],
};
</script>

<style></style>
