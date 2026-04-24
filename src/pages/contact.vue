<template>
  <div class="contact-section">
    <v-container :style="{ direction: currentLang === 'eng' ? 'ltr' : 'rtl' }">
      <div class="header-box text-center mb-12">
        <h2 v-if="currentLang=='eng'" class="text-h3 font-weight-black text-white">GET IN <span class="text-primary">TOUCH</span></h2>
        <h2 v-else class="text-h3 font-weight-black text-white">تواصل<span class="text-primary"> معي</span></h2>
        <div class="underline mx-auto"></div>
      </div>

      <v-row justify="center">
        <v-col cols="12" lg="5" class="d-flex flex-column">
          <v-card class="info-glass-card pa-6 mb-6 flex-grow-1 d-flex flex-column align-center justify-center">
            <div class="gif-container mb-6">
              <img src="../assets/R.gif" alt="contact" class="contact-gif" />
            </div>
            
            <div class="social-wrapper">
              <v-btn v-for="(social, i) in socials" :key="i" 
                :href="social.link" 
                target="_blank"
                icon 
                :color="social.color" 
                class="social-btn"
                variant="flat"
                size="large"
              >
                <v-icon size="26">{{ social.icon }}</v-icon>
              </v-btn>
            </div>
          </v-card>

          <v-card class="email-glass-card pa-4 d-flex align-center justify-space-between" @click="copyEmail">
            <div class="d-flex align-center">
              <v-icon color="primary" class="mr-3">mdi-email-fast-outline</v-icon>
              <span class="text-body-2 font-weight-bold">{{ email }}</span>
            </div>
            <v-icon size="small" color="grey">mdi-content-copy</v-icon>
          </v-card>
        </v-col>

        <v-col cols="12" lg="6">
          <v-card class="form-glass-card pa-8">
            <h3 class="text-h5 font-weight-bold mb-6 text-white"> {{ translate[currentLang]?.send }} </h3>
            <v-form ref="form" @submit.prevent="submitForm">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="userName"
                    :label="translate[currentLang]?.nameMessage"
                    variant="filled"
                    bg-color="rgba(255,255,255,0.05)"
                    :rules="[v => !!v || translate[currentLang]?.nameMessageErr]"
                    rounded="lg"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="num"
                    :label="translate[currentLang]?.phoneMessage"
                    type="number"
                    variant="filled"
                    bg-color="rgba(255,255,255,0.05)"
                    :rules="[v => !!v || translate[currentLang]?.phoneMessageErr]"
                    rounded="lg"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="message"
                    variant="filled"
                    bg-color="rgba(255,255,255,0.05)"
                    :rules="[v => !!v || translate[currentLang]?.messageMessageErr]"
                    :label="translate[currentLang]?.messageMessage"
                    rows="5"
                    rounded="lg"
                  ></v-textarea>
                </v-col>
              </v-row>

              <v-btn 
                type="submit" 
                block 
                height="55" 
                color="primary" 
                class="submit-btn mt-4 font-weight-bold"
                :loading="sendLoading"
                elevation="0"
              >
                {{ translate[currentLang]?.sendbtn }}
                <v-icon end>mdi-send-outline</v-icon>
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-snackbar v-model="snackbar" :color="snackColor" timeout="3000" rounded="pill">
      {{ snackText }}
    </v-snackbar>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
        translate: {
        ar: {
          send: 'أرسل لي رسالة',
          sendbtn:'ارسال',
          nameMessage:'الاسم ',
          phoneMessage:'رقم الهاتف ',
          messageMessage:'الرسالة ',
          nameMessageErr:'الاسم مطلوب',
          phoneMessageErr:'رقم الهاتف مطلوب',
          messageMessageErr:'الرسالة مطلوبة'
        },
        eng:{
          send: 'Send me Message',
          sendbtn:'send',
          nameMessage:'Name ',
          phoneMessage:'Phone ',
          messageMessage:'Message',
          nameMessageErr:'Name is required',
          phoneMessageErr:'Phone is required',
          messageMessageErr:'Message is required'
        }
        },
      currentLang: '',
      userName: "",
      num: "",
      message: "",
      email: "apo.zouher@gmail.com",
      sendLoading: false,
      snackbar: false,
      snackText: "",
      snackColor: "primary",
      socials: [
        { icon: 'mdi-facebook', color: '#1877F2', link: 'https://www.facebook.com/ammar.aj.927' },
        { icon: 'mdi-instagram', color: '#E4405F', link: 'https://www.instagram.com/ammar.aj.927/' },
        { icon: 'mdi-github', color: '#24292e', link: 'https://github.com/AMAJ11/' },
        { icon: 'mdi-linkedin', color: '#0077B5', link: 'https://www.linkedin.com/in/ammar-amaj-606579202/' },
        { icon: 'mdi-whatsapp', color: '#25D366', link: 'https://wa.me/963937379312' }
      ]
    };
  },
   created: function(){
   
    if(!localStorage.getItem('lang')){
      localStorage.setItem('lang',"eng")
    }else{
      this.currentLang = localStorage.getItem('lang')
    }
    
  },
  methods: {
    async copyEmail() {
      await navigator.clipboard.writeText(this.email);
      this.currentLang=="eng" ? this.snackText = "Email copied to clipboard!": this.snackText = "تم نسخ البريد الإلكتروني!";
      this.snackColor = "primary";
      this.snackbar = true;
    },
    async submitForm() {
      const { valid } = await this.$refs.form.validate();
      if (!valid) return;

      this.sendLoading = true;
      const botToken = '8780682215:AAHPdQNLq7HJiCJXkGD6wRoAbMKpPFwBFM0';
      const chatId = '6568921630';
      const text = `📬 New Contact Request\n\n👤 Name: ${this.userName}\n📞 Phone: ${this.num}\n💬 Message: ${this.message}`;

      try {
        await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          chat_id: chatId,
          text: text
        });
        this.snackText = "Message sent successfully!";
        this.snackColor = "success";
        this.snackbar = true;
        this.userName = ""; this.num = ""; this.message = "";
        this.$refs.form.resetValidation();
      } catch (error) {
        this.snackText = "Failed to send message.";
        this.snackColor = "error";
        this.snackbar = true;
      } finally {
        this.sendLoading = false;
      }
    }
  }
};
</script>

<style scoped>
.contact-section {
  min-height: 100vh;
  padding: 80px 0;
  background-color: #0f111a;
  color: white;
}

.underline {
  width: 70px;
  height: 4px;
  background: #4296db;
  border-radius: 2px;
}

/* Glassmorphism Cards */
.info-glass-card, .form-glass-card, .email-glass-card {
  background: rgba(255, 255, 255, 0.03) !important;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  border-radius: 24px !important;
  transition: transform 0.3s ease;
}

.email-glass-card {
  cursor: pointer;
  border-radius: 16px !important;
}

.email-glass-card:hover {
  background: rgba(255, 255, 255, 0.06) !important;
}

.contact-gif {
  width: 100%;
  max-width: 320px;
  border-radius: 20px;
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.5));
}

.social-wrapper {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.social-btn {
  transition: all 0.3s ease;
}

.social-btn:hover {
  transform: translateY(-5px);
  filter: brightness(1.2);
}

.submit-btn {
  border-radius: 12px !important;
  font-size: 1rem;
  letter-spacing: 1px;
}

/* Inputs styling */
:deep(.v-field__outline) {
  display: none;
}

:deep(.v-field__input) {
  color: white !important;
}
</style>