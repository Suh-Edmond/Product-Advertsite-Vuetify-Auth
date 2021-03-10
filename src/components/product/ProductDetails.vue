<template>
    <v-container fluid>
        <div>
            <v-row justify="center">
                <v-col class="col-6">
                    <v-card
                        class="mt-5"
                    >
                       <div class="pa-6">
                            <v-img
                             height="350"
                            :src="productDetails.image"
                            
                            ></v-img>
                        </div>
                        <v-card-title>{{productDetails.name}}</v-card-title>
                        <v-card-subtitle class="pl-4 pb-1 pt-none">
                            <h4>
                            Price:   {{productDetails.price}} XFA
                            <br/>
                            Quantity:   {{productDetails.quantity}} in Stock
                            <br/>
                            Condition:   {{productDetails.condition}}</h4>
                        </v-card-subtitle>
                        <v-card-text>
                            <div  class="mb-8">
                                <v-card>
                                    <v-card-text class="pa-3"><h3>Description</h3></v-card-text>
                                    <v-card-text><h4>{{productDetails.description}}</h4> </v-card-text>
                                </v-card>
                            </div>
                        </v-card-text>
                        <v-card-actions class="mt-5 mr-2 mb-8" v-if="userProduct === productDetails.userId">
                            <v-spacer></v-spacer>
                            <v-btn
                                color="secondary"
                                @click.stop="editDialog = true"
                                class="btn mr-8"
                                text
                            >
                            <v-icon left>edit</v-icon> Edit
                            </v-btn>
                            <v-btn
                                color="warning"
                                class="btn ml-3"
                                text
                                @click="dialog =true"
                            >
                            <v-icon left>delete</v-icon>
                                Delete
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </div>
        <!-- slot for delete product -->
        <div>
            <v-dialog 
                 v-model="dialog"
                 width="300">
                <v-card>
                    <div class="pt-7 pl-2">
                        <strong>Delete Product "{{productDetails.name}}"  ?</strong>
                    </div>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                         <v-btn
                                color="secondary"
                                @click="dialog=false"
                                class="btn mr-5" 
                                text
                            >
                           Cancel
                            </v-btn>
                            <v-btn
                                color="warning"
                                class="btn ml-2"
                                @click="deleteProduct(productDetails.id)"
                                text
                            >
                           Delete
                            </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
        <!-- slot for edit product -->
        <div>
                <EditProduct :product="productDetails" class="pt-6" :visible="editDialog" @close="editDialog=false"></EditProduct>
        </div>
    </v-container>
</template>
<script>
import {mapGetters} from 'vuex'
import EditProduct from '@/components/product/EditProduct.vue'
export default {
     
    data:()=> ({
        dialog:false,
        editDialog:false
    }),
    methods: {
        deleteProduct(id)
        {
            this.$store.dispatch('DeleteProduct', id).then(
                this.$router.push("/user/products")
        )},
        
      
    },
    computed: {
      ...mapGetters({products:'productList'}),
      productDetails()
      {
          var productObj =[];
          for(var i in this.products)
          {
              if(this.products[i].id == this.$route.params.id){
                  productObj.push(this.products[i])
              }
          }
          
          console.log(productObj[0])
          return productObj[0]
      },
      userProduct()
      {
          return this.$store.getters.getUser.id
      }
    },
    components:{
        EditProduct
    }
}
</script>

<style scoped>
.btn {
    text-transform: unset !important;
    cursor: pointer;
}
</style>