<template>
  <div>
    <div class="container" v-for="game in games" :key="game.title">
      <img :src="game.src" :alt="game.title">
      <h2>{{ game.title }}</h2>
      <p>{{game.description}}</p>
        <div class="review-section">
          <textarea></textarea>
          <button @click="this.store.addReview(this.newReview)">Place review</button>
        </div>
      <p v-for="review in this.store.reviews">{{review.text}}</p>
    </div>
  </div>
</template>


<script>
import {useStoreGames} from "@/stores/StoreGames";

export default {
  name: "GameCard",

  data() {
    return {
      games : [
        {
          title: 'Elden Ring',
          description: 'THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.',
          src: 'src/assets/games/eldenring.jpg'
        },
        {
          title: 'Sea of Thieves',
          description: 'Sea of Thieves offers the essential pirate experience, from sailing and fighting to exploring and looting – everything you need to live the pirate life and become a legend in your own right. With no set roles, you have complete freedom to approach the world, and other players, however you choose.',
          src: 'src/assets/games/sot.jpg'
        },
        {
          title: 'Warhammer 40k: Darktide',
          description: 'From the developers of the best-selling and award-winning franchise Vermintide, Warhammer 40,000: Darktide is a visceral 4-player co-op action game set in the hive city of Tertium. Fight together with your friends against hordes of enemies in this new Warhammer 40,000 experience.',
          src: 'src/assets/games/darktide.jpg'
        },
        {
          title: 'Hollow Knight',
          description: 'Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.',
          src: 'src/assets/games/hollowknight.jpg'
        }
      ],

      newReview : {},

      store: useStoreGames(),
    }
  }
}

</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 25px;
}

.review-section {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  height: 30px;
}

textarea {
  height: 100%;
}

button {
  height: 100%;
}
</style>