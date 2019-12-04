<template>
 <div>
   <el-row :gutter="20" type="flex">
     <el-col :span="8" :xs="32">
         <user-card></user-card>
     </el-col>
     <el-col :span="24" :xs="32">
       <el-card>
         <el-tabs v-model="activeName" type="card"  @tab-click="handleClick">
         <el-tab-pane label="TimeLine" name="timeline">
           <time-line class="time-line"></time-line>
         </el-tab-pane>
         <el-tab-pane label="Activity" name="activity">
           <activity></activity>
         </el-tab-pane>
         <el-tab-pane label="friends" name="friends">
           <friends></friends>
         </el-tab-pane>
       </el-tabs>
       </el-card>
     </el-col>
   </el-row>

 </div>
</template>

<script>
import UserCard from './components/UserCard'
import TimeLine from './components/TimeLine'
import Activity from './components/Activity'
import Friends from './components/Friends'

export default {
  data () {
    return {
      activeName: 'timeline'
    }
  },
  components: {
    UserCard,
    TimeLine,
    Friends,
    Activity
  },
  methods: {
    handleClick () {

    }
  }
}
</script>

<style>
.time-line {
  margin: 20px 0px;
}

</style>
