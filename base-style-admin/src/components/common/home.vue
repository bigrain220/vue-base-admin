<template>
  <div class="main">
    <Header></Header>
    <leftNav></leftNav>
    <div class="content" :class="{'content-collapse':isCollapse}">
      <div class="content-box">
        <!-- transition 和keep-alive一起用回失效，暂没发现原因  -->
        <!-- <transition name="move" mode="out-in"> -->
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"/>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"/>
        <!-- </transition> -->
        <el-backtop target=".content-box"></el-backtop>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./header";
import leftNav from "./leftNav";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: { Header, leftNav },
  data() {
    return {};
  },
  methods: {},
  created() {},
  computed: {
    ...mapGetters(["isCollapse"])
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
  top: 70px;
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
