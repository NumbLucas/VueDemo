<template>
 <div id="player">
 </div>
</template>

<script>
import 'aplayer/dist/APlayer.min.css'
import APlayer from 'aplayer'

export default {
  data () {
    return {
      ap: null
    }
  },
  components: {

  },
  mounted () {
    this.initMusicPlayer()
  },
  methods: {
    addList (list) {
      console.log('length', this.ap.list)

      this.ap.list.add(list)
      this.ap.list.switch(this.ap.list.audios.length - 1)
      this.ap.play()
      this.ap.list.hide()
    },
    initMusicPlayer () {
      const ap = new APlayer({
        container: document.getElementById('player'),
        fixed: false,
        mini: false,
        autoplay: false,
        theme: '#FADFA3',
        loop: 'all',
        order: 'random',
        preload: 'auto',
        volume: 0.7,
        mutex: true,
        listFolded: false,
        listMaxHeight: 90,
        lrcType: 1,
        audio: [
        ]
      })
      this.ap = ap
    }
  }
}
</script>

<style >
#player {
width: auto;
margin: 0;
padding: 0;
}
</style>
