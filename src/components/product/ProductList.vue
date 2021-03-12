<template>
    <v-container fluid class="my-4">
        
         <div class="ml-none mb-5">
            <h2>My Products</h2>
         </div>
        <div>
            <v-row dense  class="row-12" justify="center">
                 <v-col v-for="(product, index) in products" :key="index" class="col-4">
                    <v-card>
                        <v-img
                        height="250"
                        :src="product.image"
                        ></v-img>
                        <v-card-title>
                        {{product.name}}
                        </v-card-title>
                        <v-card-subtitle>Price: {{product.price }}   XFA </v-card-subtitle>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                             <v-btn text class="btn" :to="{name:'ProductDetails', params:{id:product.id}}" color="blue"  >
                                See more<v-icon class="pl-2">read_more  </v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </div>
        <!-- slot for add product -->
        <div class="d-flex justify-end pt-3 mr-3 mb-8" >
            <v-btn fab fixed bottom color="primary" to="/products/add">
            <v-icon dark>
                add
            </v-icon>
            </v-btn>
        </div>
    </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
  export default { 
    data: () => ({
      
    }),
    computed: {
      ...mapGetters({products:'productList'}) 
    },
    methods:{
      
    },
  
    
  }
</script>

<style scoped>
.btn {
  text-transform: unset !important;
  cursor: pointer;
}
</style>