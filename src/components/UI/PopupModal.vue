<template>
  <transition name="popup">
    <div
      class="popup bg-gray-900 bg-opacity-90 h-screen absolute grid w-full inset-0 items-center justify-items-center z-30"
      v-if="isVisible"
    >
      <div
        class="bg-White h-40 xl:w-96 xl:h-72 max-w-md grid shadow-inner self-center items-center justify-items-center rounded ring-4 ring-primary ring-opacity-40"
      >
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "PopupModal",
  data: () => ({
    isVisible: false,
  }),
  methods: {
    open() {
      this.isVisible = true;
    },
    close() {
      this.isVisible = false;
    },
  },
};
</script>

<style>
.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.3s;
}
.popup-enter,
.popup-leave-to {
  opacity: 0;
}
</style>
