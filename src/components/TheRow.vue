<script type="ts">
import TheSquare from "./TheSquare.vue";
export default {
    components: {TheSquare},
    props: {
    leadingColor: String,
    rank: String,
  }
}
</script>
<template>
  <div v-if="leadingColor === 'black'" class="row">
    <TheSquare color="black" :coordinate="'a' + rank" />
    <TheSquare color="white" :coordinate="'b' + rank" />
    <TheSquare color="black" :coordinate="'c' + rank" />
    <TheSquare color="white" :coordinate="'d' + rank" />
    <TheSquare color="black" :coordinate="'e' + rank" />
    <TheSquare color="white" :coordinate="'f' + rank" />
    <TheSquare color="black" :coordinate="'g' + rank" />
    <TheSquare color="white" :coordinate="'h' + rank" />
  </div>
  <div v-else class="row">
    <TheSquare color="white" :coordinate="'a' + rank" />
    <TheSquare color="black" :coordinate="'b' + rank" />
    <TheSquare color="white" :coordinate="'c' + rank" />
    <TheSquare color="black" :coordinate="'d' + rank" />
    <TheSquare color="white" :coordinate="'e' + rank" />
    <TheSquare color="black" :coordinate="'f' + rank" />
    <TheSquare color="white" :coordinate="'g' + rank" />
    <TheSquare color="black" :coordinate="'h' + rank" />
  </div>
</template>
<style type="text/css">
.row {
  display: flex;
}
</style>
