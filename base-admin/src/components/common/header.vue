<template>
  <div id="header">
    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="collapseChage">
      <i v-if="!collapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
    <div class="logo">结算中心后台</div>
    <div class="header-right">
      <div class="header-user-con">
        <el-button type="text" @click="logout">安全退出</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Header",
  data() {
    return {
     
    };
  },
  methods: {
    ...mapActions(["collapseAction"]),
    // 侧边栏折叠
    collapseChage() {
      this.collapseAction(!this.collapse);
    },
    logout() {
      this.$router.push("/logout");
    }
  },
  computed:{
    collapse:function(){
      return this.$store.state.isCollapse
    }
  }
};
</script>

<style scoped>
#header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
  background: #0173b2;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}
#header .logo {
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
.header-user-con >>> span {
  color: #fff;
}
</style>>