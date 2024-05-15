<script lang="ts">
import ChessBoard from './components/ChessBoard.vue'
import SideBar from './components/SideBar.vue';
import {inject} from "vue";

export default {
  components: {
  ChessBoard,
  SideBar,
},
setup(){
const store = inject("store")
return {store}
}
}

</script>

<template>
  <div class="main">
    <ChessBoard/>
    <SideBar />
  </div>
</template>

<style scoped>
.main {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
