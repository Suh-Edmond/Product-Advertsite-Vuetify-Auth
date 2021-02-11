<template>
    <v-container fluid>
        <div>
            <v-row justify="center">
                <v-col class="col-6">
                    <v-card
                        class="mx-auto my-4"
                    >
                        <v-img
                        height="250"
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        ></v-img>

                        <v-card-title>{{productDetails.name}}</v-card-title>
                        <v-card-subtitle-1 class="pl-4 pb-1 pt-none">Price:   {{productDetails.price}} XFA</v-card-subtitle-1> 
                        <br/>
                        <v-card-subtitle-1  class="pl-4">Quantity:   {{productDetails.quantity}} in Stock</v-card-subtitle-1>
                        <br/>
                        <v-card-subtitle-1  class="pl-4">Condition:   {{productDetails.condition}}</v-card-subtitle-1>
                        <v-card-text>
                            <div>
                                <v-card>
                                    <v-card-subtitle-1 class="pa-3">Description</v-card-subtitle-1>
                                    <v-card-text>{{productDetails.description}} </v-card-text>
                                </v-card>
                            </div>
                        </v-card-text>
                        <v-card-actions class="mt-7 mr-2">
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
          return productObj[0]
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