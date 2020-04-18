<template>
  <div id="order">
    <content-header :title="title"></content-header>
    <div class="content-con">
      <div class="order-box every-page-box">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "order",
  components: {
    contentHeader: () => import("@/components/common/contentHeader")
  },
  data() {
    return {
      title: "用户订单"
    };
  },
  methods: {

  },
  mounted() {}
};
</script>


<style lang="scss" scoped>
</style>
