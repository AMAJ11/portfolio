<template>
  <div class="home" style="height: 100vh">
    <v-container grid-list-xs>
      <v-row class="mt-16" style="position: fixed">
        <v-col cols="12" sm="12" md="8" lg="8">
          <h1 class="text-primary" data-aos="fade-right" data-aos-duration="1000">
            Ammar AJ, <br />
            Front-End developer
          </h1>
          <h3 data-aos="fade-right" data-aos-duration="1000">
            Hello, Im Front-end Developer Using Vue js, And I Am Always Eager To
            Evolve, Improve My skills, And Acquire New Ones
          </h3>
          <div class="btn" data-aos="fade-right" data-aos-duration="1000">
            <v-btn color="primary" variant="tonal" to="/project" class="bt mr-3"
              >My Projects <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn color="primary" variant="tonal" class="bt" to="/contact"
              >Contact me <v-icon>mdi-phone</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col class="hidden-md-and-down" lg="4">
          <img src="../assets/AMAJ - Copy.png" alt="" style="width:350px;border-radius:30%;padding:10px">
        </v-col>
      </v-row>
      <div class="ocean">

        <div class="wave"></div>
      </div>
    </v-container>
  </div>
</template>

<script></script>

<style scoped>

html, body { height: 100%; }
body {
  background:radial-gradient(ellipse at center, rgba(255,254,234,1) 0%, rgba(255,254,234,1) 35%, #B7E8EB 100%);
  overflow: hidden;
}

.ocean {
  height: 5%;
  width:100%;
  position:absolute;
  bottom:0;
  left:0;
  background: #015871;
}

.wave {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x;
  position: absolute;
  top: -198px;
  width: 6400px;
  height: 198px;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
}

/* .wave:nth-of-type(2) {
  top: -175px;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
  opacity: 1;
} */

@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}

@keyframes swell {
  0%, 100% {
    transform: translate3d(0,-25px,0);
  }
  50% {
    transform: translate3d(0,5px,0);
  }
}
.home {
  width: 100%;
  padding-top: 2%;
  position:fixed;
  z-index: 1;
}
.home .btn {
  margin-top: 20px;
}
.home h1 {
  font-size: 70px;
}
@media (max-width: 1280px) {
  .home h1 {
    font-size: 40px;
  }
  .home .btn {
    transform: translate(0, 250%);
    margin-top: 0;
  }
}
@media (max-width: 382px) {
  .home .btn {
    transform: translate(0, 80%);
    margin-top: 0;
  }
  .home .btn .bt {
    margin-top: 5px;
    width:45%
  }
}
@media (max-width: 500px) {
  .home {
    text-align: center;
    line-height: 30px;
  }
  .home h1 {
    margin-bottom: 20px;
    font-size: 30px;
  }
}
</style>
