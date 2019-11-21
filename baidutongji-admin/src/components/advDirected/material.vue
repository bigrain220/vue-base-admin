<template>
  <div class="Material">
    <Header :title="title"></Header>
    <div class="content-box">
      <div class="material-box">
       
        
    
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../common/header";
export default {
  name: "Material",
  components: { Header },
  data() {
    return {
      title: "物料列表",
     
    };
  },
  methods: {
 
   
  },
  created() {
    //  utils.getCookie("session_val")==""?this.hasToken=false:this.hasToken=true;
  },
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.material-box {
  background: #fff;
  padding: 0 10px;
  overflow: hidden;
  min-height: 400px;
}
</style>


