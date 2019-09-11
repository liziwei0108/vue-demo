<template>
  <div>
      <div class="btn" @click="toAdd()">添加</div>
  </div>
</template>

<script>
export default {
    name:'user',
    methods:{
        toAdd(){
            this.$router.push("/add")
        }
    }

}
</script>

<style>

</style>