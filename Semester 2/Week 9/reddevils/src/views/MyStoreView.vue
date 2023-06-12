<template>
    <div>
        <hr>
        <p><input type="text" v-model="this.prijs"></p>
        <ul>
            <li v-for="p in this.store.productsCheaperThan(this.prijs)">{{ p.name }} - {{ p.price }}</li>
        </ul>
        <hr>
        <button @click="this.store.addProduct(this.item)">Add product</button>
        <hr>
        <button @click="this.addOne">ADD 1 to totaal</button>
        <p>{{this.store.totaal}}</p>
        <hr>
        <ul>
            <li v-for="p in this.store.products">{{p.name}}</li>
        </ul>
        <hr>
        <p>voorbeeld van een getter : er zijn {{this.store.productCount}} producten aanwezig</p>
        <hr>
    </div>
</template>

<script>
import {useProductStore} from "@/stores/ProductStore";
    export default {
        name: "MyStoreView",
        methods : {
            addOne() {
                this.store.totaal++
            }
        },
        data() {
            return {
                store : useProductStore(),
                item : {name: 'brood', price: 15},
                prijs : 0
            }
        },
    }
</script>

<style scoped>

</style>