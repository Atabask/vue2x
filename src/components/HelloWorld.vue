<template>
  <div class="hello">
    <input v-model.number="operand1" type="number">
    <input v-model.number="operand2" type="number">
    = {{ result }}
    <div v-if="error">{{error}}</div>
    <div class="calc">
      <button v-for="operator in operators" 
      :key="operator" 
      @click="calculate(operator)">
        {{ operator }}
      </button>
    </div>
    <input type="checkbox" name="checkbox" id="keyboardCheckbox" v-model="cheked" :key="keyboard">Отобразить Экранную клавиатуру 
    <div class="nums" v-if="cheked === true">
      <button v-for="num in nums" 
      :key="num"
      @click="setValueOperand(num)"
      >{{ num }}</button>
      <button value="del" :key="del" @click="del()">&#9003;</button>
    </div>
    <input type="radio" name="operandInput" v-model="activeInput" value="operand1">Операнд 1
    <input type="radio" name="operandInput" v-model="activeInput" value="operand2">Операнд 2
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
      operators: ['+', '-', '/', '*', '%', '**'],
      operand1: 0,
      operand2: 0,
      result: 0,
      error: '',
      nums: [ '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      cheked: false,
      

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
    setValueOperand(num) {

      if(this.activeInput && this.activeInput == "operand1" && num != "del"){
        this.operand1 += num
      } else if (this.activeInput && this.activeInput == "operand2" && num != "del"){
        this.operand2 += num }
    },

    del(){

      if(this.activeInput == "operand1"){
        this.operand1 = this.operand1 / 10 | 0
      } else { 
        this.operand2 = this.operand2 / 10 | 0
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
