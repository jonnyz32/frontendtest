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
    <TheSquare color="black" :rank="rank" />
    <TheSquare color="white" />
    <TheSquare color="black" />
    <TheSquare color="white" />
    <TheSquare color="black" />
    <TheSquare color="white" />
    <TheSquare color="black" />
    <TheSquare color="white" />
  </div>
  <div v-else class="row">
    <TheSquare color="white" :rank="rank" />
    <TheSquare color="black" />
    <TheSquare color="white" />
    <TheSquare color="black" />
    <TheSquare color="white" />
    <TheSquare color="black" />
    <TheSquare color="white" />
    <TheSquare color="black" />
  </div>
</template>
<style type="text/css">
.row {
  display: flex;
}
</style>
