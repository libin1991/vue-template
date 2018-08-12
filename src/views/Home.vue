<template>
  <div class="home">
    <img alt="Logo地址" src="../assets/logo.png">
    <HelloWorld msg="这条msg被传递到HelloWorld"/>
  </div>
</template>

<script>
//组件别名 from 引入组件
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
