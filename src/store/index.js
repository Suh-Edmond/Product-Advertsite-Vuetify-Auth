import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [
            {
                id:1,
                name:"Product 1",
                price:789,
                quantity:89,
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis falsestrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                condition:'Great',
                image:'https://cdn.vuetifyjs.com/images/cards/cooking.png'
            },
            {
                id:2,
                name:"Product 2",
                price:789,
                quantity:89,
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis falsestrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                condition:'Great',
                image:'https://cdn.vuetifyjs.com/images/cards/cooking.png'
            },
            {
                id:3,
                name:"Product 3",
                price:789,
                quantity:89,
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis falsestrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                condition:'Great',
                image:'https://cdn.vuetifyjs.com/images/cards/cooking.png'
            },
            {
                id:4,
                name:"Product 4",
                price:789,
                quantity:89,
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis falsestrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                condition:'Great',
                image:'https://cdn.vuetifyjs.com/images/cards/cooking.png'
            },
            {
                id:5,
                name:"Product 5",
                price:789,
                quantity:89,
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis falsestrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                condition:'Great',
                image:'https://cdn.vuetifyjs.com/images/cards/cooking.png'
            },
            {
                id:6,
                name:"Product 6",
                price:789,
                quantity:89,
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis falsestrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                condition:'Great',
                image:'https://cdn.vuetifyjs.com/images/cards/cooking.png'
            },
            {
                id:7,
                name:"Product 7",
                price:789,
                quantity:89,
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis falsestrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                condition:'Great',
                image:'https://cdn.vuetifyjs.com/images/cards/cooking.png'
            },
        ],
    users: [
        {
            id:'userid1',
            name:'Johndoe',
            email:"johndoe@gmail.com",
            telephone:'689394029042',
            products:["id1", "id3"]
        }
    ]
    },
    getters: {

    },
    actions: {

    },
    mutations: {
        
    }
})