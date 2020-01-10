<template>
  <div class="page-one">
  <el-button type="primary" size="medium">index</el-button>
  <div style="width:100%;height:1500px;background:pink;">11
  </div>
  </div>
</template>

<script>
import {getTags} from "@/api/indexApi"
export default {
  name: "pageOne",
  data() {
    return {};
  },
  methods:{

  },
  mounted(){
   getTags({language:'zh'}).then(res=>{
     console.log(res)
   })
  }
};
</script>


<style lang="scss" scoped>

</style>
