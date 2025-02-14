<template>
  <div class="contact">
    <v-container>
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
            <v-card class="mt-8" theme="dark" style="width: 80%;margin:auto">
              <v-form action="" @submit.prevent="validate" ref="form">
                <v-text-field v-model="this.userName" label="Name" :rules="this.usernamerule"></v-text-field>
                <v-text-field type="number" v-model="this.num" label="Phone Number"
                  :rules="this.usernamerule"></v-text-field>
                <v-textarea v-model="this.message" label="Message" :rules="this.usernamerule"></v-textarea>
                <v-btn type="submit" block>SEND</v-btn>
              </v-form>
            </v-card>
            <h2>Gmail: apo.zouher@gmail.com</h2>
            </v-col
          >
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  </div>
  <v-dialog v-model="this.show" class="w-25">
    <v-card class=""><v-card-title class="text-success"> Message Sending Successfully </v-card-title>
      <v-btn color="red" append-icon="mdi-close" @click="this.show=false">close</v-btn>
    </v-card>

  </v-dialog>
</template>

<script>
import axios from 'axios';
export default {
  data: function () {
    return {
      show:false,
      num: '',
      userName: "",
      message: "",
      usernamerule:
        [(userName) => {
          if (userName) return true
          return 'You must enter this Field.'
        }],
    }
  },
  methods: {

    validate: async function () {
      const botToken = '7627006432:AAEOv-s0PkynaJVa7ewRfdGDPaEK_pncovY'; // استبدل برمز الوصول الخاص بك
      const chatId = '6568921630'; // استبدل بمعرف الدردشة أو المستخدم
      const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent("Name: " + this.userName + "\n" + "Phone Number: " + this.num + "\n" + this.message)}`;
      await this.$refs.form.validate()
        .then(valid => {
          if (valid.valid == true) {

            axios.post(apiUrl)
              .then(response => {
                console.log('Message sent:', response.data);
                this.show= true;
                this.userName = ""
                this.message = ""
                this.num = ""
              })
              .catch(error => {
                console.error('Error sending message:', error);
              });




          }
        })
    }



  },


};
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
.contact{min-height: 100vh;}
</style>
