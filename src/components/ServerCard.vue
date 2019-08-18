<script>
export default {
  data () {
    return {
      tekst: 'Hello Servers!'
    }
  },
  render (createElement) {
    return createElement('h1', this.tekst)
  }
}
</script>
<style>
h1 {
  color: #fff;
  text-shadow:
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 20px #fff,
    0 0 40px #0ff,
    0 0 80px #0ff,
    0 0 90px #0ff,
    0 0 100px #0ff,
    0 0 150px #0ff;
}
</style>
