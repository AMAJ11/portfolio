<template>
  <div class="home" style="height: auto">
    <v-container grid-list-xs>
      <v-row class="mt-16" style="height:auto">
        <v-col cols="12" sm="8" md="8" lg="8">
          <h1 class="text-primary" data-aos="fade-right" data-aos-duration="1000">
            Ammar AJ, <br />
            Front-End developer
          </h1>
          <h3 data-aos="fade-right" data-aos-duration="1000">
            Hello, Im Front-end Developer Using Vue js, And I Am Always Eager To
            Evolve, Improve My skills, And Acquire New Ones
          </h3>
          <div class="btn"  data-aos="fade-right" data-aos-duration="1000">
            <v-btn color="primary" style="min-width: 200px;" variant="tonal" target="_blank" href="https://drive.google.com/file/d/1-R-kT8ufcvO2SpTgejol8MorImPxx8zg/view?usp=drive_link" class="bt mr-3"
              >Download My CV <v-icon>mdi-download</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col class="hidden-xs " sm="4" lg="4">
          <div class="card1">
            <img src="../assets/AMAJ__1_-removebg-preview.png" alt="" style="width:90%">
            <span class="top"></span>
            <span class="right"></span>
            <span class="bottom"></span>
            <span class="left"></span>
          </div>

        </v-col>
      </v-row>
      <div class="ocean" style="height: 5px">

        <div class="wave" style=""></div>
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
  bottom:-15%;
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

@media (max-height:450px) {
 .ocean{display: none;}
  .home {
   padding-top: 0;
  }
  .home h3{
    font-size: small !important;
  }
  .home .bt{font-size: small !important}

}
@media (min-height:450px){
  .home{position: fixed;}
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
  min-height: 100vh;
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





.card1 {
  margin-right: 10px;
  position: relative;
  color: #fff;
  background: transparent;
  overflow: hidden;

  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1em;
}

p {
  font-size: 0.95rem;
  text-align: center;
}

span {
  position: absolute;
  border-radius: 100vmax;
}

.top {
  top: 0;
  left: 0;
  width: 0;
  height: 5px;
  background: linear-gradient(
    90deg,
    transparent 50%,
    rgba(5, 5, 111, 0.5),
    rgb(13, 17, 237)
  );
}

.bottom {
  right: 0;
  bottom: 0;
  height: 5px;
  background: linear-gradient(
    90deg,
    rgb(72, 0, 255),
    rgba(0, 110, 255, 0.5),
    transparent 50%
  );
}

.right {
  top: 0;
  right: 0;
  width: 5px;
  height: 0;
  background: linear-gradient(
    180deg,
    transparent 30%,
    rgba(0, 255, 255, 0.5),
    rgb(0, 255, 255)
  );
}

.left {
  left: 0;
  bottom: 0;
  width: 5px;
  height: 0;
  background: linear-gradient(
    180deg,
    rgb(164, 161, 255),
    rgba(64, 0, 255, 0.5),
    transparent 70%
  );
}

.top {
  animation: animateTop 3s ease-in-out infinite;
}

.bottom {
  animation: animateBottom 3s ease-in-out infinite;
}

.right {
  animation: animateRight 3s ease-in-out infinite;
}

.left {
  animation: animateLeft 3s ease-in-out infinite;
}

@keyframes animateTop {
  25% {
    width: 100%;
    opacity: 1;
  }

  30%,
  100% {
    opacity: 0;
  }
}

@keyframes animateBottom {
  0%,
  50% {
    opacity: 0;
    width: 0;
  }

  75% {
    opacity: 1;
    width: 100%;
  }

  76%,
  100% {
    opacity: 0;
  }
}

@keyframes animateRight {
  0%,
  25% {
    opacity: 0;
    height: 0;
  }

  50% {
    opacity: 1;
    height: 100%;
  }

  55%,
  100% {
    height: 100%;
    opacity: 0;
  }
}

@keyframes animateLeft {
  0%,
  75% {
    opacity: 0;
    bottom: 0;
    height: 0;
  }

  100% {
    opacity: 1;
    height: 100%;
  }
}

@media (max-width:1000px) {
  .card1 img{height: 200px; width:200px !important; margin: 0 !important;}
.card1{display: block;}
}
</style>
