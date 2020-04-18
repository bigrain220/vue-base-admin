<template>
  
</template>

<script>
import { logoutAPI } from "@/api/loginApi";
export default {
    name:"logout",
    data(){
        return{

        }
    },
    methods:{

    },
    created(){
       this.$router.push({ path: "/login" });
      //  logoutAPI({}).then(rs => {
      //   if (rs) {
      //     this.$message.warning("已退出，请重新登录");
      //      this.$router.push({ path: "/login" });
      //   }
      // });
    }
}
</script>

<style lang="scss" scoped>

</style>