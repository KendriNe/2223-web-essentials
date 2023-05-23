<template>
    <div>
        <button @click="this.addOne">ADD 1 to totaal</button>
        <p>{{this.store.totaal}}</p>
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
                store : useProductStore()
            }
        },
    }
</script>

<style scoped>

</style>