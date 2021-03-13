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
                            <v-btn raised class="primary btn" @click="pickFile">Upload Image</v-btn>
                            <input 
                                type="file" 
                                style="display:none" 
                                ref="fileInput" 
                                accept="image/*" 
                                @change="onPickFile"
                            />
                            <div class="pt-2 mb-9" justify="center"><img :src="imageUrl" height="160px" width="230px"/></div>
                        <v-card-actions class="justify-center">
                        <v-btn
                            color="primary"
                            class="mb-6 btn"
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
            condition:null,
            image:null
        },
        
        imageUrl:null,
        imageName:'',
        items: ["Good", "Robust", "Poor", "Great"],
    }),
     methods: {
      submit () {
            this.$store.dispatch("CreateProduct", this.product).then(()=>{
                this.$router.push('/user/products')
            })
      },
      pickFile()
      {
        this.$refs.fileInput.click()
      },
      onPickFile(event)
      {
           const files = event.target.files
           if(files[0] !== undefined){
               this.imageName = files[0].name
              if(this.imageName.lastIndexOf('.') <= 0){
                  return
              }
              const fileReader = new FileReader()
              fileReader.readAsDataURL(files[0])
              fileReader.addEventListener('load', () => {
                  this.imageUrl = fileReader.result,
                  this.product.image = files[0]
              })
           }else {
               this.imageUrl= null,
               this.imageName=null,
               this.product.image=null
           }
      }
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