<script setup lang="ts">
import ChessBoard from './components/ChessBoard.vue'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <div class="main">
    <ChessBoard />
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
