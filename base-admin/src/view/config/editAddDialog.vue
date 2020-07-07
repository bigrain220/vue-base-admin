<template>
  <el-dialog :title="config.title" :visible.sync="isShow" :before-close="closeDialog" custom-class="self-dialog" width="60%">
    <el-form size="small" :inline="true" label-width="100px" label-suffix=":" class="self-form" :model="allData">
      <el-row>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" v-for="(item,index) in config.data" :key="index">
          <el-form-item :label="item.label" :prop="item.prop" :rules="item.rules"  v-if="allData[item.prop]!==undefined">
            <el-input v-if="item.type==='input'" v-model="allData[item.prop]" :placeholder="item.placeholder" :disabled="item.disabled"></el-input>
            <el-select v-if="item.type==='select'" v-model="allData[item.prop]" :placeholder="item.placeholder" :disabled="item.disabled">
              <el-option v-for="selectItem in selectOptions[item.prop]()" :key="selectItem.value" :label="selectItem.label" :value="selectItem.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div style="text-align:right;margin-top:10px;">
      <el-button @click="closeDialog" size="small">取 消</el-button>
      <el-button type="primary" @click="submitForm" size="small">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "editAddDialog",
  props: {
    isShow: { type: Boolean },
    data: { required: true },//dialog的数据对象
    config: { type: Object },//dialog的配置对象
    selectOptions: { type: Object }//select的数据对象
  },
  data() {
    return {};
  },
  methods: {
    closeDialog() {
      this.$emit("update:isShow", false);
    },
    submitForm() {
      console.log("submitData", this.submitData);
    }
  },
  mounted() {
    console.log("data", this.data);
    console.log('selectOptions', this.selectOptions, this.selectOptions.status())
  },
  computed: {
    allData() {
      return this.data;
    },
    submitData() {
      let obj = {};
      this.config.data.map(item => {
        if (this.allData[item.prop] !== undefined) {
          obj[item.prop] = this.allData[item.prop];
        }
      });
      return obj;
    }
  }
};
</script>

<style lang="scss">
.self-dialog {
  .el-form-item {
    display: flex;
    .el-form-item__content {
      flex: 1;
      .el-select {
        width: 100%;
      }
    }
  }
}
</style>