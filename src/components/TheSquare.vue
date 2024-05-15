<script>
import { ref, inject } from "vue";

export default {
  props: {
    color: String,
    coordinate: String,
  },
  setup(props) {
    const store = inject("store");
    let highlighted = ref(false);

    const toggleHighlight = () => {
      console.log("Toggling highlight");
      highlighted.value = !highlighted.value;
      console.log("new value:", highlighted.value);
      if (highlighted.value) {
        store.addHighlight(props.coordinate);
      } else {
        store.removeHighlight(props.coordinate);
      }
    };
    return { highlighted, toggleHighlight };
  },
};
</script>

<template>
  <div
    @click="toggleHighlight"
    :class="['square', color === 'white' ? 'white' : 'black']"
  >
    <div class="highlight" v-if="highlighted === true"></div>
    <span v-if="coordinate[0] === 'a'">{{ coordinate[1] }}</span>
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
