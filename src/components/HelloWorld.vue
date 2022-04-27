<script>
export default {
  props: ["msg"],
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    showLoader() {
      const loader = document.querySelector("oa-loader");
      loader.show();
      this.count++;
      setTimeout(() => {
        loader.hide();
      }, 2000);
    },

    showGlobalLoader() {
      window.app.loader.show();
      this.count++;
      setTimeout(() => {
        window.app.loader.hide();
      }, 2000);
    },
  },
};
</script>

<template>
  <section class="component">
    <h1>{{ msg }}</h1>

    <h2>Times the loader is called from Vue: {{ count }}</h2>
    <br />
    <button @click="showLoader">Call loader from component function</button>
    <br />
    <button @click="showGlobalLoader">
      Call loader from component using global declaration
    </button>
    <div class="right">
      <button data-id="component" onclick="window.app.viewCode()">
        View code (I'm inside Vue component)
      </button>
    </div>
  </section>
</template>

<style scoped>
.component {
  background-color: #ccc;
}

button {
  background-color: #4481ad;
  color: #fff;
  padding: 0.5em 1em;
  border: none;
  margin-bottom: 1em;
}
</style>
