<template>
<div>
      <v-dialog v-model="show" width="500px">
        <v-toolbar
              dark
              color="primary"
              >
              <v-toolbar-title>Update Product</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                  <v-btn
                      icon
                      dark
                      @click.stop="show = false"
                  >
                  <v-icon>mdi-close</v-icon>
              </v-btn>
              </v-toolbar-items>
          </v-toolbar>
        <v-card>
            <v-form
                class="mx-4 pt-5"
            >
                <v-text-field
                v-model="product.name"
                label="Name"
                required
                dense
                outlined
                ></v-text-field>
                <v-text-field
                v-model="product.price"
                label="Price"
                required
                type="number"
                dense
                outlined
                ></v-text-field>
                    <v-text-field
                v-model="product.quantity"
                label="Quantity"
                required
                type="number"
                dense
                outlined
                ></v-text-field>
                    <v-textarea
                    outlined
                    v-model="product.description"
                    label="Description"
                    placeholder="Please give a description of this product"
                    ></v-textarea>
                <v-select
                v-model="product.condition"
                :items="items"
                outlined
                dense
                label="Condition"
                required
                ></v-select>
                <v-card-actions class="justify-center">
                <v-btn
                color="primary"
                class="mb-3 btn"
                @click.stop="SaveProduct"
                >
                Save Product
                </v-btn>
            </v-card-actions>
            </v-form>
        </v-card>
      </v-dialog>
    </div>
</template>

 <script>
  export default {
    props:["product", "visible"],
    data: () => ({
      valid: true,
      updated_product: {},
      select: null,
      items: ["Good", "Robust", "Poor", "Great"],
       
    }),

    methods: {
      SaveProduct() {
        var updated_product_details ={
          name:this.product.name,
          price:this.product.price,
          quantity:this.product.quantity,
          description:this.product.description,
          condition:this.product.condition,
          id:this.product.id
        }
        this.updated_product = Object.assign({}, updated_product_details)
        this.$store.dispatch("UpdateProduct", this.updated_product)
        this.show=false
      },
       
    },
    computed: {
      show: {
        get()
        {
          return this.visible
        },
        set(value)
        {
          if(!value){
              this.$emit('close')
          }
        }
      }
    }
    
  }
</script>


<style scoped>
.btn {
    text-transform: unset !important;
    cursor: pointer;
    width:160px
}
</style>