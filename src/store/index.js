import Vue from 'vue'
import Vuex from 'vuex'
import  firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
    namespaced:true,
    state: {
        products: [
        ],
    user: null,
    loading:false,
    error:false,
    clearerror:false
    },
    getters: {
        productList:(state)=> {
            return state.products
        },
        getUser(state)
        {
            return state.user
        },
        getLoadingState(state)
        {
            return state.loading
        },
        getLoadState(state)
        {
            return state.loading
        }
    },
    actions: {
        DeleteProduct:({commit}, payload) => {
           
            firebase.database().ref("products").child(payload).remove().
            then(() => {
                commit('Delete', payload)
            })
            
        },
        getProducts({commit})
        {
            firebase.database().ref("products").once('value').
            then(data => {
                const loadedProducts =[]
                const obj = data.val()
                for(let key in obj)
                {
                    loadedProducts.push({
                        id:key,
                        name:obj[key].name,
                        description: obj[key].description,
                        quantity:obj[key].quantity,
                        price: obj[key].price,
                        condition: obj[key].condition,
                        userId:obj[key].userId,
                        image:obj[key].imageUrl
                    })
                }
               commit("SetProducts", loadedProducts)
            }).
            catch(err =>{
                console.log(err)
            })
        },
        CreateProduct({commit, getters}, payload)
        {
            const newProduct = {
                name:payload.name,
                price:payload.price,
                quantity: payload.quantity,
                description: payload.description,
                condition: payload.condition,
                userId:getters.getUser.id
            } 
            let key
          //  create new product
            firebase.database().ref("products").push(newProduct).
            then(data => {
                commit("SetLoading", true)
                key = data.key
                return key
            }).then(key => {
                const filename = payload.image.name
                const fileExtension = filename.slice(filename.lastIndexOf('.'))
                return firebase.storage().ref('products/' + key + fileExtension).put(payload.image)
            }).then(fileData => {
                return fileData.ref.getDownloadURL()
            }).then(url => {
                firebase.database().ref('products').child(key).update({imageUrl:url})
            })
            .catch(e=>{
                console.log(e)
            }).finally(() => {
                commit("SetLoading", false)
            })
            
        },
        UpdateProduct({commit}, payload)
        {
             const updatedProduct = {
                name:payload.name,
                price:payload.price,
                quantity:payload.quantity,
                description:payload.description,
                condition:payload.condition,
                id:payload.id
            }
            firebase.database().ref("products").child(updatedProduct.id).update(updatedProduct).
            then(() => {
                commit('UpdateProduct', updatedProduct)
            })
        },
        Register({commit},payload)
        {
           firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).
           then(user =>{
               commit("SetLoadingState")
               const newUser = {
                   id:firebase.auth().currentUser.uid,
               }
                commit("SetUser", newUser)
               return user
           }).catch(err => {
               console.log(err)
           }) 
            
        },
        Login({commit}, payload)
        {
             
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).
            then (user =>{
                console.log(user)
                const signinUser = {
                    id:firebase.auth().currentUser.uid,
                }
                commit('SetUser', signinUser)
            }).catch(e => {
                console.log(e)
                 
            })
        },
        autoSign({commit}, payload)
        {
            console.log(payload)
            commit("SetUser", {id:payload.uid, products:[]})
        },
        logout({commit})
        {
            firebase.auth().signOut()
            commit("SetUser", null)
        },
        // UserProfile()
        // {
        //    // let user = firebase.auth().currentUser
        //     console.log(firebase.auth.getInstance().getCurrentUser
        // }
    },
    mutations: {
        Delete:(state, payload)=>{
           state.products.splice((state.products.findIndex(product => product.id  === payload)), 1)
        },
        UpdateProduct(state, payload)
        { 
            Object.assign(state.products[payload.id], payload)
        },
        SetUser(state, payload)
        { 
            state.user = payload
        },
        SetLoadingState(state)
        {
            state.loading = true
        },
        SetProducts(state, payload)
        {
            state.products = (payload)
        },
        SetLoading(state, payload)
        {
            state.loading = payload
        }
         
    }
})


 