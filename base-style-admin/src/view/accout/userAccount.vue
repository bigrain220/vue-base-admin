<template>
  <div id="user-account">
    <content-header :title="title"></content-header>
    <div class="content-con">
      <div class="user-account-box every-page-box" ref="everyPage">
        <el-tag v-for="item in tagsData" :key="item.tag_id" style="display:block;width:100%;height:8vh;line-height:8vh;">{{item.tag_name}} {{item.brief_name}}</el-tag>
      </div>
    </div>
  </div>
</template>

<script>
import { getTagsAPI ,getTest1API,getTest2API,getTest3API} from "@/api/account/index";
export default {
  name: "userAccount",
  components: {
    contentHeader: () => import("@/components/common/contentHeader")
  },
  data() {
    return {
      title: "用户账户",
      tagsData: []
    };
  },
  methods: {
    getTags(){
       getTagsAPI({ language: "zh" }).then(res => {
         this.tagsData = res.data;
      });
    },
    getTest(){
      getTest1API({}).then(res => {
         console.log('test1:',res)
      });
       getTest2API({}).then(res => {
         console.log('test2:',res)
      });
       getTest3API({name:1}).then(res => {
         console.log('test3:',res)
      });
    }
  },
  mounted() {
    this.getTags();
    this.getTest();
  },
};
</script>


<style lang="scss" scoped>

</style>
