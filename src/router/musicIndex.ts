import Layout from '../components/layout/index.vue'

var Music = () => import('@/views/music/index.vue')
var MusicUsingRouter = () => import('@/views/music/indexUsingRouter.vue')

const musicRoute = {
  path: '/music',
  name: 'music',
  redirect: '/music/nav_recommend',
  component: Layout,
  meta: { title: 'music', icon: 'music' },
  children: [
    {
      path: 'index',
      component: MusicUsingRouter

    },
    {
      path: 'nav_recommend',
      component: MusicUsingRouter,
      meta: { head: '推荐' },
      redirect: '/music/nav_recommend/index',
      children: [
        {
          path: 'index',
          component: () => import('@/views/music/views/recommend.vue')
        }
      ]
    },
    {
      path: 'nav_rank',
      component: MusicUsingRouter,
      meta: { head: '排行榜' },
      redirect: '/music/nav_rank/index',
      children: [
        {
          path: 'index',
          component: () => import('@/views/music/views/rank.vue')
        }
      ]
    },
    {
      path: 'nav_songList',
      component: MusicUsingRouter,
      redirect: '/music/nav_songList/index',
      meta: { head: '歌单' },
      children: [
        {
          path: 'index',
          component: () => import('@/views/music/views/songList.vue')
        }
      ]
    },
    {
      path: 'nav_radio',
      component: MusicUsingRouter,
      redirect: '/music/nav_radio/index',
      meta: { head: '电台' },
      children: [
        {
          path: 'index',
          component: () => import('@/views/music/views/radio.vue')
        }
      ]
    },
    {
      path: 'nav_singers',
      component: MusicUsingRouter,
      redirect: '/music/nav_singers/index',
      meta: { head: '歌手' },
      children: [
        {
          path: 'index',
          component: () => import('@/views/music/views/singers.vue')
        }
      ]
    },
    {
      path: 'nav_newDisc',
      component: MusicUsingRouter,
      redirect: '/music/nav_newDisc/index',
      meta: { head: '新碟上架' },
      children: [
        {
          path: 'index',
          component: () => import('@/views/music/views/newDisc.vue')
        }
      ]
    },
    {
      path: 'songListInfo/:id',
      component: MusicUsingRouter,
      children: [
        {
          path: '',
          component: () => import('@/views/music/views/songListInfo.vue')
        }
      ]
    },
    {
      path: 'song/:id',
      component: MusicUsingRouter,
      children: [
        {
          path: '',
          component: () => import('@/views/music/views/song.vue')
        }
      ]
    },
    {
      path: 'singer/:id',
      component: MusicUsingRouter,
      children: [
        {
          path: '',
          component: () => import('@/views/music/views/singer.vue')
        }
      ]
    },
    {
      path: 'album/:id',
      component: MusicUsingRouter,
      children: [
        {
          path: '',
          component: () => import('@/views/music/views/album.vue')
        }
      ]
    },
    {
      path: 'user/:id',
      component: MusicUsingRouter,
      children: [
        {
          path: '',
          component: () => import('@/views/music/views/user.vue')
        }
      ]
    }
  ]
}

export default musicRoute
