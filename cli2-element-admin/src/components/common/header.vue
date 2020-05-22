<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="collapseChage">
      <i v-if="!collapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
    <div class="logo">后台管理系统</div>
    <div class="header-right">
      <div class="header-user-con">
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      collapse: false
    };
  },
  methods: {
    // 侧边栏折叠
    collapseChage() {
      this.collapse = !this.collapse;
      this.$center.$emit('isCollapse',this.collapse)
    }
  },
   mounted() {
        if (document.body.clientWidth < 1500) {
            this.collapseChage();
        }
    }
};
</script>

<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
  background: #242f42;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}
.header .logo {
  float: left;
  width: 250px;
  line-height: 70px;
}
.header-right {
  float: right;
  padding-right: 50px;
}
.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}
</style>>