<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

    }
  },
  methods: {
    
  },
  mounted () {
    document.querySelector('#index_loading').style.display="none";
  }
  
}
</script>

<style>

</style>
