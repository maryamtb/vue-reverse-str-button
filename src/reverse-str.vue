<template>
  <div id="app">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
  </div>
</template>

<script>

export default {
  name: "reverseString",
  props: {
    message: {
      type: String,
      default: "Reverse me!"
    }
  },
  methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  };
</script>

<style>

</style>
