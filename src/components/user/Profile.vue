<template>
      <v-container fluid>
        <div class="pt-10">
            <v-row justify="center">
                <v-col class="col-5">
                    <v-card
                    >
                        <div class="text-center">
                             
                            <img src="@/assets/user.png"  width="100" height="100" />
                        </div>
                        <div>
                            <v-card-title>Name: {{user.name}}</v-card-title>
                            <v-card-title>E-mail: {{user.email}}</v-card-title>
                            <v-card-title>Telephone : {{user.telephone}}</v-card-title>
                        </div>
                        <v-card-actions class="mt-5 mr-2 mb-8">
                            <v-btn
                                color="primary"
                                class="btn ml-3"
                                text
                                @click="dialog =true"
                            >
                            <v-icon left>edit</v-icon>
                                Update Profile
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </div>
        <div>
                <v-dialog 
                 v-model="dialog"
                 width="450">
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
                        @click.stop="dialog = false"
                    >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                </v-toolbar-items>
                </v-toolbar>
                <v-card>
                    <div>
                        <v-form
                                class="mx-4 pt-5"
                            >
                                <v-text-field
                                    v-model="user.name"
                                    label="Name"
                                    required
                                    dense
                                    outlined
                                ></v-text-field>
                                <v-text-field
                                    v-model="user.email"
                                    label="Email"
                                    required
                                    dense
                                    outlined
                                ></v-text-field>
                                <v-text-field
                                    v-model="user.telephone"
                                    label="Telephone"
                                    required
                                    dense
                                    outlined
                                ></v-text-field>
                        
                                <v-card-actions class="justify-center">
                                <v-btn
                                    color="primary"
                                    class="mb-3 btn"
                                    @click.stop="SaveUser"
                                    >
                                    Save Details
                                    </v-btn>
                                </v-card-actions>
                            </v-form>
                    </div>
                </v-card>
            </v-dialog>
        </div>
    </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
  export default {
    data: () => ({
       dialog:false,
       updatedUser: {
       }
    }),

    methods: {
      SaveUser () {
          this.updatedUser = Object.assign({}, this.user)
          this.$store.dispatch("updateProfile", this.updatedUser).then(() => {
              this.dialog = false
          })
      },
    },
    computed:
    {
        ...mapGetters({user:'getUser'})
    }
  }
</script>