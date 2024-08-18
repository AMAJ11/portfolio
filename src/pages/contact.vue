<template>
  <div class="contact">
    <v-row class="ro mt-16">
      <v-col cols="12" md="5" sm="5" style="height: 50vh; text-align: center">
        <h2>Contact Me</h2>
        <img
          src="../assets/R.gif"
          alt=""
          style="
            width: 100%;
            border-radius: 30px;
            height: 80%;
            max-width: 400px;
            max-height: 300px;
          "
          data-aos="flip-left"
          data-aos-duration="1500"
        />
      </v-col>
      <v-spacer></v-spacer>
      <v-col
        cols="12"
        md="6"
        sm="6"
        style="border-radius: 15px; text-align: center"
      >
        <v-row>
          <v-col style="animation-delay: 0.2s" cols="6" md="4"
            ><a href="https://www.facebook.com/ammar.aj.927"
              ><v-btn
                class="social"
                style="height: 100px; width: 100px; border-radius: 50%"
                color="primary"
                ><v-icon size="xxx-large">mdi-facebook</v-icon></v-btn
              ></a
            ></v-col
          >

          <v-col cols="6" md="4" style=""
            ><a href="https://www.instagram.com/ammar.aj.927/"
              ><v-btn
                class="social"
                style="
                  animation-delay: 0.9s;
                  height: 100px;
                  width: 100px;
                  border-radius: 50%;
                "
                color="red"
                ><v-icon size="xxx-large">mdi-instagram</v-icon></v-btn
              ></a
            ></v-col
          >

          <v-col cols="6" md="4" style=""
            ><a href="https://github.com/AMAJ11/"
              ><v-btn
                class="social"
                style="
                  animation-delay: 0.3s;
                  height: 100px;
                  width: 100px;
                  border-radius: 50%;
                "
                color="dark"
                ><v-icon size="xxx-large">mdi-github</v-icon></v-btn
              ></a
            ></v-col
          >

          <v-col cols="6" md="6" style=""
            ><a href="https://www.linkedin.com/in/ammar-amaj-606579202/"
              ><v-btn
                class="social"
                style="
                  animation-delay: 0.4s;
                  height: 100px;
                  width: 100px;
                  border-radius: 50%;
                "
                color="white"
                ><v-icon size="xxx-large" color="primary">mdi-linkedin</v-icon></v-btn
              ></a
            ></v-col
          >

          <v-col cols="6" md="6">
            <a href="https://api.whatsapp.com/send/?phone=963937379312">
              <v-btn
                class="social"
                style="height: 100px; width: 100px; border-radius: 50%"
                color="success"
                ><v-icon size="xxx-large">mdi-whatsapp</v-icon></v-btn
              ></a
            ></v-col
          >

          <v-col cols="12" md="12"
            >
            <h2>Gmail: apo.zouher@gmail.com</h2>
            </v-col
          >
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact {
  padding: 10%;
}
@media (max-width: 900px) {
  .ro {
    margin-top: 50px;
  }
}
@keyframes social {
  0% {
    translate: 0px 5px;
  }
  100% {
    translate: -0px -5px;
  }
}
.social {
  animation-name: social;
  animation-duration: 0.8s;
  animation-timing-function: linear;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  transition: 0.5s;
}
.social:hover {
  animation: none;
  scale: 1.1;
}
</style>
