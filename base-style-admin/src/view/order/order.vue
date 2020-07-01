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
        <el-input v-model="title"></el-input>
        <div style="height:1000px;"></div>
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
  mounted() {
    console.log(this.$route)
  },
  computed:{
    ...mapGetters(['count','isEvenOrOdd'])
  },
  activated(){
    console.log(1)
  }
};
</script>


<style lang="scss" scoped>
</style>
