<template>
 <div class="nav-bar-container">
   <div class="icon-container">
     <svg-icon icon-class="book" ></svg-icon>
         <!-- <svg
      :class="{'is-active':isActive}"
      class="hamburger"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
    >
      <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" />
    </svg> -->
   </div>

   <breadcrumb class="breadcrumb-container"></breadcrumb>
   <usr-info class="usr-info-container"></usr-info>
 </div>
</template>

<script>
import UsrInfo from './UserInfo'
import Breadcrumb from './Breadcrumb'

export default {
  data () {
    return {

    }
  },
  components: {
    UsrInfo,
    Breadcrumb
  }
}
</script>

<style lang="scss" scoped>
.text-container {
  float: left;
  background-color: green;
  margin: 0px
}
  .icon-container {
    // line-height: 46px;
    height: 50px;
    width: 50px;
    // height: 100%;
    float: left;
    cursor: pointer;
    -webkit-tap-highlight-color:transparent;

    /* &:hover {
      background: rgba(0, 0, 0, .025)
    } */
    .svg-icon {
      width: 60%;
      height: 100%;
    }
  }

  .breadcrumb-container {
    // background-color: black;
    float: left;
  }

.nav-bar-container {
  /* display: flex; */
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #ddd;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
}

</style>
