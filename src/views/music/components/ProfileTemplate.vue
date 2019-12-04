<template>
  <div>
    <div class="cover-container">
      <img style="width: 100%;height: 100%" :src="coverImgUrl" alt="">
    </div>
    <div class="content-cotainer">
      <slot name="head" >
        <div class="head-container item" ></div>
      </slot>
      <slot name="creatorInfo" >
        <div class="info-container item"></div>
      </slot>
      <slot name="operation" class="item">
        <div class="operation-container item"></div>
      </slot>
      <slot name="profile" class="item">
        <div class="profile-container item"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    coverImgUrl: {

    }
  },
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style>
.cover-container {
  float: left;
  width: 30%;
}
.content-cotainer {
  float: right;
  width: 70%
}
/* .item {
  width: 100%;
  line-height: 35px;
  float: left;
} */

</style>
