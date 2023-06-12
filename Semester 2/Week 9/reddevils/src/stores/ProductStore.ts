import {defineStore} from 'pinia';

export const useProductStore = defineStore('product', {
    state: () => ({
        // data (variables)
        totaal : 0,
        products : [
            {name:'boter', price: 5},
            {name:'melk', price: 10},
            {name:'tandpasta', price: 15},
        ]
    }),
    getters : {
        //computed props
        productCount(state) {
            return state.products.length
        },
        productsCheaperThan(state) {
            return(prijs) => (state.products.filter(product => product.price < prijs))
        }
    },
    actions : {
        // methods
        addProduct (element) {
            this.products.push(element)
        }
    }
})
