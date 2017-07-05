<template lang="html">
  <h2>{{ title }}</h2>
</template>

<script>
export default {
  data (){
    return{
      title:'This is a header'
    }
  }
}
</script>

<style lang="css" scoped>
  h2{
    padding:40px 0;
    text-align: center;
    background: green;
    color:#fff;
  }
</style>
