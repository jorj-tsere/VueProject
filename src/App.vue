<template>
  <div>
  <p ref="myData">{{ data }} <button v-on:click="doSomething">show dataType</button>   </p>
  <h2 ref="myDataType"> {{ message }} </h2>
   <h3 ref="myDataTypeConcat"> {{ gg }} </h3>
   <input type="text" ref="myInput" /> <button v-on:click="showRefs">show refs</button>
  </div>
</template>

<script>
export default {

  data () {
    return {
      data:'test example',
      message:''
    }
   },
   methods:{
     doSomething: function(){
      this.message = typeof this.data 
     },
     showRefs(){
      console.log(this.$refs);
     }
   },
   computed:{
      gg:function(){
        return this.data +" "+ this.message 
     }
   } 

}
</script>

<style>

</style>
