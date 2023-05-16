<template>
  <div>
    <p><img v-bind:src="'src/assets/' + this.selectedplayer.afbeelding"></p>
    <p>{{this.selectedplayer.speler}}</p>
    <p>{{this.selectedplayer.geboortedatum}}</p>
    <p>{{this.selectedplayer.club}}</p>
  </div>
</template>

<script>
export default {
  name: "playercard",
  props : {
    selectedplayer : {type : Object}
  },
}
</script>

<style scoped>
  img {
    width: 150px;
    height: 150px;
  }
  div {
    float: left ;
    width: 33%;
    margin-top: 100px;
    text-align: center;
  }
</style>