<template>
  <el-dropdown trigger="click" @command="handleSetLanguage">
    <i class="iconfont iconlanguage"></i>
    <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="(item,index) in languageList" :key="index" :disabled="item==language" :command="item">{{langData[item]}}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "topLang",
  data() {
    return {
        langData:{
            en:'English',
            zh:'中文'
        }
    };
  },
  mounted() {
      // console.log(this.$i18n.messages)
  },
  computed: {
    ...mapGetters(["language"]),
    languageList:function(){
        return Object.keys(this.$i18n.messages) 
    }
  },
  methods: {
    ...mapActions(["languageAction"]),
    handleSetLanguage(lang) {
      this.$i18n.locale = lang;
      this.languageAction(lang);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
