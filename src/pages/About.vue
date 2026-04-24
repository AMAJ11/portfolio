<template>
  <div class="profile-section pt-16 pt-md-16">
    <v-container :style="{ direction: currentLang === 'eng' ? 'ltr' : 'rtl' }">
      <v-row>
        <v-col cols="12">
          <v-card class="intro-card pa-8" elevation="0">
            <h2 class="text-h4 font-weight-bold mb-4">
              <span class="text-primary"> {{ translate[currentLang]?.welcome }} </span>, {{ translate[currentLang]?.I }}
              <span class="name-highlight"> {{ translate[currentLang]?.name }} </span>
            </h2>
            <p class="text-subtitle-1 secondary-text">
              {{ translate[currentLang]?.subtitle }}
            </p>
            <v-chip class="mt-2" color="primary" variant="outlined"> {{ translate[currentLang]?.Age }} : {{ age() }}</v-chip>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" lg="4" class="d-flex flex-column ">
          <div class="skills-title-box text-center">
            <h1 class="text-h3 font-weight-black mb-6">  {{ translate[currentLang]?.skills }} </h1>
            <div class="bulb-wrapper">
              <img style="  border-radius: 30px;" class="idea-gif" src="../assets/light-bulb.gif" alt="Ideas" />
            </div>
          </div>
        </v-col>

        <v-col cols="12" lg="8">
          <v-row justify="center" class="skills-container">
            <v-col v-for="(skill, index) in skills" :key="index" cols="6" sm="4" md="3" lg="3"
              class="d-flex justify-center">
              <v-card class="skill-card d-flex flex-column align-center justify-center pa-4">
                <v-img :src="skill.image" width="80" height="80" contain class="mb-3"></v-img>
                <span class="skill-name">{{ skill.name }}</span>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    getImgUrl(pic) {
      return new URL(`../assets/${pic}`, import.meta.url).href;
    },
    age() {
      const birthDate = new Date(2005, 9, 24);
      const today = new Date();
      const diffInMs = today - birthDate;
      const ageInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
      return Math.ceil(ageInYears);
    }
  },
  data() {
    return {
      currentLang: localStorage.getItem('lang'),
       translate: {
        ar: {
          welcome: 'مرحبا',
         name: 'عمار أبو جيب',
         title: 'مطور ويب متكامل',
         subtitle: 'مطور ويب  | ادرس في كلية الهندسة المعلوماتية في جامعة دمشق',
         I:"أنا", 
         download: 'تحميل سيرتي الذاتية',
         Age: 'العمر',
         skills: 'المهارات'
        },
        eng: {
          skills: 'Skills',
          welcome: 'Hello',
          I:"I'm",
          Age:"Age",
         name: 'Ammar AJ',
         subtitle: ' FullStack Developer | ITE Student at Damascus University',
         download: 'Download My CV'

        }
      },
      skills: [
        { name: 'HTML', image: this.getImgUrl('html.png') },
        { name: 'CSS', image: this.getImgUrl('css.png') },
        { name: 'JavaScript', image: this.getImgUrl('js.png') },
        { name: 'Vue.js', image: this.getImgUrl('vue.png') },
        { name: 'Vuetify', image: this.getImgUrl('vuetify.png') },
           { name: 'React', image: this.getImgUrl('react.png') },
        { name: 'MUI', image: this.getImgUrl('material.png') },
        { name: 'Bootstrap', image: this.getImgUrl('bootstrap.png') },
         { name: 'Tailwind CSS', image: this.getImgUrl('tailwind.png') },
        { name: 'Node.js', image: this.getImgUrl('file_type_node_icon_130301.png') },
        { name: 'MongoDB', image: this.getImgUrl('mongodb_original_wordmark_logo_icon_146425.png') },
        { name: 'Terminal', image: this.getImgUrl('cmd.png') },
     
      ]
    };
  }
};
</script>
<style scoped>
.profile-section {
  /* التعديل الأساسي هنا: استخدم min-height بدلاً من height */
  min-height: 100vh; 
  height: auto; /* السماح للطول بالتمدد تلقائياً */
  padding: 80px 0;
  background-color: #0f111a;
  color: white;
  /* إضافة هذا السطر لضمان عدم ظهور مساحات بيضاء في الأسفل */
  display: flex;
  flex-direction: column;
}

.intro-card {
  background: rgba(255, 255, 255, 0.03) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  border-radius: 24px !important;
}

.name-highlight {
  color: #4296db;
}

.secondary-text {
  color: #b0b3b8;
}

.skills-container {
  padding-right: 8px;
  padding-bottom: 30px;
  margin-bottom: 10px;
}

/* تحسين شكل بطاقات المهارات لتكون متناسقة */
.skill-card {
  background: rgba(255, 255, 255, 0.05) !important;
  border-radius: 16px !important;
  transition: all 0.3s ease;
  width: 100%;
  aspect-ratio: 1/1;
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
}

.skill-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.1) !important;
  border-color: #4296db !important;
  box-shadow: 0 10px 30px rgba(66, 150, 219, 0.2) !important;
}

.skill-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: #e4e6eb;
}

.bulb-wrapper {
  background: radial-gradient(circle, rgba(66, 150, 219, 0.15) 0%, transparent 70%);
  padding: 20px;

}

.idea-gif {
  width: 200px;
  filter: drop-shadow(0 0 10px #4296db);
}

/* تعديلات الشاشات الصغيرة لضمان استمرار الخلفية */
@media (max-width: 960px) {
  .profile-section {
    padding: 40px 0; /* تقليل الحشو العلوي قليلاً في الجوال */
  }
  
  .skills-container {
    /* إلغاء الـ max-height لكي تظهر كل المهارات ضمن خلفية القسم */
    max-height: none !important; 
    overflow: visible !important;
  }
}

@media (max-width: 600px) {
  .intro-card {
    padding: 20px !important;
  }
  .idea-gif {
    width: 120px;
  }
}
</style>