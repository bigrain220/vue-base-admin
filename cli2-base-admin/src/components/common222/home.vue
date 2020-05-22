<template>
  <div class="main">
    <leftNav></leftNav>
    <div class="content" :class="{'content-collapse':collapse}">
      <div class="content-box">
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
        <el-backtop target=".content-box"></el-backtop>
      </div>
    </div>
  </div>
</template>

<script>
import leftNav from "./leftNav";
export default {
  name: "Home",
  components: { leftNav },
  data() {
    return {};
  },
  methods: {},

  computed: {
    collapse: function() {
      return this.$store.state.isCollapse;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.content {
  position: absolute;
  left: 180px;
  right: 0;
  top: 0;
  bottom: 0;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
}

.content-box {
  width: auto;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}

.content-collapse {
  left: 65px;
}
</style>
