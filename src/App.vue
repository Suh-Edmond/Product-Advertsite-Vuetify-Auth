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

          <v-list-item to="/user/products">
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
         
    >
    <v-app-bar-nav-icon @click.native="drawer = true" class="d-sm-none"></v-app-bar-nav-icon>
      <v-toolbar-title><h3>Product Advert</h3></v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="d-sm-flex">
          
          <v-btn text to="/">
            <v-icon left>home</v-icon>Home
          </v-btn>
           
          <v-btn text to="/user/products">
            <v-icon left></v-icon>My Products
          </v-btn>
            <v-btn text to="#">
            <v-icon left></v-icon>Contact us
          </v-btn>
            <v-btn text to="#">
            <v-icon left></v-icon>About us
          </v-btn>
          <v-btn text to="/user/register">
            <v-icon left>person_add</v-icon>Sign Up
          </v-btn>
          <v-btn text to="/user/login">
            <v-icon left>login</v-icon>Sign In
          </v-btn>
          <v-btn text>
            <v-icon left>logout</v-icon>Logout
          </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
     <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
 

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    drawer:false
  }),
};
</script>
