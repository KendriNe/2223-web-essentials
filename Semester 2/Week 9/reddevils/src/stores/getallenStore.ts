import {defineStore} from 'pinia';

export const usegetallenStore = defineStore('getallen', {
    state: () => ({
        // data (variables)
        getallenReeks : [0,1,1,2,3]
    }),
    getters : {
        //computed props
    },
    actions : {
        // methods
    }
})