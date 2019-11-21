<template>
  <div>
    <Header></Header>
    <leftNav></leftNav>
    <main id="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from "./header";
import leftNav from "./leftNav";
export default {
  name: "Home",
  components: { Header, leftNav },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .content{
  position: absolute;
  right: 0;
  top: 60px;
  bottom: 0;
  text-align: left;
  overflow-y: scroll;
  left: 200px;
} */
</style>
