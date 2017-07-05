<template lang="html">
  <div>
  <h2>{{ data }}</h2>
  <ul>
    <li v-for="ninja in ninjas" v-show="ninja.show">
      name: {{ ninja.name }} , speciality: {{ ninja.speciality }}
        <ul>
            <li v-for="skill in ninja.skills">{{ skill }} </li>
        </ul>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      data:'content data',
      ninjas:[
        {name:'Ryu', skills:['1','4','43'],speciality:'vue ninja',show:true },
        {name:'Sam', skills:['4','8','43'],speciality:'angular ninja',show:true },
        {name:'Nick', skills:['1','2','3'],speciality:'react ninja',show:true },
        {name:'John', skills:['1','8','9'],speciality:'node ninja',show:true },
        {name:'Fracies', skills:['1','4','43'],speciality:'laravel ninja',show:true },
        {name:'Maria', skills:['1','3','4'],speciality:'vue ninja',show:true },
        {name:'Anney', skills:['1','2','4'],speciality:'codeigniter ninja',show:true }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
    h2{
      padding:40px 0;
      text-align: center;
      color:#fff;
      background: #333;
    }
</style>
