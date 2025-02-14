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
      class="mySwiper hidden-sm-and-down"
    >
    <swiper-slide>
      <v-card>
        <v-card-title primary-title> Prayer & quraan App </v-card-title>
        <img src="../assets/Screenshot from 2024-10-24 11-37-09.png" />
        <v-card-actions class="d-flex">
          <v-rating
            size="md"
            hover
            color="primary"
            half-increments
          ></v-rating>
          <v-spacer></v-spacer>
          <a href="https://prayer-alpha.vercel.app/"
            ><v-btn color="blue-lighten-3" prepend-icon="mdi-share"
              >view</v-btn
            ></a
          >
        </v-card-actions>
      </v-card>
    </swiper-slide>

    <swiper-slide>
      <v-card>
        <v-card-title primary-title> Full E-commerce Website </v-card-title>
        <img src="../assets/Screenshot from 2024-10-24 11-40-57.png" />
        <v-card-actions class="d-flex">
          <v-rating
            size="md"
            hover
            color="primary"
            half-increments
          ></v-rating>
          <v-spacer></v-spacer>
          <a href="https://e-commerce-18px.vercel.app/"
            ><v-btn color="blue-lighten-3" prepend-icon="mdi-share"
              >View</v-btn
            ></a
          >
        </v-card-actions>
      </v-card>
    </swiper-slide>
    <swiper-slide>
      <v-card>
        <v-card-title primary-title> Movie app Api </v-card-title>
        <img src="../assets/Screenshot from 2024-10-24 11-48-30.png" />
        <v-card-actions class="d-flex">
          <v-rating
            size="md"
            hover
            color="primary"
            half-increments
          ></v-rating>
          <v-spacer></v-spacer>
          <a href="https://movie-app-umber-beta.vercel.app/"
            ><v-btn color="blue-lighten-3" prepend-icon="mdi-share"
              >view</v-btn
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

    <div class="hidden-md-and-up mt-5" id="proj1">
      <h2 style="text-align: center;opacity: 0.3;">MY PROJECTS </h2>
      <v-img src="../assets/laptop-3214756_640.png" style="width:70%;margin:auto" </v-img>
        <v-row class="mt-4 pa-5">
          <v-col sm="6" cols="12">
            <v-card variant="outlined" class="bg-grey-lighten-3">
              <div class="bg-grey"> <v-card-title>MovieApp</v-card-title>
                <v-card-text>
                  <p> This App that you can search of movie and show trailer of movie and Actors & others<br> It
                    develope with vue js&vuetify&api </p>
                </v-card-text>
              </div>

              <v-divider :thickness="6" color="black" class="mb-2"></v-divider>
              <v-img src="../assets/5.png" style="width:100%;max-height:350px"></v-img>
              <v-img src="../assets/6.png" style="width:100%;max-height:350px"></v-img>
              <v-card-actions style="display: flex;justify-content: center;">
                <div>
                  <v-btn href="https://movie-app-umber-beta.vercel.app/" variant="flat" color="primary" rounded="10"
                    class="mr-3"><v-icon>mdi-eye</v-icon></v-btn>
                  <v-btn href="https://github.com/AMAJ11/MovieApp" variant="flat" color="primary"
                    rounded="10"><v-icon>mdi-github</v-icon></v-btn>
                </div>
              </v-card-actions>
            </v-card>

          </v-col>
          <v-col sm="6" cols="12">
            <v-card class="bg-grey-lighten-3" variant="outlined">
              <div class="bg-blue-lighten-3"> <v-card-title>Islamic App</v-card-title>
                <v-card-text>
                  <p> This App that you can show pryertime and quraan read <br> It develope with vue js&vuetify&api </p>
                </v-card-text>
              </div>

              <v-divider :thickness="6" color="black" class="mb-2"></v-divider>
              <v-img src="../assets/Screenshot from 2024-10-24 11-37-09.png" style="width:100%;max-height:350px"></v-img>
              <v-img src="../assets/Screenshot from 2025-02-09 19-39-48 copy.png" style="width:100%;max-height:350px"></v-img>
              <v-card-actions style="display: flex;justify-content: center;">
                <div>
                  <v-btn href="https://prayer-alpha.vercel.app/" variant="flat" color="primary" rounded="10"
                    class="mr-3"><v-icon>mdi-eye</v-icon></v-btn>
                  <v-btn href="https://github.com/AMAJ11/Prayer" variant="flat" color="primary"
                    rounded="10"><v-icon>mdi-github</v-icon></v-btn>
                </div>
              </v-card-actions>
            </v-card>

          </v-col>
          <v-col sm="6" cols="12">
            <v-card class="bg-grey-lighten-3" variant="outlined">
              <div class="bg-success"> <v-card-title>E-commerce Website</v-card-title>
                <v-card-text>
                  <p> An full Ecommerce Website <br> It develope with vue js&vuetify&api </p>
                </v-card-text>
              </div>

              <v-divider :thickness="6" color="black" class="mb-2"></v-divider>
              <v-img src="../assets/Screenshot from 2024-10-24 11-40-57.png" style="width:100%;max-height:350px"></v-img>
              <v-img src="../assets/Screenshot from 2025-02-09 20-00-43.png" style="width:100%;max-height:350px"></v-img>
              <v-card-actions style="display: flex;justify-content: center;">
                <div>
                  <v-btn href="https://e-commerce-18px.vercel.app/" variant="flat" color="primary" rounded="10"
                    class="mr-3"><v-icon>mdi-eye</v-icon></v-btn>
                  <v-btn href="https://github.com/AMAJ11/E-commerce" variant="flat" color="primary"
                    rounded="10"><v-icon>mdi-github</v-icon></v-btn>
                </div>
              </v-card-actions>
            </v-card>

          </v-col>
          <v-col sm="6" cols="12">
            <v-card class="bg-grey-lighten-3" variant="outlined">
              <div class="bg-brown"> <v-card-title>Contact Manager</v-card-title>
                <v-card-text>
                  <p> This CRUD App that you can manage your contacts It develope with vue </p>
                </v-card-text>
              </div>

              <v-divider :thickness="6" color="black" class="mb-2"></v-divider>
              <v-img src="../assets/3.png" style="width:100%;max-height:350px"></v-img>
              <v-img src="../assets/4.png" style="width:100%;max-height:350px"></v-img>
              <v-card-actions style="display: flex;justify-content: center;">
                <div>
                  <v-btn href="https://amaj11.github.io/contact/" variant="flat" color="primary" rounded="10"
                    class="mr-3"><v-icon>mdi-eye</v-icon></v-btn>
                  <v-btn href="https://github.com/AMAJ11/contact-manager" variant="flat" color="primary"
                    rounded="10"><v-icon>mdi-github</v-icon></v-btn>
                </div>
              </v-card-actions>
            </v-card>

          </v-col>
        </v-row>
    </div>


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

<style scoped>
.pro{min-height: 100vh;}
</style>
