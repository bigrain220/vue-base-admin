<template>
  <div class="login-box">
    <h3 class="title">后台登录</h3>
    <el-form :model="loginForm" ref="loginForm" :rules="ruleForm" class="login-container">
      <el-form-item prop="username">
        <el-input type="text" prefix-icon="iconfont iconzhanghao" v-model="loginForm.username" placeholder="用户名" auto-complete="on"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" prefix-icon="iconfont iconiconfonticon-mima" v-model="loginForm.password" placeholder="密码" @keydown.enter.native="handleSubmit"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium" style="width:100%" @click.native.prevent="handleSubmit" :loading="loading">立即登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { loginAPI } from "@/api/userAccount/index";
export default {
  name: "login",
  data() {
    return {
      loading: false,
      loginForm: {
        username: "",
        password: ""
      },
      ruleForm: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "输入密码", trigger: "blur" }]
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          // var params = this.loginForm;
          //  loginAPI(params).then(rs => {
          //    console.log(rs)
          //     this.loading = false;
          //  })
          this.$router.push({ path: "/admin/index" });
          this.$message.success("登录成功！");
        }
      });
    }
  },
  mounted() {

  }
};
</script>
<style lang="scss" scoped>
.login-box {
  background: #fff;
  width: 400px;
  position: fixed;
  top: 20vh;
  left: calc(50% - 200px);
  border: 1px solid #ccc;
  padding: 30px;
  border: 1px solid #dded;
  border-radius: 4px;
  -webkit-box-shadow: 0 0 5px #eee;
  box-shadow: 0 0 10px #eee;
  .title {
    font-size: 22px;
    font-weight: normal;
    padding-bottom: 20px;
    color: #555;
  }
}
</style>
<style lang="scss">
.login-box {
  .iconfont {
    font-size: 14px;
    margin-left: 2px;
  }
  .el-form-item {
    margin-bottom: 28px;
  }
}
</style>
