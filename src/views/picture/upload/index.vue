<template>
  <div>
    <h2>upload page</h2>
    <div class="upload-container">
      <!-- <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple> -->
      <el-upload class="upload-demo" drag  multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style>
/* .upload-container {
  width: 50%;
  height: 80%;
} */

</style>
