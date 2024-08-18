<template>
  <div class="pro">
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <v-card>
          <v-card-title primary-title> Islamic App </v-card-title>
          <img src="../assets/1.png" />
          <v-card-actions class="d-flex">
            <v-rating
              size="md"
              hover
              color="primary"
              half-increments
            ></v-rating>
            <v-spacer></v-spacer>
            <a href="https://islami.en.uptodown.com/windows"
              ><v-btn color="blue-lighten-3" prepend-icon="mdi-share"
                >Download</v-btn
              ></a
            >
          </v-card-actions>
        </v-card>
      </swiper-slide>

      <swiper-slide>
        <v-card>
          <v-card-title primary-title> Digital clock </v-card-title>
          <img src="../assets/3.png" />
          <v-card-actions class="d-flex">
            <v-rating
              size="md"
              hover
              color="primary"
              half-increments
            ></v-rating>
            <v-spacer></v-spacer>
            <a href="https://digital-clock.en.uptodown.com/windows"
              ><v-btn color="blue-lighten-3" prepend-icon="mdi-share"
                >Download</v-btn
              ></a
            >
          </v-card-actions>
        </v-card>
      </swiper-slide>

      <swiper-slide>
        <v-card>
          <v-card-title primary-title> Contacts manager </v-card-title>
          <img src="../assets/Annotation 2024-06-28 195541.png" />
          <v-card-actions class="d-flex">
            <v-rating
              size="md"
              hover
              color="primary"
              half-increments
            ></v-rating>
            <v-spacer></v-spacer>
            <a href="https://amaj11.github.io/contact/"
              ><v-btn color="blue-lighten-3" prepend-icon="mdi-share"
                >view</v-btn
              ></a
            >
          </v-card-actions>
        </v-card>
      </swiper-slide>

      <swiper-slide>
        <v-card>
          <v-card-title primary-title> Almajd Academy </v-card-title>
          <img src="../assets/Annotation 2024-07-27 202105.png" />
          <v-card-actions class="d-flex">
            <v-rating
              size="md"
              hover
              color="primary"
              half-increments
            ></v-rating>
            <v-spacer></v-spacer>
            <a href="https://amaj11.github.io/ALMAJD/"
              ><v-btn color="blue-lighten-3" prepend-icon="mdi-share"
                >view</v-btn
              ></a
            >
          </v-card-actions>
        </v-card>
      </swiper-slide>

      <swiper-slide>
        <v-card>
          <v-card-title primary-title> Simple OnlineStore </v-card-title>
          <img src="../assets/A 204027.png" />
          <v-card-actions class="d-flex">
            <v-rating
              size="md"
              hover
              color="primary"
              half-increments
            ></v-rating>
            <v-spacer></v-spacer>
            <a href="https://am-store-iota.vercel.app/"
              ><v-btn color="blue-lighten-3" prepend-icon="mdi-share"
                >view</v-btn
              ></a
            >
          </v-card-actions>
        </v-card>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>

<style scoped></style>
