<template>
  <div id="sidebar">
    <el-menu class="sidebar-el-menu" router :defaultOpeneds="['config']" :default-active="onRoutes" :collapse="collapse" background-color="#fff" text-color="#434444" active-text-color="#29e">
      <div class="collapse-btn" @click="change"><span class="nav-text" v-show="!collapse">网站导航</span><i :class="[collapse==true?'l el-icon-s-unfold':'r el-icon-s-fold']"></i></div>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      items: [
        {
          icon: "el-icon-user",
          index: "/admin/index",
          title: "用户账户"
        },
        {
          icon: "el-icon-document-copy",
          index: "/admin/order",
          title: "用户订单"
        },
        {
          icon: "el-icon-setting",
          index: "config",
          title: "支付配置",
          subs: [
            {
              index: "/admin/payWay",
              title: "支付方式"
            },
            {
              index: "/admin/consumeConfig",
              title: "交易配置"
            }
          ]
        },
        {
          icon: "el-icon-shopping-cart-full",
          index: "/admin/trade",
          title: "收支明细"
        }
      ]
    };
  },
  methods: {
    ...mapActions(["collapseAction"]),
    change() {
      this.collapseAction(!this.collapse);
    }
  },
  computed: {
    onRoutes() {
      return this.$route.path;
    },
    collapse: function() {
      return this.$store.state.isCollapse;
    }
  },
};
</script>

<style lang="scss" scoped>
#sidebar {
  display: block;
  position: fixed;
  left: 0;
  top: 0px;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background: #fff;
  font-size: 12px;
  .collapse-btn {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #f2f3f4;
    color: #323437;
    text-align: center;
    border-bottom: 1px solid #e1e3e4;
    padding: 0 20px;
    cursor: pointer;
    .nav-text {
      float: left;
      margin-left: 22px;
      font-size: 14px;
    }
    i{
      width: 24px;
      font-size: 18px;
      height: 40px;
      line-height: 40px;
    }
    i.l{
      margin-right: 5px;
    }
    i.r{
      text-align: right;
      margin-right:0;
    }
  }
}
.sidebar-el-menu {
  border-right: 1px solid #e6e6e6 !important;
  box-sizing: border-box;
  height: 100%;
  width: 180px;
}
.sidebar-el-menu.el-menu--collapse {
  width: 65px;
}
.el-submenu .el-menu-item {
  min-width: 179px;
}
#sidebar .el-menu--inline .el-menu-item {
  padding-left: 56px !important;
}
.el-menu-item.is-active {
  background: #fff !important;
}
</style>
<style>
#sidebar .el-submenu__title,
.el-menu-item,
.el-submenu .el-menu-item {
  height: 40px !important;
  line-height: 40px !important;
  font-size: 14px;
}
.el-submenu.is-active .el-submenu__title > * {
  color: rgb(34, 153, 238) !important;
}
ul.el-menu--popup {
  padding: 0 !important;
}
#sidebar .el-menu-item:hover,
.el-submenu__title:hover,
ul.el-menu--popup li:hover {
  background: #ecf5ff !important;
}
</style>