<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";

import MyTable from "./components/MyTable.vue";

export default {
  components: { HelloWorld, MyTable },
  methods: {
    showLoader() {
      window.app.loader.show();
      this.$refs.hello.count++;
      setTimeout(() => {
        window.app.loader.hide();
      }, 1000);
    },
    callLoaderFromComponent() {
      this.$refs.hello.count++;
      this.$refs.hello.showLoader();
    },
    updateCount() {
      // increase 'count' variable in HelloWorld component
      this.$refs.hello.count++;
    },
  },
};
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <HelloWorld ref="hello" msg="Custom Web Elements" />
  <br />

  <div>
    <button @click="showLoader">
      Call loader from root component using global declaration
    </button>
    <br />
    <button @click="callLoaderFromComponent">
      Call loader using component method from parent
    </button>
  </div>
  <br />

  <MyTable @updateCount="updateCount" />

  <div class="right">
    <button data-id="app" onclick="window.app.viewCode()">
      View code (I'm inside Vue root component)
    </button>
  </div>
</template>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.right {
  text-align: right;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app > button {
  background-color: #41b882;
  color: #fff;
  padding: 0.5em 1em;
  border: none;
  margin-bottom: 1em;
}
</style>
