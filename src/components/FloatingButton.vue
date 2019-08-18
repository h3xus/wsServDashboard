<template>
<div class="button">
  <div></div>
  <i class="icon">+</i>
</div>
</template>
<style scoped>
.button {
  backface-visibility: hidden;
  width: 44px;
  height: 44px;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  background: rgb(32, 191, 212);
  border-radius: 100px;
  border: 0px solid #444;
  border-width: 0px 0px 0px 0px;
  padding: 10px 13px 10px 13px;
  color: #000;
  font-size: 16px;
  font-family: Helvetica Neue;
  font-weight: 900;
  font-style: normal
}
.button > div {
  color: #999;
  font-size: 10px;
  font-family: Helvetica Neue;
  font-weight: initial;
  font-style: normal;
  text-align: center;
  margin: 0px 0px 0px 0px
}
.button > i {
  color: #fff;
  font-size: 2em;
  font-weight: bold;
  line-height: 0.8em;
  border-radius: 0px;
  border: 0px solid transparent;
  border-width: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  position: static
}
.button > .ld {
  font-size: initial
}
</style>
