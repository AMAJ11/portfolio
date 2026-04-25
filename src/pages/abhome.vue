<template>
  <div class="home-wrapper">
    <v-container :style="{ direction: currentLang === 'eng' ? 'ltr' : 'rtl' }">
      <v-row class="mt-0 align-center" style="min-height: 80vh;">
        <v-col cols="12" sm="8" md="7" lg="7">
          <h1 class="hero-title mb-4" data-aos="fade-right" data-aos-duration="1000">
            {{ translate[currentLang]?.name }} <br />
            <span class="text-gradient">{{ translate[currentLang]?.title }}</span>
          </h1>
          <h3 class="hero-subtitle mb-8" data-aos="fade-right" data-aos-duration="1200">
            {{ translate[currentLang]?.subtitle }}
          </h3>
          <div class="btn-group" data-aos="fade-up" data-aos-duration="1000">
            <v-btn color="primary" size="large" variant="elevated" href="/files/Ammar_Apo_Jeab.pdf" download
              class="download-btn px-8">
              {{ translate[currentLang]?.download }}
              <v-icon end>mdi-download</v-icon>
            </v-btn>
          </div>
        </v-col>

        <v-col class=" d-flex justify-center" sm="4" md="5" lg="5" style="border-radius: 20px;">
          <div class="hidden-sm-and-down profile-card" style="border-radius: 20px;">
            <img src="../assets/AMAJ__1_-removebg-preview.png" alt="Ammar" style="border-radius: 20px;"
              class="profile-img">
            <span class="border-line top"></span>
            <span class="border-line right"></span>
            <span class="border-line bottom"></span>
            <span class="border-line left"></span>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <div class="ocean">
      <div class="wave"></div>
      <div class="wave"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AbHome",
  created: function () {

    if (!localStorage.getItem('lang')) {
      localStorage.setItem('lang', "eng")
    } else {
      this.currentLang = localStorage.getItem('lang')
    }

  },

  data() {
    return {
      currentLang: localStorage.getItem('lang'),
      translate: {
        ar: {
          name: 'عمار أبو جيب',
          title: 'مطور ويب متكامل',
          subtitle: 'أنا مطور ويب متكامل شغوف ببناء تطبيقات الويب القابلة للتوسع وتحسين مهاراتي باستمرار.',
          download: 'تحميل سيرتي الذاتية'
        },
        eng: {
          name: 'Ammar AJ',
          title: 'FullStack Developer',
          subtitle: 'I’m a Full-Stack Developer passionate about building scalable web applications and continuously improving my skills.',
          download: 'Download My CV'

        }
      }
    }
  }
};
</script>

<style scoped>
/* الحاوية الرئيسية بنفس خلفية صفحة About */
.home-wrapper {
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #0f0f12 0%, #1a1a2e 100%);
  color: white;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}

/* تحسين الخطوط */
.hero-title {
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
}

.text-gradient {
  background: linear-gradient(90deg, #4296db, #2ecc71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.2rem;
  font-weight: 300;
  color: #b0b0b0;
  max-width: 600px;
  line-height: 1.6;
}

/* تحسين بطاقة الصورة الشخصية */
.profile-card {
  position: relative;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-img {
  width: 100%;
  max-width: 350px;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5));
  z-index: 2;
}

/* تأثير الحدود المتحركة (نفس فكرتك لكن بألوان متناسقة مع الثيم الداكن) */
.border-line {
  position: absolute;
  background: #4296db;
  border-radius: 10px;
}

.top {
  top: 0;
  left: 0;
  width: 0;
  height: 3px;
  animation: animTop 3s infinite;
}

.right {
  top: 0;
  right: 0;
  width: 3px;
  height: 0;
  animation: animRight 3s infinite 0.75s;
}

.bottom {
  bottom: 0;
  right: 0;
  width: 0;
  height: 3px;
  animation: animBottom 3s infinite 1.5s;
}

.left {
  bottom: 0;
  left: 0;
  width: 3px;
  height: 0;
  animation: animLeft 3s infinite 2.25s;
}

@keyframes animTop {
  0% {
    width: 0;
  }

  50%,
  100% {
    width: 100%;
  }
}

@keyframes animRight {
  0% {
    height: 0;
  }

  50%,
  100% {
    height: 100%;
  }
}

@keyframes animBottom {
  0% {
    width: 0;
  }

  50%,
  100% {
    width: 100%;
  }
}

@keyframes animLeft {
  0% {
    height: 0;
  }

  50%,
  100% {
    height: 100%;
  }
}

/* تأثير الأمواج (ألوان داكنة) */
.ocean {
  height: 80px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: transparent;
  opacity: 0.4;
}

.wave {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x;
  position: absolute;
  top: -100px;
  width: 6400px;
  height: 198px;
  animation: wave 12s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  filter: invert(15%) sepia(95%) saturate(693%) hue-rotate(183deg) brightness(91%) contrast(101%);
}

.wave:nth-of-type(2) {
  top: -80px;
  animation: wave 15s cubic-bezier(0.36, 0.45, 0.63, 0.53) -2s infinite;
  opacity: 0.5;
}

@keyframes wave {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-1600px);
  }
}

/* تحسينات الجوال */
@media (max-width: 600px) {
  .hero-title {
    font-size: 2.2rem;
    text-align: center;
  }

  .hero-subtitle {
    text-align: center;
    font-size: 1rem;
  }

  .btn-group {
    display: flex;
    justify-content: center;
  }

  .home-wrapper {
    padding-top: 100px;
    align-items: flex-start;
  }
}
</style>