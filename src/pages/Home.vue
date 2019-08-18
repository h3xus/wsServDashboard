<template>
    <div>
        <ServerCard></ServerCard>
        <div class="setup">
          <fish-switch v-model="autoConnect">Autoconnect</fish-switch>
        </div>
        <ServerPanel v-bind:key="server.id" v-for="server in servers" :autorun="autoConnect" :servconf="server.ipAddress">{{server.name}}{{server.index}}</ServerPanel>
        <div class="sticked" @click="newServer">
          <FloatingButton></FloatingButton>
        </div>
    </div>
</template>

<script>
import ServerPanel from '@/components/ServerPanel'
import ServerCard from '@/components/ServerCard'
import FloatingButton from '@/components/FloatingButton'

export default {
  data () {
    return {
      autoConnect: false,
      servers: [
        {
          name: 'tinkerboard',
          ipAddress: 'ws://192.168.8.72:8080'
        },
        {
          name: 'pre-prod',
          ipAddress: 'ws://192.168.8.73:8080'
        },
        {
          name: 'development',
          ipAddress: 'ws://192.168.8.74:8080'
        },
        {
          name: 'prod',
          ipAddress: 'ws://192.168.8.75:8080'
        }
      ]
    }
  },
  components: {
    ServerPanel,
    ServerCard,
    FloatingButton
  },
  methods: {
    newServer () {
      alert('Óption in Premium')
      // alert('Your created new server on the list')
      // this.servers.push({name: 'new', ipAddress: 'ws://echo.websocket.org'})
    },
    handler (event) {
      this.saveDataInLocalStorage()
      event.returnValue = 'string'
    },
    saveDataInLocalStorage () {
      localStorage.setItem('ws-servers-monitor', JSON.stringify(this.$data))
    },
    checkLocalStorage () {
      if (localStorage.getItem('ws-servers-monitor')) {
        let temp = JSON.parse(localStorage.getItem('ws-servers-monitor'))
        console.log(temp)
        this.servers = temp.servers
        this.autoConnect = temp.autoConnect
      } else {
        this.saveDataInLocalStorage()
      }
    }
  },
  beforeMount () {
    this.checkLocalStorage()
  },
  mounted () {
    window.addEventListener('beforeunload', this.handler)
  }
}
</script>

<style>
.sticked {
  position: fixed;
  right: 5%;
  bottom: 5%;
}
.setup {
  margin: 2em 0;
  color: #fff;
}
</style>
