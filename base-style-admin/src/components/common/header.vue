<template>
  <div id="header">
    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="collapseChage">
      <i v-if="!isCollapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
    <div class="logo">后台管理系统</div>
    <div class="header-right">
      <div class="header-user-con">
        <top-color></top-color>
        <el-button type="text" @click="logout">安全退出</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { logoutAPI } from "@/api/userAccount/index";
export default {
  name: "Header",
  components:{
    topColor:()=>import('@/components/top/topColor')
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["collapseAction"]),
    // 侧边栏折叠
    collapseChage() {
      this.collapseAction(!this.isCollapse);
    },
    logout() {
      this.$router.push({ path: "/login" });
      logoutAPI().then(rs => {
        if (rs) {
          this.$message.warning("已退出，请重新登录");
          this.$router.push({ path: "/login" });
        }
      });
    }
  },
  computed: {
    ...mapGetters(["isCollapse"])
  },
  mounted() {
   
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