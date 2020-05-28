<template>
  <div id="trade">
    <content-header :title="title"></content-header>
    <div class="content-con">
      <div class="trade-box every-page-box">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "trade",
  components: {
    contentHeader: () => import("@/components/common/contentHeader")
  },
  data() {
    return {
      title: "收支明细"
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
</style>