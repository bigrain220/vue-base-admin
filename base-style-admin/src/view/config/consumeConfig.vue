<template>
  <div id="consume-config">
    <content-header :title="title">
      <template>
        <el-radio-group v-model="selectCur" size="small" class="radio-group">
          <el-radio-button label="1">上海</el-radio-button>
          <el-radio-button label="2">北京</el-radio-button>
          <el-radio-button label="3">广州</el-radio-button>
          <el-radio-button label="4">深圳</el-radio-button>
        </el-radio-group>
      </template>
    </content-header>
    <div class="content-con">
      <div class="consume-config-box every-page-box"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "consumeConfig",
  components: {
    contentHeader: () => import("@/components/common/contentHeader")
  },
  data() {
    return {
      selectCur: "1",
      title: "消费配置"
    };
  },
  methods: {
   
  }
};
</script>

<style lang="scss" scoped>
#consume-config {
  /deep/ .radio-group {
    margin: 20px 0 0 20px;
  }
}
.consume-config-box {
  margin-top: 112px;
}
</style>