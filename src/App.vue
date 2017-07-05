<template>
<div>
  <h2>{{ title }}</h2>
  <!-- HEADER  -->
  <app-header></app-header>
  <!-- CONTENT  -->
  <app-content></app-content>
  <!-- FOOTER  -->
  <app-footer></app-footer>
</div>
</template>



<script>
import Header fom './components/Header.vue'
export default {
  components:{
    'app-header': Header,
    'app-content': Content,
    'app-footer': Footer
  },
  data() {
    return {
      title:'my applicaiton'
    }
  }
}
</script>

<style >

</style>
