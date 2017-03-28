<template>
  <div class="notification is-warning">
    <button class="delete" aria-label="delete notification" @click="$emit('changeShowNoti')"></button>
    Warning lorem ipsum dolor sit amet, consectetur
    adipiscing elit lorem ipsum dolor sit amet,
    consectetur adipiscing elit
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>
