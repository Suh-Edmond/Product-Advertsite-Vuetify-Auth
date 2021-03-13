<template>
    <v-container fluid class="my-4">
        <!-- alert feedback message -->
        <v-row v-if="userProducts.length == 0" justify="center">
            
            <v-col class="col-6">
              <v-alert
                      type="warning"
                      close-text="Close Alert"
                      dark
                      dismissible
              >
              Sorry you don't have any product! Please add your products
              </v-alert>
            </v-col>
        </v-row>
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
             Product was successfully created
              </v-alert>
            </v-col>
        </v-row>
        <!-- slot state for prodduct -->
        <div >
            <v-dialog 
                 v-model="isloading"
                 width="350"
            >
                <v-card>
                    <div class="pa-4">
                        
                        <v-progress-circular
                            :size="60"
                            :width="3"
                            color="primary"
                            indeterminate
                        ></v-progress-circular>
                         <label>Fetching Products!Please wait...</label>
                    </div>
                    
                </v-card>
            </v-dialog>
        </div>
         <div class="ml-none mb-5">
            <h2>My Products</h2>
         </div>
        <div>
            <v-row dense  class="row-12" justify="center">
                 <v-col v-for="(product, index) in userProducts" :key="index" class="col-4">
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
        <div class="d-flex justify-end pt-3 mr-3 mb-20" style="height: 450px; position: relative">
            <v-btn fab fixed bottom right color="primary"  :to="{name:'AddProduct'}">
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
      userProducts: [],
      test:true
    }),
    computed: {
      ...mapGetters({products:'productList', user:'getUser', isloading:'getLoading'}) ,
       
    },
    methods:{
       
    },
    created()
    {
      for(var i in this.products)
          {
              if(this.products[i].userId == this.user.id){
                  this.userProducts.push(this.products[i])
              }
          }
      console.log(this.userProducts)
    }
    
  }
</script>

<style scoped>
.btn {
  text-transform: unset !important;
  cursor: pointer;
}
</style>