<template>
  <div class="index">
  <el-button type="primary" size="medium">index</el-button>
  <div style="width:100%;height:1000px;background:pink;">11
  </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {};
  }
};
</script>


<style scoped>
.index{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
