<template>
  <div id="app">
    <fish-layout class="demo">
      <div slot="content">
        <section>
          <router-view></router-view>
        </section>
      </div>
      <div slot="footer">
      </div>
    </fish-layout>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>

<style>
body {
  height: 100vh;
  width: 100vw;
  background: #000;
  /* background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(0,212,255,1) 100%); */
  color: #FFF;
}
.fish.layout > .content ,.fish.layout > .header {
  background: transparent;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 2em;
  padding: 1em;
}
@font-face {
  font-family: 'icomoon';
  src:  url('./assets/fonts/icomoon.eot?ev08m2');
  src:  url('./assets/fonts/icomoon.eot?ev08m2#iefix') format('embedded-opentype'),
    url('./assets/fonts/icomoon.ttf?ev08m2') format('truetype'),
    url('./assets/fonts/icomoon.woff?ev08m2') format('woff'),
    url('./assets/fonts/icomoon.svg?ev08m2#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"], [class*="icon"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon:before {
  font-size: 2em;
}

.icon-floppy-disk:before {
  content: "\e962";
}
.icon-database:before {
  content: "\e964";
}
.icon-lock:before {
  content: "\e98f";
}
.icon-unlocked:before {
  content: "\e990";
}
.icon-power:before {
  content: "\e9b5";
}
.icon-power-cord:before {
  content: "\e9b7";
}
.idle:before, .icon-tongue:before {
  content: "\e9e3";
}
.running:before, .icon-cool:before {
  content: "\e9eb";
}
.icon-evil:before {
  content: "\e9ef";
}
.icon-frustrated:before {
  content: "\e9ff";
}
.disabled:before, .icon-cross:before {
  content: "\ea0f";
}
.enabled:before, .icon-checkmark:before {
  content: "\ea10";
}
</style>
