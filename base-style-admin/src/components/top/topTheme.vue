<template>
  <div>
    <el-dialog title="选择主题" append-to-body :visible.sync="themeVisible" width="50%">
      <el-radio-group v-model="text" class="list">
        <el-row :span="24">
          <el-col v-for="(item,index) in list" :key="index" :md="4" :xs="12" :sm="4">
            <el-radio :label="item.value">{{item.name}}</el-radio>
          </el-col>
        </el-row>
      </el-radio-group>
    </el-dialog>
      <i class="el-icon-s-open" @click="open"></i>
  </div>
</template>

<script>
import { setTheme } from "@/utils/utils";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      themeVisible: false,
      text: "",
      list: [
        {
          name: "默认主题",
          value: "theme-default"
        },
        {
          name: "白色主题",
          value: "theme-white"
        },
        {
          name: "炫彩主题",
          value: "theme-star"
        }
      ]
    };
  },
  watch: {
    text: function(val) {
      this.themeNameAction(val);
      setTheme(val);
    }
  },
  computed: {
    ...mapGetters(["themeName"])
  },
  mounted() {
    this.text = this.themeName;
    if (!this.text) {
      this.text = "";
    }
  },
  methods: {
    ...mapActions(["themeNameAction"]),
    open() {
      this.themeVisible = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
}
</style>

