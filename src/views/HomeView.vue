<script>
import HeroSection from "@/components/home/HeroSection.vue";
import AboutSection from "@/components/home/AboutSection.vue";
import ValeursSection from "@/components/home/ValeursSection.vue";

export default {
  name: "HomeView",
  components: {
    HeroSection,
    AboutSection,
    ValeursSection,
  },
};
</script>

<template>
  <HeroSection />
  <AboutSection />
  <ValeursSection />
</template>
