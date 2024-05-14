<script>
import { ref } from 'vue'
export default {

  props:{
    color: String,
    rank: String
  
  },
  setup(){
    let highlighted = ref(false)
  
  const toggleHighlight = () => {
    console.log('Toggling highlight')
    highlighted.value = !highlighted.value
    console.log('new value:', highlighted.value)
  }
  return {highlighted, toggleHighlight}

  }

}

</script>

<template>
  <div @click="toggleHighlight" :class="['square', color === 'white' ? 'white': 'black']">
    <div class="highlight" v-if="highlighted === true"></div>
    {{ rank }}
  </div>
</template>

<style scoped>
.square {
  position: relative;
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
  position: absolute;
  background-color: palevioletred;
  width: 100%;
  height: 100%;
  opacity: 0.5;
}
</style>
