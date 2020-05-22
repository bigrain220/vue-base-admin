<template>
  <div id="consume-config">
    <content-header :title="title">
      <template>
        <el-button-group>
          <el-button size="small" :class="['trackable',selectCur==='apps'?'cur':'']" @click="tabsClick('apps')">交易应用</el-button>
          <el-button size="small" :class="['trackable',selectCur==='type'?'cur':'']" @click="tabsClick('type')">交易类型</el-button>
          <el-button size="small" :class="['trackable',selectCur==='coin'?'cur':'']" @click="tabsClick('coin')">交易币种</el-button>
        </el-button-group>
      </template>
    </content-header>
    <div class="content-con">
      <div class="consume-config-box every-page-box">
       
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "consumeConfig",
  components: {
    contentHeader: () => import("@/components/common/contentHeader"),
  },
  data() {
    return {
      selectCur: "apps",
      title: "消费配置",   
    };
  },
  methods:{
    tabsClick(params){
      this.selectCur = params;
    }
  }
};
</script>

<style lang="scss" scoped>
#consume-config{
 /deep/ .el-button-group{
    margin:20px 0 0 20px;
  }
  .trackable{
    color: #606266;
  }
  .cur{
    color: rgb(34, 153, 238);
    background: #ecf5ff;
  }
}
.consume-config-box {
  margin-top: 112px;
}
</style>