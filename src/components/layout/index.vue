<template>
 <div>
   <sidebar class="sidebar-container"></sidebar>
   <!-- <vertical-nav-bar class="sidebar-container"></vertical-nav-bar> -->
   <div class="main-container">
     <nav-bar class="nav-bar-container"></nav-bar>
     <app-main class="app-container"></app-main>
   </div>
 </div>
</template>

<script>
import Sidebar from '../sidebar/index.vue'
import AppMain from './components/AppMain.vue'
import NavBar from './components/NavBar.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    Sidebar,
    AppMain,
    NavBar
  }
}
</script>

<style>
</style>
