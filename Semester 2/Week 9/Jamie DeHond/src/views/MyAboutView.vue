<template>
<div>
  <h3>{{this.teller}}</h3>
  <button class="plusButton" @click="increment" v-bind:disabled="this.toestand"> + </button>
  <button class="minButton" @click="decrement" v-bind:disabled="this.toestand"> - </button>
</div>
</template>

<script>
export default {
  name: "MyAboutView",
  methods: {
    increment()
    {
      this.teller++;
      if (this.teller > 99)
      {
        //this.teller = 0;
        this.toestand = true;
      }
    },
    decrement(){
      this.teller--;
      if (this.teller < 0)
      {
        //this.teller = 0;
        this.toestand = true;
      }
    }
  },
  data() {
    return{
      teller : 0,
      toestand : false
    }
  }
}
</script>

<style scoped>
.plusButton {
  background-color: green;
  width: 100px;
}
.minButton {
  background-color: red;
  width: 100px;
}
</style>