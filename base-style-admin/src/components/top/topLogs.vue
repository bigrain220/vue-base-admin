<template>
  <span @click="handleOpen">
    <el-badge :value="islogsShow?logsList.length:''" :max="99">
      <i class="el-icon-document-copy"></i>
    </el-badge>
    <el-dialog fullscreen="true" :visible.sync="errLogsVisible" width="100%" append-to-body>
      <div slot="title">
        <span style="padding-right: 20px;">错误日志</span>
        <el-button size="mini" type="primary" icon="el-icon-delete" @click="clearAll">Clear All</el-button>
      </div>
      <el-table :data="logsList" style="width: 100%" border stripe size="small">
        <el-table-column type="expand">
          <template slot-scope="props">
            <pre>{{props.row.stack}}</pre>
          </template>
        </el-table-column>
        <el-table-column label="info" prop="info" min-width="80"></el-table-column>
        <el-table-column label="message" prop="message" min-width="200"></el-table-column>
        <el-table-column label="url" prop="url" min-width="200"></el-table-column>
        <el-table-column label="time" prop="time" width="200"></el-table-column>
      </el-table>
    </el-dialog>
  </span>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "topLogs",
  data() {
    return {
      errLogsVisible: false
    };
  },
  computed: {
    ...mapGetters(["logsList"]),
    islogsShow: function() {
      return this.logsList.length > 0;
    }
  },
  methods: {
    ...mapActions(["clearLogstAction"]),
    handleOpen() {
      if (this.islogsShow) {
        this.errLogsVisible = true;
      }
    },
    clearAll() {
      this.clearLogstAction();
    }
  },
  mounted() {
    
  }
};
</script>

<style lang="scss" scoped>
</style>
