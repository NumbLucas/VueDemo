<template>
  <div class="login-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: 'username',
        password: ''
      }
    }
  },
  components: {}
}
</script>

<style></style>
