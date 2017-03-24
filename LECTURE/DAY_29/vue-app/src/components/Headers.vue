<template>
  <div class="container">
    <slot name="container-headline">
      <h2>
        <a
          class="app-link"
          href @click.prevent="callCompAction">{{ msg }}</a>
      </h2>
    </slot>
    <slot>
      <main>
        <h4>main content</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque sunt magnam esse assumenda doloribus nobis in incidunt, optio expedita placeat!</p>
        <p>Reiciendis numquam iure assumenda, sint praesentium quis ab rem dignissimos. Vel ad sequi accusamus odio, repellendus sint, natus veniam fugiat!</p>
        <p>Porro repellendus modi asperiores veritatis qui cumque earum, officiis ducimus blanditiis, dolores commodi repellat tempora, aspernatur saepe officia repudiandae ipsum!</p>
        <p>Repudiandae illum sunt eveniet repellendus aliquam ullam commodi, et odit. Sapiente veniam officiis non ipsa sint alias, nostrum eligendi illo.</p>
        <p>Quod, dolorum omnis dolore tempora aliquam at quisquam nulla voluptatum placeat aliquid quis, soluta ea repellat? Atque autem, doloremque amet.</p>
        <p>Veritatis perspiciatis maiores culpa fuga, nobis aliquam natus tempore, neque ut amet, velit excepturi, eos officiis. Sapiente quaerat, nisi aliquam!</p>
        <p>Nesciunt corporis nisi perferendis unde, quia eius quaerat ipsam molestias quas dignissimos rem expedita aliquid qui voluptatibus maiores, facilis mollitia.</p>
        <p>Neque, doloremque sed temporibus! Quaerat consectetur provident, culpa aliquam. Maxime, tempore! Deleniti suscipit id eaque minus possimus magnam officiis facere.</p>
      </main>
    </slot>
    <slot name="container-below">
      <p style="color: tan">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste voluptatibus non facilis quis hic sit, officiis blanditiis, rem debitis officia.</p>
    </slot>
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
