<template>
  <router-view />
  <v-layout>
    <v-app-bar theme="dark" class="pr-5">
      <v-app-bar-title>Portfolio</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn class="hidden-sm-and-down" color="primary" to="/">Home</v-btn>
      <v-btn class="hidden-sm-and-down" to="/about">About</v-btn>
      <v-btn class="hidden-sm-and-down" to="/project">project</v-btn>
      <v-btn class="hidden-sm-and-down" to="/contact">Contact</v-btn>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="open"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      style="position: fixed"
      class="hidden-md-and-up"
      v-model="this.op"
    >
      <v-list>
        <v-list-item
          append-icon="mdi-home"
          color="primary"
          title="Home"
          to="/"
          value="home"
        ></v-list-item>
        <v-list-item
          append-icon="mdi-help"
          color="primary"
          title="About"
          to="/about"
          value="About"
        ></v-list-item>
        <v-list-item
          append-icon="mdi-laptop"
          color="primary"
          title="Projects"
          to="/project"
          value="Projects"
        ></v-list-item>
        <v-list-item
          append-icon="mdi-phone"
          color="primary"
          title="Contact"
          value="Contact"
          to="/contact"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      op: false,
    };
  },
  methods: {
    open: function () {
      this.op = !this.op;
    },
  },
};
</script>
