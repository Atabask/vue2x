<template>
  <div class="hello">
    <input v-model.number="operand1" type="number">
    <input v-model.number="operand2" type="number">
    = {{ result }}
    <div class="calc">
      <button @click="result = operand1 + operand2">+</button>
      <button @click="result = operand1 - operand2">-</button>
      <button @click="divide(operand1, operand2)">/</button>
      <button @click="multiplay()">*</button>
      <button @click="result = operand1 % operand2">%</button>
      <button @click="result = operand1 ** operand2">**</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default:"Empty Props"
    }
  },
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0
    }
  },
  methods: {
    divide(op1, op2) {
      this.result = op1 / op2
    },
    multiplay(){
      const {operand1, operand2} = this
      this.result = operand1 * operand2
    }
  }
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
