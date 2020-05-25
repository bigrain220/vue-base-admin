<template>
  <div id="order">
    <content-header :title="title"></content-header>
    <div class="content-con">
      <div class="order-box every-page-box">
        <button @click="increment">增加</button>
        <button @click="decrement">减少</button>
        <button @click="incrementAsync">延时增加</button>
        <p>{{count}}</p>
        <p>{{isEvenOrOdd}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
     ...mapActions(["increment","decrement","incrementAsync"]),
  },
  mounted() {},
  computed:{
    ...mapGetters(['count','isEvenOrOdd'])
  }
};
</script>


<style lang="scss" scoped>
</style>
