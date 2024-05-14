<script setup>
import { ref } from 'vue'
defineProps({
  color: String,
  rank: String
})
let highlighted = ref(false)

const toggleHighlight = () => {
  console.log('Toggling highlight')
  highlighted.value = !highlighted.value
  console.log('new value:', highlighted.value)
}
</script>

<template>
  <div @click="toggleHighlight" class="square white" v-if="color === 'white'">
    <div class="highlight" v-if="highlighted.value === true"></div>
    {{ rank }}
  </div>
  <div @click="toggleHighlight" class="square black" v-else>
    <div class="highlight" v-if="highlighted.value === true"></div>
    {{ rank }}
  </div>
  <div class="highlight" v-if="highlighted.value === true"></div>
</template>

<style scoped>
.square {
  aspect-ratio: 1;
  flex: 1;
  height: 100%;
}

.black {
  background-color: brown;
}

.white {
  background-color: burlywood;
}
.highlight {
  background-color: pink;
  width: 100%;
  height: 100%;
  opacity: 0.5;
}
</style>
