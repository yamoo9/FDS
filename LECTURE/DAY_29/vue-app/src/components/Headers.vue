<template>
  <div class="container">
    <h2><a class="app-link" href @click.prevent="callCompAction">{{ msg }}</a></h2>
  </div>
</template>

<script>
  export default {
    data() {
      return  {
        msg: 'wow vue file'
      }
    },
    methods: {
      callCompAction() {
        window.alert(this.msg);
      }
    }
  }
</script>

<style lang="sass" scoped>
  .app-link
    text-decoration: none
    color: purple
</style>
