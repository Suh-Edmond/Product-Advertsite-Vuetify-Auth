<template>
    <v-container>
        <div>
            <v-row class="justify-center">
                <v-col class="col-6">
                     <v-card >
                         <v-card-title class="justify-center">Create New Product </v-card-title>
                        <v-form
                            ref="form"
                            class="mx-4"
                        >
                        <v-text-field
                        v-model="product.name"
                        label="Name"
                        required
                        name="name"
                        id="name"
                        dense
                        outlined
                        ></v-text-field>
                        <v-text-field
                        v-model="product.price"
                        label="Price"
                        required
                        type="number"
                        name="price"
                        id="price"
                        dense
                        outlined
                        ></v-text-field>
                        <v-text-field
                        v-model="product.quantity"
                        label="Quantity"
                        required
                        type="number"
                        name="quantity"
                        id="quantity"
                        dense
                        outlined
                        ></v-text-field>
                            <v-textarea
                            outlined
                            v-model="product.description"
                            name="description"
                            id="descrption"
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
                            <!-- <v-text-field
                            v-model="image"
                            dense
                            outlined
                            name="image"
                            id="image"
                            label="Product Image"
                            :rules="[v => !!v || 'please upload product image']"
                            type="file"
                            >
                            </v-text-field> -->
                        <v-card-actions class="justify-center">
                        <v-btn
                            color="primary"
                            class="mb-3 btn"
                            @click="submit"
                            :disabled="!FormIsValid"
                            >
                            Add Product
                        </v-btn>
                        </v-card-actions>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>


<script>
export default {
    data: () => ({
        product: {
            name:null,
            price:null,
            description:null,
            quantity:null,
            condition:null
        },
        items: ["Good", "Robust", "Poor", "Great"],
    }),
     methods: {
      submit () {
        this.$store.dispatch("CreateProduct", this.product).then(
            this.$router.push('/user/products')
        )
      },
      
    },
    computed: {
        FormIsValid()
        {
            return this.product.name !== null &&
                this.product.price !== null &&
                this.product.quantity !== null &&
                this.product.description !== null &&
                this.product.condition !== null
        }
    }
}
</script>

<style scoped>
.btn {
    text-transform: unset !important;
    cursor: pointer;
    width: 150px;;
}
</style>