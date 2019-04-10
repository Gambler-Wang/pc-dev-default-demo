<template>
    <section class="title">{{name}}</section>
</template>

<script>
export default {
  name: 'title',
  props: ['name'],
  data () {
    return {

    }
  },
  methods: {
    
  },
  computed:{
      
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
 .title{
     padding: 10px;
     text-align: left;
     color: #303133;
     font-size: 16px;
 }
</style>
