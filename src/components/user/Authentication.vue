<template>
    <v-container>
        
        <!-- dialog for loading message -->
        <div >
            <v-dialog 
                 v-model="dialog"
                 width="300"
            >
                <v-card>
                    <div class="pt-7 pl-2 text-center">
                        <p>Creating your Account! Please wait...</p>
                        <v-progress-circular
                            :size="50"
                            :width="5"
                            color="primary"
                            indeterminate
                        ></v-progress-circular>
                    </div>
                    
                </v-card>
            </v-dialog>
            
        </div>
         
        <v-flex>
            <v-row class="justify-center mt-9">
                <v-col class="col-6">
                   <v-card color="primary">
                        <v-tabs
                            v-model="tab"
                            color="primary"
                            background-color="primary"
                            active-class="dark"
                            grow
                        >
                            <v-tab
                                v-for="item in items"
                                :key="item"
                                @change="SetUrl(item)"    
                            >
                                {{ item }} 
                            </v-tab>
                        </v-tabs>
                        <v-tabs-items v-model="tab">
                            <v-tab-item
                                v-for="item in items"
                                :key="item"
                            >
                                <v-form  @submit.prevent="submit">
                                    <v-card
                                    flat
                                    class="mt-7 mx-5"
                                    >
                                        <v-text-field
                                            v-if="tab == 0"
                                            v-model="user.name"
                                            label="Name"
                                            required
                                            name="name"
                                            id="name"
                                            dense
                                            outlined
                                        ></v-text-field>
                                        <v-text-field
                                            v-model="user.email"
                                            label="Email"
                                            required
                                            type="email"
                                            name="email"
                                            id="email"
                                            dense
                                            outlined
                                        ></v-text-field>
                                        <v-text-field
                                            v-if="tab == 0"
                                            v-model="user.telephone"
                                            label="Telephone"
                                            required
                                            name="telephone"
                                            id="telephone"
                                            dense
                                            outlined
                                        ></v-text-field>
                                        <v-text-field
                                            v-model="user.password"
                                            label="Password"
                                            required
                                            type="password"
                                            name="password"
                                            id="password"
                                            dense
                                            outlined
                                        ></v-text-field>
                                        <v-card-actions class="justify-center">
                                            <v-btn
                                                color="primary"
                                                class="mb-3 btn"
                                                type="submit"
                                                :disabled="!LoginFormIsValid"
                                                v-if="tab =='1'"
                                               
                                                >
                                                Login<v-icon class="ml-4">login</v-icon>
                                            </v-btn> 
                                            <v-btn
                                                color="primary"
                                                class="mb-3 btn"
                                                type="submit"
                                                :disabled="!RegisterFormIsValid"
                                                v-if="tab == '0'"
                                            
                                                >
                                                Register<v-icon class="ml-4">person_add</v-icon>
                                            </v-btn>  
                                        </v-card-actions>
                                    </v-card>
                                </v-form>
                            </v-tab-item>
                        </v-tabs-items>
                    </v-card>
                </v-col>
            </v-row>
        </v-flex>
    </v-container>
</template>


<script>
  export default {
    data () {
      return {
        tab: "register",
        dialog:false,
        items: [
           'register','login'
        ],
        user: {
            name:null,
            email:null,
            telephone:null,
            password:null
        }
      }
    },
    methods: {
        submit() 
        {
            if(this.tab =="0"){
                this.$store.dispatch("Register", this.user).then(() => {
                    this.dialog =  true
                })
            }else{
                this.$store.dispatch("Login", this.user) 
            }
        },
        SetUrl(item)
        {
           return this.$router.push(item)
        }
         
    },
    computed: {
        RegisterFormIsValid()
        {
            return this.user.name !== null && 
                    this.user.email !== null &&
                    this.user.telephone !== null &&
                    this.user.password !== null &&
                    this.user.password.length >= 8
        },
        LoginFormIsValid()
        {
            return this.user.email !== null &&
                    this.user.password !== null &&
                    this.user.password.length >= 8
        },
        getUser()
        {
            return this.$store.getters.getUser
        },
         
    },
    watch: {
        getUser(value)
        {
            if(value !== null  && value !== undefined)
            {
                this.$router.push('/')
            }
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
.v-progress-circular {
  margin: 1rem;
}
</style>