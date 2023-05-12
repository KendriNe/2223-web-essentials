<template>
  <div>
    <h1>{{ this.pagina_titel }}</h1>
    <hr>
    <ul>
      <li v-for="(h, index) in this.hobbies" @click="selectHobby(index)" v-bind:title="h.club">{{index}} - {{h.naam}}</li>
    </ul>
    <div v-if="this.zichtbaar">
      <hr>
      <h3>Uitgebreide info</h3>
      <hr>
      <p>{{selectedHobbyIndex.id}} - {{selectedHobbyIndex.naam}} - {{selectedHobbyIndex.club}} - {{selectedHobbyIndex.plaats}}</p>
      <p>
        <img v-bind:src="'src/assets/' + this.selectedHobbyIndex.afbeelding" alt="afbeelding">
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hobbies",

  data(){
    return{
      zichtbaar : false,
      selectHobbyIndex : 0,
      pagina_titel : "Mijn Hobbies",
      hobbies :
          [
            {id: 1, naam:"Voetbal", club:"RSCA", plaats:"1000 Brussel", afbeelding:"voetbal.png"},
            {id: 2, naam:"Golf", club:"Spiegelven Golf Club", plaats:"3600 Genk", afbeelding:"golf.png"},
            {id: 3, naam:"Darts", club:"Elfde Liniestraat 24", plaats:"3500 Hasselt", afbeelding:"darts.png"},
            {id: 4, naam:"Tennis", club:"LIMA Tennis & Padel", plaats:"3630 Eisden", afbeelding:"tennis.png"},
            {id: 5, naam:"Basketbal", club:"Club Maaseik VZW", plaats:"3680 Maaseik", afbeelding:"basketbal.png"},
            {id: 6, naam:"Volleybal", club:"Green Yard", plaats:"3500 Hasselt", afbeelding:"volleybal.png"},
          ]
    }
  },
  methods : {
    selectHobby(index) {
      this.selectHobbyIndex = index;
      this.zichtbaar = true;
    }
  },

  computed : {
    selectedHobbyIndex() {
      return this.hobbies[this.selectHobbyIndex]
    }
  },
}
</script>

<style scoped>
img{
  width: 200px;
  height: 200px;
}
</style>