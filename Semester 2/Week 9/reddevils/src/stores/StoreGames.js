import {defineStore} from 'pinia';

export const useStoreGames = defineStore('review', {
    state: () => ({
        reviews : [
            {text: ''}
        ]
    }),
    getters : {

    },
    actions : {
        addReview (review) {
            this.reviews.push(review)
        }
    }
})