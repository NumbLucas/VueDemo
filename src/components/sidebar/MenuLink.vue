<template>
  <!-- 删掉is属性 eslint会报错，暂时不处理 -->
  <!-- <component :is="componentId" v-bind="LinkProps(to)"> -->
    <!-- <component v-bind="LinkProps(to)" >
      <slot />
    </component> -->
    <router-link :to="to">
      <slot/>
    </router-link>
</template>

<script>
import { isExternalPath } from '@/utils/validate'

export default {
  props: {
    to: {
      type: String
      //  required: true
    },
    componentId: {

    }
  },
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    // 外链使用a标签，内部使用路由
    LinkProps (url) {
      if (isExternalPath(url)) {
        return {
          is: 'a',
          href: url,
          target: 'blank'
        }
      } else {
        return {
          is: 'router-link',
          url: url
        }
      }
    }

  }
}
</script>

<style>

</style>
