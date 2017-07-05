<template>
<div>
  <!-- HEADER  -->
  <app-header></app-header>
  <!-- CONTENT  -->
  <app-content></app-content>
  <!-- FOOTER  -->
  <app-footer></app-footer>
</div>
</template>



<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Content from './components/Content.vue'
export default {
  components:{
    'app-header': Header,
    'app-content': Content,
    'app-footer': Footer
  }
}
</script>

<style >

</style>
