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
    <p class="clickList" v-for="(square, index) in store.state.clicked" :key="index">
      {{index}}. {{ square }}
    </p>
  </div>

</template>
<style scoped>
.sidebar {
  display: flex;
  flex: 0.5;
  flex-grow: 1;

  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  background-color: yellow;
}

.clickList{
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}
</style>
