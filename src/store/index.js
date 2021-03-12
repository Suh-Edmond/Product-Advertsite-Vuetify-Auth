import Vue from 'vue'
import Vuex from 'vuex'
import  firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
    namespaced:true,
    state: {
        products: [
        ],
    users: null,
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
            return state.users
        },
        getLoadingState(state)
        {
            return state.loading
        }
    },
    actions: {
        DeleteProduct:({commit}, payload) => {
            console.log(payload)
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
                        image:obj[key].image
                    })
                }
                commit("SetProducts", loadedProducts)
            }).
            catch(err =>{
                console.log(err)
            })
        },
        CreateProduct({commit,getters}, payload)
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
          //  let imageUrl
            firebase.database().ref("products").push(newProduct).
            then( data => {
                key = data.key
                return key
            }).then(key => {
                const filename = payload.image.name
                const fileExtension = filename.slice(filename.lastIndexOf('.'))
                return firebase.storage().ref('products/' + key + fileExtension).put(payload.image)
            }).
            then(fileData => {
                    return fileData.ref.getDownloadURL()  
            }).
            then(url => {
                console.log(url)
                commit("CreateProduct", {
                    ...newProduct,
                    image:url,
                    id:key
                })
                return firebase.database().ref("products").child(key).update({imageUrl:url}) 
            })
            .catch(e=>{
                console.log(e)
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
                   products:[]
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
                    products: []
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
        }
    },
    mutations: {
        Delete:(state, payload)=>{
           state.products.splice((state.products.findIndex(product => product.id  === payload)), 1)
        },
        CreateProduct(state, payload)
        {
           state.products.push(payload)
        },
        UpdateProduct(state, payload)
        { 
            Object.assign(state.products[payload.id], payload)
        },
        SetUser(state, payload)
        { 
            state.users = payload
        },
        SetLoadingState(state)
        {
            state.loading = true
        },
        SetProducts(state, payload)
        {
            state.products = payload
        }
         
    }
})


 