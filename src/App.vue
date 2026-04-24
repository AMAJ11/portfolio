<template >
  <router-view class="view" />
  <v-layout>
  <v-app-bar 
   :style="{ direction: currentLang === 'eng' ? 'ltr' : 'rtl' }"
    flat 
    class="custom-navbar px-md-10" 
    height="75"
  >
    <v-app-bar-title class="logo-text font-weight-black text-subtitle-2 text-sm-h5">
      AM<span class="text-primary">AJ</span>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <div class="hidden-sm-and-down nav-links">
      <v-btn 
        v-for="link in navLinks" 
        :key="link.path"
        :to="link.path"
        variant="text"
        :class="['nav-btn', { 'active-link': router === link.path }]"
      >
        {{ currentLang == "eng"? link.name.eng : link.name.AR }}
      </v-btn>
        <v-btn 
          icon 
          size="x-small" 
          color="primary" 
          variant="flat"
          @click="toggleLanguage"
          class="rounded-circle"
        >
          {{ currentLang === 'eng' ? 'EN' : 'AR' }}
        </v-btn>
    </div>

    <div class="hidden-md-and-up mobile-nav-box">
      <v-btn 
        v-for="link in navLinks" 
        :key="'mob-' + link.path"
        :to="link.path"
        icon
        variant="text"
        size="small"
        :color="router === link.path ? 'primary' : 'white'"
        class="mob-icon-btn"
      >
        <v-icon>{{ link.icon }}</v-icon>
      </v-btn>
      <v-btn 
          icon 
          size="x-small" 
          color="primary" 
          variant="flat"
          @click="toggleLanguage"
          class="rounded-circle"
        >
          {{ currentLang === 'eng' ? 'EN' : 'AR' }}
        </v-btn>
    </div>
  </v-app-bar>

  </v-layout>
    <v-btn icon  v-if="showBackToTop" color="primary" @click="scrollToTop" class="scroll-to-top" size="small">
    <v-icon>mdi-arrow-up</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "App",
  created: () => {

  },
  data() {
    return {
      currentLang: localStorage.getItem('lang'),
      navLinks: [
        { name: { eng: 'Home', AR:'الرئيسية' }, path: '/', icon: 'mdi-home-variant-outline' },
        { name: { eng: 'About', AR:'حول' }, path: '/about', icon: 'mdi-account-outline' },
        { name: { eng: 'Projects', AR:'المشاريع' }, path: '/project', icon: 'mdi-briefcase-outline' },
        { name: { eng: 'Contact', AR:'اتصل بنا' }, path: '/contact', icon: 'mdi-email-outline' },
      ],
      op: false,
      showBackToTop: false,

    };
  },
  methods: {
    toggleLanguage() {
  
      this.currentLang = this.currentLang === 'eng' ? 'ar' : 'eng';
      localStorage.setItem('lang', this.currentLang);
      location.reload();
  },
    open: function () {
      this.op = !this.op;
    },
    handleScroll() {
      this.showBackToTop = window.scrollY > 300;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", 
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    router() {
      return this.$route.path
    }
  }
};

</script>

<style>
.view {
  background-repeat: repeat;
  background-color: #1d1d1d;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23000000' fill-opacity='0.21'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E");

}
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.custom-navbar {
  background: transparent !important;
  backdrop-filter: blur(12px);
  position: fixed !important;
  top: 0;
  z-index: 1000;
}

.logo-text {
  letter-spacing: 2px;
  color: white;
}

/* تنسيق الروابط للكمبيوتر */
.nav-links {
  display: flex;
  gap: 10px;
}

.nav-btn {
  text-transform: none !important;
  font-weight: 500;
  color: #b0b3b8;
  transition: all 0.3s ease;
  position: relative;
}

.nav-btn:hover {
  color: white;
}

/* تأثير الخط السفلي للرابط النشط */
.active-link {
  color: #4296db !important;
}

.active-link::after {
  content: "";
  position: absolute;
  bottom: 5px;
  left: 25%;
  width: 50%;
  height: 2px;
  background: #4296db;
  border-radius: 2px;
}

/* تنسيق الجوال */
.mobile-nav-box {
  display: flex;
  background: rgba(255, 255, 255, 0.05);
  padding: 5px 15px;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.mob-icon-btn {
  margin: 0 4px;
}

@media (max-width: 600px) {
  .custom-navbar {
    height: 65px !important;
  }
  .mobile-nav-box {
    padding: 2px 8px;
  }
}

</style>
