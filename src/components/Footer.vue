<template lang="html">
  <h2>{{ data }}</h2>
</template>

<script>
export default {
  data(){
    return{
      data:'Footer data'
    }
  }
}
</script>

<style lang="css" scoped>
  h2{
    padding:40px 0;
    text-align: center;
    background: #333;
    color:#fff;
  }
</style>
