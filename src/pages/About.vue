<template>
  <div class="pro">
    <v-container>
      <v-row class="mt-3">
        <v-col cols="12" class="my-5 col">
          <p class="text-h5">
            <span style="color: #1b2590"> Hello</span>, Im Ammar Apo Jeab, Front
            end developer. <br />
            I Study ITE in Damascuse university. <br />
            Age: 19
          </p>
        </v-col>
      </v-row>
      <v-row class="mt-2 col">
        <v-col class="mt-2 align-center" cols="12" lg="3">
          <h1>Skills</h1>
          <img
            class="idea hidden-md-and-down"
            style="
              width: 250px;
              background: black;
              border-radius: 160px;
              translate: 0 -125px;
            "
            src="../assets/light-bulb.gif"
            alt=""
          />
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" lg="8" class="">
          <v-row>
            <v-col cols="5" sm="4" md="4" lg="3" class="img"
              ><img
                data-aos="fade-down"
                data-aos-duration="2500"
                style="width: 100px"
                src="../assets/html.png"
                alt=""
              />
              <h2 style="translate: 20px; color: white">HTML</h2>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="5" sm="4" md="4" lg="3" class="img"
              ><img
                data-aos="fade-left"
                data-aos-duration="2500"
                style="width: 100px"
                src="../assets/css.png"
                alt=""
              />
              <h2 style="translate: 25px; color: white">CSS</h2>
            </v-col>
            <v-col cols="5" sm="4" md="4" lg="3" class="img"
              ><img
                data-aos="fade-down"
                data-aos-duration="2500"
                style="width: 100px"
                src="../assets/js.png"
                alt=""
              />
              <h2 style="color: white">JavaScript</h2>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="5" sm="4" md="4" lg="3" class="img"
              ><img
                data-aos="fade-left"
                data-aos-duration="2500"
                style="width: 100px"
                src="../assets/vue.png"
                alt=""
              />
              <h2 style="translate: 15px; color: white">Vue js</h2>
            </v-col>
            <v-col cols="5" sm="4" md="4" lg="3" class="img"
              ><img
                data-aos="fade-down"
                data-aos-duration="2500"
                style="width: 100px"
                src="../assets/vuetify.png"
                alt=""
              />
              <h2 style="translate: 15px; color: white">Vuetify</h2>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="5" sm="4" md="4" lg="3" class="img"
              ><img
                data-aos="fade-left"
                data-aos-duration="2500"
                style="width: 100px"
                src="../assets/bootstrap.png"
                alt=""
              />
              <h2 style="color: white">Bootstrap</h2>
            </v-col>
            <v-col cols="5" sm="4" md="4" lg="3" class="img"
              ><img
                data-aos="fade-down"
                data-aos-duration="2500"
                style="width: 100px"
                src="../assets/cmd.png"
                alt=""
              />
              <h2 style="translate: 25px; color: white">Cmd</h2>
            </v-col>
            <v-spacer class="hidden-sm-and-up"></v-spacer>
            <v-col cols="5" sm="4" md="4" lg="3" class="img"
              ><img
                data-aos="fade-left"
                data-aos-duration="2500"
                style="width: 100px"
                src="../assets/cs.png"
                alt=""
              />
              <h2 style="translate: 35px; color: white">C#</h2>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "about",
  data: function () {
    return {
      id: true,
      sr: "",
    };
  },
  methods: {
    hov: function (lang) {
      if (screen.width > 600) {
        this.id = false;
        this.sr = lang;
      }
    },
    leave: function () {
      this.id = true;
    },
  },
};
</script>

<style scoped>
.pro {
  padding-top: 6%;
  padding-left: 5%;
}
.col {
  border: 1px dashed white;
  border-radius: 20px;
}
.img img {
transition: 0.1s;
  border-radius: 10px;
}
.img img:hover {
  scale: 1.1;
}
.idea {
  position: absolute;
  bottom: 95px;
}
@media (max-width: 1000px) {
}
</style>
