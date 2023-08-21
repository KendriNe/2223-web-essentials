<template>
    <div>
        <input type="text" v-model="nieuwGetal">
        <hr>    
        <button @click="store.getallenReeks.push(nieuwGetal)">Voeg getal aan reeks toe</button>
        <hr>
        <ul>
            <li v-for="getal in sortedGetallenReeks">{{ getal }}</li>
        </ul>
    </div>
</template>

<script>
import { usegetallenStore } from "@/stores/getallenStore";

export default {
    name: "StoreView",
    data() {
        return {
            store: usegetallenStore(),
            nieuwGetal: 0
        }
    },
    computed: {
        sortedGetallenReeks() {
            return this.store.getallenReeks.slice().sort((a, b) => a - b);
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
