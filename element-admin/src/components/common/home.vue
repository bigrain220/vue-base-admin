<template>
  <div class="wrapper">
    <Header></Header>
    <leftNav></leftNav>
    <div class="content-box" :class="{'content-collapse':collapse}">
      <div class="content">
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
        <el-backtop target=".content"></el-backtop>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./header";
import leftNav from "./leftNav";
export default {
  name: "Home",
  components: { Header, leftNav },
  data() {
    return {
      collapse:false
    };
  },
  methods:{
    
  },
  created(){
     this.$center.$on("isCollapse", val => {
       this.collapse = val;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.content-box {
    position: absolute;
    left: 250px;
    right: 0;
    top: 70px;
    bottom: 0;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    background: #f0f0f0;
}

.content {
    width: auto;
    height: 100%;
    padding: 10px;
    overflow-y: auto;
    box-sizing: border-box;
}

.content-collapse {
    left: 65px;
}
</style>
