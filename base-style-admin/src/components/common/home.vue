<template>
  <div class="main">
    <Header></Header>
    <leftNav></leftNav>
    <div class="content" :class="{'content-collapse':isCollapse}">
      <div class="content-box">
        <transition name="move" mode="out-in">
          <!-- keep-alive 的 include 默认是优先匹配组件的 name ，所以在编写路由 router 和路由对应的 view component 的时候一定要确保 两者的 name 是完全一致的。-->
          <!-- 默认如果不写 name 就不会被缓存 -->
          <!-- (切记 name 命名时候尽量保证唯一性 切记不要和某些组件的命名重复了，不然会递归引用最后内存溢出等问题) --> 
          <keep-alive :include="['order','payWay']">
            <router-view :key="$route.path" />
          </keep-alive>
        </transition>
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
