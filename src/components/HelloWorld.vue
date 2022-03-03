<template>
  <div class="hello">
    <input v-model.number="operand1" type="number">
    <input v-model.number="operand2" type="number">
    = {{ result }}
    <div>{{error}}</div>
    <div class="calc">
      <button @click="calculate('+')">+</button>
      <button @click="calculate('-')">-</button>
      <button @click="calculate('/')">/</button>
      <button @click="calculate('*')">*</button>
      <button @click="calculate('%')">%</button>
      <button @click="calculate('**')">**</button>
    </div>
    <input v-if="numKeyboard" type="checkbox" name="keyboard" id="numKeyboard">Отобразить Экранную клавиатуру 
    <div class="nums">

    </div>
    <input type="radio" name="operandInput" id="">Операнд 1
    <input type="radio" name="operandInput" id="">Операнд 2
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
      result: 0,
      error: '',
      num: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
      checkbox: false
    }
  },
  methods: {
    calculate(operation){
      switch (operation){
        case'+': 
          this.add()
          break;
        case'-': 
          this.substract()
          break;
        case'/': 
          this.divide()
          break;
        case'*': 
          this.multiplay()
          break;
          case'%': 
           this.integerDivision()
           break;
          case'**': 
            this.exponentiation()
            break;
      }
    },

    add(){
      this.result = this.operand1 + this.operand2
    },
    substract(){
      this.result = this.operand1 - this.operand2
    }, 
    divide() {
      if(this.operand2 === 0){
        this.error = 'Делить на 0 нельзя!'
      } else {
        this.result = this.operand1 / this.operand2
      }
    },
    multiplay(){
      this.result = this.operand1 * this.operand2
    },
    integerDivision(){
      this.result = this.operand1 % this.operand2
    },
    exponentiation(){
      this.result = this.operand1 ** this.operand2
    },
    numKeyboard(){
      if( checkbox === false ){
        
      }
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
