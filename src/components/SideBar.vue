<script type="ts">
import {inject} from "vue";
export default {
  setup(){
    const store = inject("store");
    return {store}
  }
}
</script>
<template>
  <div class="sidebar">
    <h1>Clicked</h1>
    <p v-for="(square, index) in store.state.clicked" :key="index">
      {{index}}. {{ square }}
    </p>
  </div>

</template>
<style scoped>
.sidebar {
  flex: 0.5;
  background-color: yellow;
}
</style>
