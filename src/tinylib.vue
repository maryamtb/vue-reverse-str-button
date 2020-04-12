<template>
  <div id="app">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
  </div>
</template>

<script>

export default {
  name: "tinylib",
  data: function() {
    return {
      message: {
        type: String,
        default: "Hello!"
      }
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
