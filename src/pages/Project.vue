<template>
  <div class="projects-section">
    <v-container :style="{ direction: currentLang === 'eng' ? 'ltr' : 'rtl' }">
      <div class="header-box text-center mb-3">
        <h2 class="text-h3 font-weight-black text-white"><span class="text-primary"> {{ translate[currentLang]?.myprojects }} </span></h2>
        <div class="underline mx-auto"></div>
      </div>

      <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :coverflowEffect="{
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }" :pagination="{ clickable: true }" :modules="modules" class="project-swiper hidden-sm-and-down">
        <swiper-slide v-for="(project, i) in projects" :key="i" class="swiper-slide-custom">
          <v-card class="modern-project-card" elevation="10">
            <div class="image-container">
              <v-img :src="getImgUrl(project.image)" height="300" cover class="project-img"></v-img>
              <div class="overlay d-flex align-center justify-center">
                <v-btn :href="project.link" target="_blank" color="primary" icon="mdi-eye" class="mx-2"></v-btn>
                <v-btn v-if="project.github" :href="project.github" target="_blank" color="white" icon="mdi-github"
                  variant="tonal" class="mx-2"></v-btn>

                <v-btn @click="openDetails(project)" color="white" variant="text" size="small" :style="{right : currentLang === 'eng' ? '15px' : 'auto', left: currentLang === 'eng' ? 'auto' : '15px'}" class="details-btn-pos">
                  {{ translate[currentLang]?.details }} <v-icon end>mdi-chevron-right</v-icon>
                </v-btn>
              </div>
            </div>
            <v-card-item>
              <v-card-title class="text-white text-h5 font-weight-bold">{{ currentLang == 'eng' ? project.title.eng : project.title.ar }}</v-card-title>
              <v-rating :model-value="5" readonly density="compact" color="amber" size="small"></v-rating>
            </v-card-item>
          </v-card>
        </swiper-slide>
      </swiper>

      <div class="hidden-md-and-up px-2">
        <v-row>
          <v-col v-for="(project, i) in projects" :key="'mob-' + i" cols="12" sm="6">
            <v-card class="mobile-project-card">
              <v-img :src="getImgUrl(project.image)" height="220" cover></v-img>
              <v-card-item class="bg-card-footer">
                <v-card-title class="text-white pb-2">{{ currentLang == 'eng' ? project.title.eng : project.title.ar }}</v-card-title>
                <v-card-actions class="pa-0 d-flex justify-space-between">
                  <v-btn @click="openDetails(project)" color="white" variant="outlined" size="small">{{ translate[currentLang]?.details }}</v-btn>
               <div>
                   <v-btn :href="project.link" color="primary" variant="flat" size="small"
                    icon="mdi-eye">  </v-btn>
                      <v-btn :href="project.github" target="_blank" color="white" icon="mdi-github"
                  variant="tonal" class="mx-2"></v-btn>
               </div>
                </v-card-actions>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <v-dialog :style="{ direction: currentLang === 'eng' ? 'ltr' : 'rtl' }" v-model="detailsDialog" max-width="800" transition="dialog-bottom-transition">
        <v-card class="details-modal pa-6">
          <v-btn icon="mdi-close" position="absolute" style="top: 10px; right: 10px; z-index: 10;" variant="text"
            color="white" @click="detailsDialog = false"></v-btn>
          <v-row>
            <v-col cols="12" md="6">
              <v-img :src="getImgUrl(selectedProject.image)" rounded="xl" cover height="280"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <h2 class="text-h4 font-weight-bold text-primary mb-2">{{ currentLang == 'eng' ? selectedProject.title.eng : selectedProject.title.ar }}</h2>
              <p class="text-grey-lighten-1 mb-4">{{ currentLang == 'eng' ? selectedProject.description.eng : selectedProject.description.ar }}</p>
              <h3 class="text-subtitle-1 font-weight-bold mb-2">  {{ translate[currentLang]?.technologies }} :</h3>
              <div class="d-flex flex-wrap">
                <v-chip v-for="tech in selectedProject.techs" :key="tech" size="small" color="primary" variant="tonal"
                  class="ma-1">{{ tech }}</v-chip>
              </div>
            </v-col>
          </v-row>
          <v-card-actions class="justify-end mt-4">
            <v-btn :href="selectedProject.link" target="_blank" color="primary" variant="flat"
              class="rounded-pill px-8"> {{ translate[currentLang]?.liveDemo }} </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      translate: {
        ar: {
          myprojects: 'مشاريعي',
          details: 'التفاصيل',
          technologies: 'التقنيات',
          liveDemo: 'عرض حي',
          view: 'عرض',
        },
        eng: {
          technologies: 'Technologies',
          myprojects: 'PROJECTS',
          details: 'Details',
          liveDemo: 'Live Demo',
          view: 'View',
        },
      },
      currentLang: localStorage.getItem('lang'),
      detailsDialog: false,
      selectedProject: {},
      modules: [EffectCoverflow, Pagination],
      projects: [
        { title:{ ar: 'أنجز', eng: 'Anjez' }, image: 'Screenshot from 2026-02-01 20-08-39.png', link: 'https://home-services-gold.vercel.app/', github: 'https://github.com/AMAJ11/HomeServices', description: { ar: 'سوق رقمي سلس يربط بين مزودي الخدمات المتمكنين و العملاء لجميع المهام المهنية والمنزلية.', eng: 'A seamless digital marketplace connecting skilled service providers with customers for all professional and home-related tasks.' }, techs: ['React', 'MUI', 'Node js', 'express js', 'MongoDB', 'Pusher io'] },
        { title: { ar: 'تطبيق التواصل الاجتماعي', eng: 'Social Media WebApp' }, image: 'WhatsApp Image 2025-05-10 at 6.19.27 PM.jpeg', link: 'https://nova-write.vercel.app', github: 'https://github.com/AMAJ11/NovaBook', description: { ar: 'منصة تواصل اجتماعي لمشاركة الأفكار.', eng: 'Social platform for sharing thoughts.' }, techs: ['Vue.js', 'Vuetify', 'Firebase'] },
        { title: { ar: 'مدير الإيرادات', eng: 'Revenue Manager' }, image: 'Screenshot (24).png', link: 'https://revenuemanagement-omega.vercel.app/', github: 'https://github.com/AMAJ11/businessaccountmanagement', description: { ar: 'نظام تتبع الأعمال.', eng: 'Business tracking system.' }, techs: ['Node.js', 'MongoDB', 'Vue 3'] },
        { title: { ar: 'تطبيق الصلاة والقرآن', eng: 'Prayer & Quraan App' }, image: 'Screenshot from 2024-10-24 11-37-09.png', link: 'https://prayer-alpha.vercel.app/', github: 'https://github.com/AMAJ11/Prayer', description: { ar: 'أوقات الصلاة وقارئ القرآن.', eng: 'Islamic times and Quran reader.' }, techs: ['Vue.js', 'Rest API'] },
        { title: { ar: 'موقع التجارة الإلكترونية الكامل', eng: 'Full E-commerce Website' }, image: 'Screenshot from 2024-10-24 11-40-57.png', link: 'https://e-commerce-18px.vercel.app/', github: 'https://github.com/AMAJ11/E-commerce', description: { ar: 'متجر اونلاين كامل.', eng: 'Complete online store.' }, techs: ['Vue.js', 'Vuetify'] },
        { title: { ar: 'واجهة برمجة تطبيقات تطبيق الأفلام', eng: 'Movie App API' }, image: 'Screenshot from 2024-10-24 11-48-30.png', link: 'https://movie-api-omega.vercel.app/', github: 'https://github.com/AMAJ11/MovieApp', description: { ar: 'قاعدة بيانات الأفلام والمقطورات.', eng:'Movies and trailers database.' }, techs: ['Vue.js', 'TMDB API'] },
        { title: { ar: 'مدير جهات الاتصال', eng: 'Contacts Manager' }, image: 'Annotation 2024-06-28 195541.png', link: 'https://amaj11.github.io/contact/', github : 'https://github.com/AMAJ11/contact-manager', description:{ ar:'إدارة جهات الاتصال CRUD.', eng:'CRUD contact management.' }, techs:['Vue.js', 'Bootstrap'] },
        { title: { ar: 'موقع السفر', eng: 'Trip Website' }, image: 'Screenshot (25).png', link: 'https://travel-website-psi-tawny.vercel.app/auth/login', github: 'https://github.com/AMAJ11/travelWebsite', description: { ar: 'صفحة تسجيل دخول حجز السفر.', eng: 'Travel booking landing page.' }, techs: ['Vue.js', 'Animations'] },
        { title: { ar: 'متجر اونلاين بسيط', eng: 'Simple OnlineStore' }, image: 'A 204027.png', link: 'https://am-store-iota.vercel.app/', github: 'https://github.com/AMAJ11/AmStore', description: { ar: 'متجر سريع وبسيط.', eng: 'Fast minimalist store.' }, techs: ['Vue.js', 'CSS'] }
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
    getImgUrl(pic) {
      return new URL(`../assets/${pic}`, import.meta.url).href;
    },
    openDetails(project) {
      this.selectedProject = project;
      this.detailsDialog = true;
    }
  }
};
</script>

<style scoped>
.projects-section {
  min-height: 100vh;
  padding: 40px 0;
  padding-top: 60px;
  background-color: #0f111a;
}

.underline {
  width: 80px;
  height: 4px;
  background: #4296db;
  margin-top: 10px;
}

.swiper-slide-custom {
  width: 550px;
  padding: 30px 0;
}

.modern-project-card {
  background: rgba(255, 255, 255, 0.05) !important;
  border-radius: 28px !important;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 17, 26, 0.85);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
}

.image-container:hover .overlay {
  opacity: 1;
}

.details-btn-pos {
  position: absolute !important;
  bottom: 15px;
  text-transform: none;
  font-weight: bold;
}

.mobile-project-card {
  background: rgba(255, 255, 255, 0.05) !important;
  border-radius: 20px !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  overflow: hidden;
  margin-bottom: 20px;
}

.details-modal {
  background: #1a1c26 !important;
  border-radius: 30px !important;
  color: white !important;
}

:deep(.swiper-pagination-bullet-active) {
  background: #4296db !important;
}
</style>