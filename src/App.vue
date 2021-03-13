<template>
  <v-app>
      <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
       
    >
      <v-list
        nav
        dense
        class="justify-center"
      >
        <v-list-item-group
          active-class="blue"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon left>home</v-icon>
            </v-list-item-icon>
            <v-list-item-content to="/">
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="{name:'UserProduct'}">
            <v-list-item-title>My Products</v-list-item-title>
          </v-list-item>

          <v-list-item to="#">
            <v-list-item-title>Contact us</v-list-item-title>
          </v-list-item>
          <v-list-item to="#">
            <v-list-item-title>About us</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon left>person_add</v-icon>
            </v-list-item-icon>
            <v-list-item-content to="/user/register">
              <v-list-item-title>Sign Up</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
            <v-list-item>
            <v-list-item-icon>
              <v-icon left>login</v-icon>
            </v-list-item-icon>
            <v-list-item-content to="/user/login">
              <v-list-item-title>Sign In</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon left>logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="primary"
      dark
      dense 
    >
    <v-app-bar-nav-icon @click.native="drawer = true" class="d-sm-none"></v-app-bar-nav-icon>
      <v-toolbar-title><h3>Product Advert</h3></v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="d-sm-flex">
          
          
          <v-tabs
            color="primary"
            background-color="primary"
            active-class="dark"
            grow
          >
              <v-tab @change="SetUrl(welcome)">
                Market Products
              </v-tab>
              <v-tab @change="SetUrl(product)" v-if="isAuthenticated">
                My Products
              </v-tab>
              <v-tab @change="SetUrl(about)">
                About us
              </v-tab>
              <v-tab @change="SetUrl(contact)">
                Contact Us
              </v-tab>
              <v-tab @change="SetUrl(signin)" v-if="!isAuthenticated">
                   <v-icon left>person_add</v-icon>SIGN IN
              </v-tab>
              <v-tab  v-if="isAuthenticated" >
                   
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              v-bind="attrs"
                              v-on="on"
                              text
                            >
                             <v-icon>person</v-icon>  
                            </v-btn>
                        </template> 
                        <v-list dense>
                          <v-list-item-group
                            color="primary"
                          >
                            <v-list-item
                            >
                              <v-list-item-content>
                                <v-list-item-title @click="logout"> <v-icon left>logout</v-icon>Logout</v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                            <v-list-item :to="{name:'UserProfile'}" 
                            >
                              <v-list-item-content>
                                <v-list-item-title @click="profile" > <v-icon left>person</v-icon>Profile</v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list-item-group>
                        </v-list>
                    </v-menu> 
                    
              </v-tab>
          </v-tabs>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
     <router-view></router-view>
    </v-main>
     <v-footer
        dark
        padless
      >
        <v-card
          class="flex"
          flat
          tile
        >

      <v-card-text class="py-2 white--text text-center">
        Copyright &copy; {{ new Date().getFullYear() }} — <strong>All Rights Reserve. </strong>
      
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    userName:null,
    drawer:false,
    user:null,
    welcome:'/',
    product:'/user/products',
    contact:'#',
    about:'#',
    signin:'/register',
   
     
    icons: [
        'facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
  }),
  computed: {
    isAuthenticated()
    {
      return this.$store.getters.getUser !== null && this.$store.getters.getUser !== undefined
    }
  },
  methods: {
    logout()
    {
      this.$store.dispatch("logout").then(() => {
         return this.$router.push('/register')
      })
    },
    profile()
    {
      this.$store.dispatch("UserProfile")
    },
    SetUrl(item)
    {
        return this.$router.push(item)
    }
  },
  mount()
  {
    this.userName = this.$store.getters.getUser.name
  }
   
};
</script>
