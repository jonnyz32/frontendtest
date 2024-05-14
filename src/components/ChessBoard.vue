<script type="ts">
import TheRow from "./TheRow.vue";
export default {
    components: {TheRow}
}
</script>
<template>
  <div class="board">
    <TheRow leadingColor="white" rank="8" />
    <TheRow leadingColor="black" rank="7" />
    <TheRow leadingColor="white" rank="6" />
    <TheRow leadingColor="black" rank="5" />
    <TheRow leadingColor="white" rank="4" />
    <TheRow leadingColor="black" rank="3" />
    <TheRow leadingColor="white" rank="2" />
    <TheRow leadingColor="black" rank="1" />
  </div>
</template>
<style scoped>
.board {
  flex-grow: 1;
  flex-shrink: 1;
  max-width: 100vh;
  max-height: 100vh;
}
</style>
