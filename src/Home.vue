<template>
    <v-container fluid >
       <!-- alert feedback message -->
        <v-row v-if="isloading">
            <v-col class="col-6"></v-col>
            <v-col class="col-6">
              <v-alert
                      type="success"
                      close-text="Close Alert"
                      dark
                      dismissible
              >
              Account was successfully created
              </v-alert>
            </v-col>
        </v-row>
          
  
        <div class="ml-none mb-5">
          <h2>Our Products</h2>
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
    </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
  export default { 
    data: () => ({
       options:["Good", "Robust", "Poor", "Great"],
       
    }),
    computed: {
      ...mapGetters({products:'productList', isloading:'getLoadState'}) 
    },
    methods:{
      
    },
    created()
    {
      this.$store.dispatch("getProducts")
    }
    
  }
</script>

<style scoped>
.btn {
  text-transform: unset !important;
  cursor: pointer;
}
</style>