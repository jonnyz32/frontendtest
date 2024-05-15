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
    <div class="header">
      <h2>Clicked</h2>
    </div>
    <div class="clickListContainer">
      <p class="clickList" v-for="(square, index) in store.state.clicked" :key="index">
      {{index}}. {{ square }}
    </p>
    </div>
   
  </div>

</template>
<style scoped>
.sidebar {
  display: flex;
  flex: 0.5;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  background-color: yellow;
  overflow: scroll;
  min-width: 100px;
}
.header {
  position: fixed;
  text-align: center;
  background-color: yellow;
  >h2 {
    margin-bottom: 12px;
  }
}

.clickList{
  font-size: 20px;
  font-weight: 600;

}

.clickListContainer{
  margin-top: 40px;
}
</style>
