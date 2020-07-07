<template>
  <div id="pay-way">
    <content-header :title="title"></content-header>
    <div class="content-con">
      <div class="pay-way-box every-page-box">
        <el-button type="primary" size="medium " class="add-btn" @click="addClick">新增</el-button>
        <el-form :inline="true" :model="searchForm" class="search-form" label-width="60px" size="medium">
          <el-form-item label>
            <el-input placeholder="请输入查找内容" v-model="searchForm.value" class="input-with-select" @keydown.enter.native="search(true)" clearable>
              <el-select v-model="searchForm.name" slot="prepend">
                <el-option label="名称" value="name"></el-option>
              </el-select>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" @click="search(true)">查询</el-button>
            <el-button @click="resetSearch">重置</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="tableData" style="width: 100%" stripe>
          <el-table-column label="支付ID" prop="id" width="120" align="center"></el-table-column>
          <el-table-column width="100"></el-table-column>
          <el-table-column label="支付名称" prop="name" align="left"></el-table-column>
          <el-table-column label="状态" align="left">
            <template slot-scope="scope">
              <div v-text="(selectOptions.status().find(x=>x.value==scope.row.status)).label"></div>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center" width="160">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" icon="el-icon-edit" @click="editClick(scope.row)"></el-button>
              <el-button type="danger" size="mini" icon="el-icon-delete" @click="deleteClick(scope.row.id)"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[ 10,20, 50]" :page-size="size" layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
      </div>
    </div>
    <!-- common -->
    <edit-add-dialog v-if="dialogVisible" :isShow.sync="dialogVisible" :data="dialogData" :config="dialogConfig" :selectOptions="selectOptions"></edit-add-dialog>
  </div>
</template>

<script>
export default {
  name: "payWay",
  components: {
    contentHeader: () => import("@/components/common/contentHeader"),
    editAddDialog: () => import("./editAddDialog")
  },
  data() {
    return {
      title: "支付方式",
      total: 10,
      size: 10,
      currentPage: 1,
      searchForm: {
        name: "name",
        value: ""
      },
      tableData: [],
      dialogVisible:false,
      dialogConfig: {
        data: [
          {
            label: "支付ID",
            prop: "id",
            placeholder: "请输入支付ID",
            type: "input",
            disabled: true
          },
          {
            label: "支付名称",
            placeholder: "请输入名称",
            prop: "name",
            type: "input",
            disabled: false,
            rules:[{ required: true, message: "请输入支付名称", trigger: "blur" }]
          },
          {
            label: "状态",
            placeholder: "请选择状态",
            prop: "status",
            type: "select",
            disabled: false
          }
        ]
      },
      dialogData:{},
      editDialogData: {
        id: "",
        name: "",
        status: ""
      },
      addDialogData: {
        name: "",
        status: ""
      },
      response: {
        total: 3,
        rows: [
          {
            id: 1,
            name: "微信",
            status: '1'
          },
          {
            id: 2,
            name: "支付宝",
            status: '1'
          },
          {
            id: 4,
            name: "测试1",
            status: '2'
          }
        ]
      },
      selectOptions: {
        status() {
          const arr = [
            { value: '1', label: '正常' },
            { value: '2', label: '禁用' }
          ]
          return arr
        }
      }
    };
  },
  methods: {
    search(isbtn) {
      if (isbtn === true) {
        this.currentPage = 1;
      }
      var params = {};
      this.searchForm.value
        ? (params[this.searchForm.name] = this.searchForm.value)
        : "";
      params.page = this.currentPage;
      params.rows = this.size;
      // console.log(params);
      this.getMentList(params);
    },
    resetSearch() {
      this.searchForm = {
        name: "name"
      };
      this.currentPage = 1;
      this.size = 10;
      this.search();
    },
    handleSizeChange(val) {
      this.size = val;
      this.search();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.search();
    },
    editClick(row) {
     this.dialogData={id:"",name: "",status: ""}
       Object.keys(this.dialogData).forEach(key => {
        this.dialogData[key] = row[key];
      });
      this.dialogVisible = true;
    },
    deleteClick(id) {
      this.$confirm("删除后无法恢复, 是否继续删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log(id);
          // MentDelete({ id: id }).then(res => {
          //   if (res.code === 1) {
          //     this.$message.success("删除成功!");
          //     this.search();
          //   } else {
          //     this.$message.error("删除失败:" + res.msg);
          //   }
          // });
        })
        .catch(() => { });
    },
    addClick() {
      this.dialogData={name: "",status: ""}
      this.dialogVisible = true;
    },
    // payWayDialogClose(params) {
    //   if (params === "edit") {
    //     Object.keys(this.editDialogData).forEach(key => {
    //       this.editDialogData[key] = "";
    //     });
    //     this.$nextTick(() => {
    //       this.$refs.editDialogForm.clearValidate();
    //     });
    //   } else if (params === "add") {
    //     Object.keys(this.addDialogData).forEach(key => {
    //       this.addDialogData[key] = "";
    //     });
    //     this.$nextTick(() => {
    //       this.$refs.addDialogForm.clearValidate();
    //     });
    //   }
    // },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (formName === "editDialogForm") {
            // MentEdit(this.editDialogData).then(res => {
            //   this.dealResponse("edit", res);
            // });
          } else if (formName === "addDialogForm") {
            // MentAdd(this.addDialogData).then(res => {
            //   this.dealResponse("add", res);
            // });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    dealResponse(type, res) {
      var params = {
        title: "",
        visibleName: ""
      };
      if (type === "edit") {
        params.title = "编辑";
        params.visibleName = "editDialogVisible";
      } else if (type === "add") {
        params.title = "添加";
        params.visibleName = "addDialogVisible";
      }
      if (res.code === 1) {
        this.$message.success(params.title + "成功！");
        this.dialogVisible[params.visibleName] = false;
        this.search();
      } else if (res.msg === "FAILURE") {
        this.$message.error(params.title + "失败！");
      } else {
        this.$message.error(params.title + "失败: " + res.msg);
      }
    },
    getMentList(params) {
      this.total = this.response.total;
      this.tableData = this.response.rows;
      console.log(params);
      // MentList(params).then(res => {
      //   // console.log(res);
      //   this.total = res.total;
      //   this.tableData = res.rows;
      // });
    }
  },
  mounted() {
    this.getMentList({ page: this.currentPage, rows: this.size });
  },
  watch: {
    total() {
      if (this.total == (this.currentPage - 1) * this.size && this.total != 0) {
        this.currentPage -= 1;
        this.search();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.pay-way-box {
  .add-btn {
    position: absolute;
    right: 32px;
    top: 20px;
    padding: 10px 30px;
  }
  .search-form {
    margin-top: 20px;
  }
  .input-with-select .el-input-group__prepend .el-select {
    width: 100px;
  }
}
</style>
<style lang="scss">
.payway-edit-dialog,
.payway-add-dialog {
  .el-dialog {
    width: 600px;
    .el-input__inner,
    .el-input-number {
      width: 300px;
    }
  }
}
</style>