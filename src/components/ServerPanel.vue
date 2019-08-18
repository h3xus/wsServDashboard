<template>
     <fish-row gutter=".6" class="panel">
        <fish-col span="2">
          <h3 class="panel-name"><slot></slot></h3>
          <div class="status" :class="status"> {{ status }}</div>
          <div class="version">{{version}}</div>
          <div class="cobot-state" v-if="status === 'connected' && serverStatusMsg.status_update">
            {{serverStatusMsg.status_update.state}}
            <div :class="serverStatusMsg.status_update.state" class="icon"></div>
          </div>
        </fish-col>
        <fish-col span="7">
          <fish-button @click="disconnect" v-if="status === 'connected'">Disconnect</fish-button>
          <fish-button @click="connect" v-if="status === 'disconnected'">Connect</fish-button>
          <fish-input v-model="serverAdress"></fish-input>
          <div v-if="status === 'connected'">
            <form @submit.prevent="sendMessage" action="#">
              <fish-input v-model="message"></fish-input><button class="submitBtn" type="submit">></button>
            </form>
          </div>
        </fish-col>
        <fish-col span="2">
          <div class="arm-state" v-if="status === 'connected' && serverStatusMsg.status_update" :class="serverStatusMsg.status_update.arm_state">
            Arm State: {{serverStatusMsg.status_update.arm_state}}
            <div class="icon" :class="serverStatusMsg.status_update.arm_state"></div>
          </div>
        </fish-col>
        <fish-col span="12">
          <div class="cobot-positions" v-if="status === 'connected' && serverStatusMsg.status_update">
            <p>tcp: {{serverStatusMsg.status_update.tcp_pose}}</p>
            <p>joint: {{serverStatusMsg.status_update.joint_angles}}</p>
          </div>
        </fish-col>
        <div class="corner">
          <div :click="disconnect">X</div>
        </div>
         <!-- <div v-if="status === 'connected'">
            <ul id="logs">
              <li v-for="log in logs" v-bind:key="log.id" class="log">
                {{ log.event }}: {{ log.data }}
              </li>
            </ul>
          </div> -->
    </fish-row>
</template>

<script>
export default {
  name: 'ServerPanel',
  data () {
    return {
      message: 'test',
      serverStatusMsg: '',
      logs: [],
      serverAdress: this.servconf,
      status: 'disconnected',
      version: 'v0.0'
    }
  },
  props: [
    'servconf',
    'autorun'
  ],
  methods: {
    connect () {
      this.socket = new WebSocket(this.serverAdress)
      this.socket.onopen = () => {
        this.status = 'connected'
        this.getVersion()
        this.logs.push({event: 'Connected to', data: this.serverAdress})
        this.socket.onmessage = ({data}) => {
          if (JSON.parse(data).get_meta) {
            this.version = JSON.parse(data).get_meta.version
            console.log(JSON.parse(data).get_meta)
          }
          this.serverStatusMsg = JSON.parse(data)
          // this.logs.push({ event: 'Recieved message', data })
        }
      }
    },
    disconnect () {
      this.socket.close()
      this.status = 'disconnected'
      this.logs = []
    },
    sendMessage (e) {
      this.socket.send(this.message)
      this.logs.push({ event: '', data: this.message })
      this.message = ''
    },
    autoConnect () {
      if (this.autorun) {
        this.connect()
      }
    },
    getVersion () {
      this.socket.send('{"get_meta": {}}')
    }
  },
  mounted () {
    this.autoConnect()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.panel {
  border: 1px solid #fff;
  box-shadow: inset 0px 0px 9px -6px rgba(255, 0, 0, 1);
  height: auto;
  width: 100%;
  background: #000;
  margin-bottom: 2em;
  padding: 1em;
}

.panel .corner {
  position: absolute;
  right: 10px;
  top: 10px;
  color: #fff;
  cursor: pointer;
}

.panel-name,
#logs,
.version,
.cobot-positions,
.arm-state,
.cobot-state {
  color: #FFF;
}

.cobot-positions {
  text-align: left;
}
.arm-state:before {
  content: '';
}
.arm-state,
.cobot-state {
  text-transform: uppercase;
}
.enabled {
  color: green;
}
.disabled { 
  color: red;
}

#logs {
  text-align: left;
}

.status.disconnected {
  color: red;
  text-shadow:
    0 0 5px red,
    0 0 10px red,
    0 0 20px red,
    0 0 40px #0ff,
    0 0 80px #0ff,
    0 0 90px #0ff,
    0 0 100px #0ff,
    0 0 150px #0ff;
}

.status.connected {
  color: green;
  text-shadow:
    0 0 5px green,
    0 0 10px green,
    0 0 20px green,
    0 0 40px #0ff,
    0 0 80px #0ff,
    0 0 90px #0ff,
    0 0 100px #0ff,
    0 0 150px #0ff;
}

.submitBtn {
  box-shadow: inset 0px -3px 7px 0px #29bbff;
  background: linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#2dabf9', endColorstr='#0688fa', GradientType=0);
  background-color: #2dabf9;
  border-radius: 10px;
  border: 1px solid #0b0e07;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  padding: 9px 23px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #263666;
}

pre {
  color: #fff;
  height: 100px;
}
</style>
