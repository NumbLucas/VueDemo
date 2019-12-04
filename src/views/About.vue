<template>
  <div class="about">
    <el-scrollbar>
      <li v-for="n in 10" :key="n">
        {{n}}
      </li>
    </el-scrollbar>
    <h1>This is an about page</h1>
    <el-button type="primary" @click="btnClick">test</el-button>
  </div>
</template>
<script>
export default {
  name: 'about',
  methods: {
    btnClick () {
      console.log(this.$router.options)
    }
  }

}
</script>
