<template>
  <div :class="{ 'content-header': true }" ref="contentHeader">
    <div class="header-container">
      <span class="header-text">{{title}}</span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "contentHeader",
  props: {
    title: { type: String }
  },
  data() {
    return {
      
    };
  },
  methods: {},
  mounted() {
     this.$nextTick(()=>{
        var height = document.querySelector('.content-header').offsetHeight;
      document.querySelector(".every-page-box").style.marginTop= height + 20 + "px";
    })
  }
};
</script>

<style lang="scss" scoped>
.content-header {
  width: 100%;
  position: fixed;
  top: 70px;
  z-index: 999;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #d2d3d4;
  padding: 12px 0;
}

.header-container {
  line-height: 16px;
}

.header-container .header-text {
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  margin-left: 20px;
}
</style>