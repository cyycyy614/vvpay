<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-input :value="msg" @input="change1" type="text"></el-input>
    {{ msg }}
    <el-button @click="change">出发change事件</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      test: 'value',
    }
  },
  model: {
    prop: 'msg',
    event: 'change',
  },
  methods: {
    change1(e) {
      // this.test = e.target.value
      this.$emit('change', e)
      console.log('msg', this.msg)
    },
    change() {
      this.$emit('change', 'change了一下')
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
