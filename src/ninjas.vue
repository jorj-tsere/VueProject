<template>
<ul>
  <li v-for="ninja in Ninjas">
    {{ ninja }}
  </li>
</ul>
</template>
<script>
  export default  {
    data(){
      return{
        Ninjas:['yoshi','mario','ryu']
      }
    }
  }
</script>
