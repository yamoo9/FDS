<template>
  <div id="app" class="container">
    <div class="columns is-mobile">
      <div class="column is-8 is-offset-2">

        <h1 class="title is-3">Vue JS Transition</h1>

        <button
          @click="addItem"
          type="button"
          class="add-button button is-info">
          Add Item to List
        </button>

        <button
          @click="shuffleItems"
          type="button"
          class="shuffle-button button is-primary">
          Shuffle Items
        </button>

        <transition-group :name="animation_type" class="list-animation" tag="ul">
          <li
            @click="removeItem(index)"
            class="box"
            v-for="(number, index) in numbers"
            :key="'item-'+number">
            {{number}}
          </li>
        </transition-group>

        <hr>

        <div class="field">
          <label class="label">Select Animation Type</label>
          <p class="control">
            <span class="select">
              <select v-model="animation_type">
                <option>Select Animation Type</option>
                <option value="fade">Fade</option>
                <option value="slide">Slide</option>
              </select>
            </span>
          </p>
        </div>

        <transition name="slide" :duration="450" appear mode="out-in">
          <component @changeShowNoti="changeMode" :is="component_selected"></component>
        </transition>

        <button
          type="button"
          class="button is-primary"
          @click="changeMode">{{show_noti_message}} Alert</button>

        <transition :name="animation_type" appear>
          <div class="notification is-warning" v-if="show_noti">
            <button class="delete" aria-label="delete notification" @click="show_noti = false"></button>
            Warning lorem ipsum dolor sit amet, consectetur
            adipiscing elit lorem ipsum dolor sit amet,
            consectetur adipiscing elit
          </div>
        </transition>

        <transition name="slide" appear>
          <div class="notification is-success" v-if="show_noti">
            <button class="delete" aria-label="delete notification" @click="show_noti = false"></button>
            Success lorem ipsum dolor sit amet, consectetur
            adipiscing elit lorem ipsum dolor sit amet,
            consectetur adipiscing elit
          </div>
        </transition>

        <transition
          appear
          enter-active-class="animated flipInX"
          leave-active-class="animated flipOutX"
          :duration="{enter: 150, leave: 450}">
          <div class="notification is-danger" v-if="show_noti">
            <button class="delete" aria-label="delete notification" @click="show_noti = false"></button>
            Danger lorem ipsum dolor sit amet, consectetur
            adipiscing elit lorem ipsum dolor sit amet,
            consectetur adipiscing elit
          </div>
        </transition>

      </div>
    </div>
  </div>
</template>

<script>
import Info from './components/Info.vue';
import Warning from './components/Warning.vue';
export default {
  name: 'app',
  components: {
    appInfo: Info,
    appWarning: Warning
  },
  data () {
    return {
      show_noti: false,
      animation_type: 'slide',
      component_selected: 'app-info',
      numbers: [1, 3, 5, 7, 9]
    }
  },
  methods: {
    changeMode() {
      this.show_noti = !this.show_noti;
      this.component_selected = this.component_selected === 'app-info' ? 'app-warning' : 'app-info';
    },
    shuffleItems() {
      this.numbers = _.shuffle(this.numbers);
    },
    addItem() {
      let l = this.numbers.length;
      let position = Math.floor(Math.random() * l);
      this.numbers.splice(position, 0, l + 1);
    },
    removeItem(index) {
      console.log(index);
      this.numbers.splice(index, 1);
    }
  },
  computed: {
    show_noti_message() {
      return this.show_noti ? 'Hide' : 'Show';
    }
  }
}
</script>

<style lang="sass">
#app
  padding-top: 40px
.notification
  margin-top: 20px
  &.is-danger
    // transform-origin: top right

.fade-enter,
.fade-leave-to
  opacity: 0
.fade-enter-active,
.fade-leave-active
  transition: opacity 1s ease

.slide-enter
  opacity: 0
.slide-enter-active
  animation: slide-in 1s ease forwards
  transition: opacity 1s
.slide-leave-active
  animation: slide-out 1s ease forwards
  transition: opacity 1s
  position: absolute
.slide-leave-to
  opacity: 0
.slide-move
  transition: transform 0.7s


.bounce-enter
  opacity: 0
.bounce-enter-active
  animation: bounce-in 0.45s ease forwards
  transition: opacity 0.45s ease
// .bounce-enter-to
// .bounce-leave
.bounce-leave-active
  animation: bounce-out 0.45s ease forwards
  transition: opacity 0.45s ease
.bounce-leave-to
  opacity: 0

@keyframes slide-in
  from
    transform: translateY(20px)
  to
    transform: translateY(0px)
@keyframes slide-out
  from
    transform: translateY(0px)
  to
    transform: translateY(20px)

@keyframes bounce-in
  0%
    transform: scale(0)
  50%
    transform: scale(1.2)
  100%
    transform: scale(1)
@keyframes bounce-out
  0%
    transform: scale(1)
  50%
    transform: scale(1.2)
  100%
    transform: scale(0)

.add-button
  margin-bottom: 20px

.list-animation
  position: relative
  & li
    cursor: pointer
    width: 100%
    &:hover
      background: #eee
</style>
