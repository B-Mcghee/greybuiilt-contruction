<template>
  <modal ref="popup">
    <h1 class="text-2xl text-center px-1">
      {{ title }}
    </h1>
    <h3 class="text-md">{{ message }}</h3>
    <div class="grid grid-cols-2 gap-x-3">
      <base-button @click.native="cancel">{{ cancelButton }}</base-button>
      <base-button @click.native="confirm">{{ confirmButton }}</base-button>
    </div>
  </modal>
</template>

<script>
export default {
  name: "ConfirmModal",
  data: () => ({
    title: undefined,
    message: undefined,
    cancelButton: "Go Back",
    confirmButton: undefined,
    resolvePromise: undefined,
    rejectPromise: undefined,
  }),
  methods: {
    show(values = {}) {
      this.title = values.title;
      this.message = values.message;
      this.confirmButton = values.confirmButton;
      if (values.cancelButton) {
        this.cancelButton = values.cancelButton;
      }

      this.$refs.popup.open();

      return new Promise((resolve, reject) => {
        this.resolvePromise = resolve;
        this.rejectPromise = reject;
      });
    },
    confirm() {
      this.$refs.popup.close();
      this.resolvePromise(true);
    },
    cancel() {
      this.$refs.popup.close();
      this.resolvePromise(false);
    },
  },
};
</script>

<style></style>
