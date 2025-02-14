<template>
  <router-view class="view" />
  <v-layout>
    <v-app-bar class="pr-5">
      <v-app-bar-title class="hidden-xs">AMAJ</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn class="hidden-sm-and-down" color="primary" to="/">Home</v-btn>
      <v-btn class="hidden-sm-and-down" to="/about">About</v-btn>
      <v-btn class="hidden-sm-and-down" to="/project">project</v-btn>
      <v-btn class="hidden-sm-and-down" to="/contact">Contact</v-btn>
   <div style="display: flex;justify-content: space-between;" class="hidden-md-and-up hidden-xs">
      <v-btn class="hidden-md-and-up hidden-xs" color="primary" to="/">  <v-icon>mdi-home</v-icon> </v-btn>
      <v-btn class="hidden-md-and-up hidden-xs" to="/about">  <v-icon>mdi-help</v-icon> </v-btn>
      <v-btn class="hidden-md-and-up hidden-xs" to="/project">  <v-icon>mdi-laptop</v-icon> </v-btn>
      <v-btn class="hidden-md-and-up hidden-xs" to="/contact">  <v-icon>mdi-phone</v-icon> </v-btn>
    </div>

    <div style="display: flex;justify-content: space-between;width:100%" class="hidden-sm-and-up px-5">
      <v-btn class="hidden-sm-and-up" color="primary" to="/">  <v-icon>mdi-home</v-icon> </v-btn>
      <v-btn class="hidden-sm-and-up" to="/about">  <v-icon>mdi-help</v-icon> </v-btn>
      <v-btn class="hidden-sm-and-up" to="/project">  <v-icon>mdi-laptop</v-icon> </v-btn>
      <v-btn class="hidden-sm-and-up" to="/contact">  <v-icon>mdi-phone</v-icon> </v-btn>
    </div>
    </v-app-bar>
    <!-- <v-navigation-drawer style="position: fixed" class="hidden-md-and-up" v-model="this.op">
      <v-list>
        <v-list-item append-icon="mdi-home" color="primary" title="Home" to="/" value="home"></v-list-item>
        <v-list-item append-icon="mdi-help" color="primary" title="About" to="/about" value="About"></v-list-item>
        <v-list-item append-icon="mdi-laptop" color="primary" title="Projects" to="/project"
          value="Projects"></v-list-item>
        <v-list-item append-icon="mdi-phone" color="primary" title="Contact" value="Contact"
          to="/contact"></v-list-item>
      </v-list>
    </v-navigation-drawer> -->
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

<style>
.view {
  background-repeat: repeat;
  background-color: #1d1d1d;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23000000' fill-opacity='0.21'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E");}
</style>
