<template>
  <div id="app">
    <headers>

    </headers>
  </div>
</template>

<script>
import Headers from './components/Headers.vue';

export default {
  name: 'app',
  data() {
    return {
      msg: 'Hello Vue :-)'
    }
  },
  components: {
    Headers
  },
  computed: {
    memory() {
      return 10;
    }
  }
}
</script>

<style lang="sass" scoped>
  .container
    width: 800px
    margin:
      left: auto
      right: auto
</style>
