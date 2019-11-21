<template>
    <aside id="left-nav">
      <el-menu :default-openeds="['1', '2']" router :collapse="isCollapse" class="el-menu-vertical-demo">
        <el-button class="collapse-btn" @click="collapseClick"> <i class="el-icon-message"></i></el-button>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item index="/user/index">选项1</el-menu-item>
          <el-menu-item index="/user/page">选项2</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-message"></i>
            <span slot="title">导航二</span>
          </template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-message"></i>
            <span slot="title">导航三</span>
          </template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-message"></i>
            <span slot="title">导航四</span>
          </template>
          <el-menu-item index="4-1">选项1</el-menu-item>
          <el-menu-item index="4-2">选项2</el-menu-item>
          <el-submenu index="4-3">
            <template slot="title">子导航</template>
            <el-menu-item index="4-3-1">选项1</el-menu-item>
            <el-menu-item index="4-3-2">选项2</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>


    </aside>
</template>
<script>
export default {
  name: "leftNav",
  data() {
    return {
      isCollapse:false
    };
  },
  methods: {
    collapseClick(){
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>
<style scoped>
#left-nav{
  position: absolute;
  top: 60px;
  left: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgb(238, 241, 246)
}
.collapse-btn{
  width: 100%;
  border:0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>