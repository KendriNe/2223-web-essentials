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

    <div>
      <hr>
      <form @submit.prevent="addRecord">
      <table>
        <tr><th>id : </th><td><input type="text" v-model="this.newID" :disabled="true"></td></tr>
        <tr><th>Naam : </th><td><input type="text" v-model="this.newNaam"></td></tr>
        <tr><th>Club : </th><td><input type="text" v-model="this.newClub"></td></tr>
        <tr><th>Plaats : </th><td><input type="text" v-model="this.newPlaats"></td></tr>
        <tr><th>Afbeelding : </th><td><input type="text" v-model="this.newAfbeelding"></td></tr>
        <tr><td colspan="2"><button type="submit">Voeg toe</button></td></tr>
      </table>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hobbies",

  data(){
    return{
      newObject : {},
      newID : 0,
      newNaam : '',
      newClub : '',
      newPlaats : '',
      newAfbeelding : '',
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
    addRecord() {
      this.newObject = { id: parseInt(this.hobbies[this.hobbies.length - 1].id) + 1,
                          naam: this.newNaam,
                          club: this.newClub,
                          plaats: this.newPlaats,
                          afbeelding: this.newAfbeelding
                        }

      //voeg het record toe
      this.hobbies.push(this.newObject);
      //blank alle formfields
      this.newId = 0;
      this.newNaam = '';
      this.newClub = '';
      this.newPlaats = '';
      this.newAfbeelding = '';
    },
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