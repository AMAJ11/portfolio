<template>
  <div class="contact pa-1 pa-sm-6 pt-16">
    <v-container>
      <v-row class="ro pt-6 pt-sm-16 mt-2 mt-sm-16">
        <v-col cols="12" md="5" sm="5" style="height: 50vh; text-align: center">
          <h2>Contact Me</h2>
          <img src="../assets/R.gif" alt="" style="
            width: 100%;
            border-radius: 30px;
            height: 80%;
            max-width: 400px;
            max-height: 300px;
          " data-aos="flip-left" data-aos-duration="1500" />
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" md="6" sm="6" style="border-radius: 15px; text-align: center">
          <v-row>
            <v-col style="animation-delay: 0.2s" cols="6" md="4"><a href="https://www.facebook.com/ammar.aj.927"><v-btn
                  class="social" style="height: 100px; width: 100px; border-radius: 50%" color="primary"><v-icon
                    size="xxx-large">mdi-facebook</v-icon></v-btn></a></v-col>

            <v-col cols="6" md="4" style=""><a href="https://www.instagram.com/ammar.aj.927/"><v-btn class="social"
                  style="
                  animation-delay: 0.9s;
                  height: 100px;
                  width: 100px;
                  border-radius: 50%;
                " color="red"><v-icon size="xxx-large">mdi-instagram</v-icon></v-btn></a></v-col>

            <v-col cols="6" md="4" style=""><a href="https://github.com/AMAJ11/"><v-btn class="social" style="
                  animation-delay: 0.3s;
                  height: 100px;
                  width: 100px;
                  border-radius: 50%;
                " color="dark"><v-icon size="xxx-large">mdi-github</v-icon></v-btn></a></v-col>

            <v-col cols="6" md="6" style=""><a href="https://www.linkedin.com/in/ammar-amaj-606579202/"><v-btn
                  class="social" style="
                  animation-delay: 0.4s;
                  height: 100px;
                  width: 100px;
                  border-radius: 50%;
                " color="white"><v-icon size="xxx-large" color="primary">mdi-linkedin</v-icon></v-btn></a></v-col>

            <v-col cols="6" md="6">
              <a href="https://api.whatsapp.com/send/?phone=963937379312">
                <v-btn class="social" style="height: 100px; width: 100px; border-radius: 50%" color="success"><v-icon
                    size="xxx-large">mdi-whatsapp</v-icon></v-btn></a></v-col>

            <v-col cols="12" md="12">
              <v-card class="mt-8" theme="dark" style="width: 100%;margin:auto">
                <v-form @submit.prevent="validated" ref="form">
                  <v-text-field v-model="userName" label="Name" :rules="usernamerule"></v-text-field>
                  <v-text-field type="number" v-model="this.num" label="Phone Number" :rules="numRule"></v-text-field>
                  <v-textarea v-model="this.message" label="Message" :rules="messageRule"></v-textarea>
                  <v-btn type="submit" :loading="sendLoading" block>SEND</v-btn>
                </v-form>
              </v-card>
              <v-btn append-icon="mdi-email" class="mt-3" color="red" @click="copyEmail">
                <v-icon left>mdi-content-copy</v-icon>
                copy Email </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <v-dialog v-model="show" class="w-75 w-md-50">
    <v-card class=""><v-card-title class="text-success" style="height: 20vh;"> Message Sending Successfully
      </v-card-title>
      <v-card-actions>
        <v-btn color="red" append-icon="mdi-close" @click="this.show = false">close</v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>
  <v-snackbar color="primary" v-model="snackbar" :timeout="2000">
    The email was copied successfully
    <template class="bg-primary" v-slot:action="{ attrs }">
      <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
        close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import axios from 'axios';
export default {
  data: function () {
    return {
      show: false,
      snackbar: false,
      email: "apo.zouher@gmail.com",
      num: '',
      userName: "",
      message: "",
      sendLoading: false,
      usernamerule:
        [() => {
          if (this.userName) return true
          else {
            return 'You must enter this Field.'
          }
        }],
      numRule:
        [() => {
          if (this.num) return true
          else {
            return 'You must enter this Field.'
          }
        }],
      messageRule:
        [() => {
          if (this.message) return true
          else {
            return 'You must enter this Field.'
          }
        }],
    }
  },
  methods: {
    async copyEmail() {
      try {
        await navigator.clipboard.writeText(this.email);
        this.snackbar = true; 
      } catch (err) {
        console.error("فشل النسخ: ", err);
      }
    },
    validated: async function () {

      const apiUrl = `https://api.telegram.org/bot7627006432:AAEOv-s0PkynaJVa7ewRfdGDPaEK_pncovY/sendMessage?chat_id=6568921630&text=${encodeURIComponent("Name: " + this.userName + "\n" + "Phone Number: " + this.num + "\n" + this.message)}`;
      await this.$refs.form.validate()
        .then(valid => {
          if (valid.valid == true) {
            this.sendLoading = true
            axios.post(apiUrl)
              .then(response => {

                console.log('Message sent:', response.data);
                this.show = true;

                this.sendLoading = false
              })
              .catch(error => {
                console.error('Error sending message:', error);
              });
          }
          this.num = null
          this.userName = null
          this.message = null
        })
    }



  },


};
</script>

<style scoped>
.contact {}

@media (max-width: 900px) {
  .ro {}
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

.contact {
  min-height: 100vh;
}
</style>
