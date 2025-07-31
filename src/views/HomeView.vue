<script>
import HeroSection from "@/components/home/HeroSection.vue";
import AboutSection from "@/components/home/AboutSection.vue";
import ValeursSection from "@/components/home/ValeursSection.vue";
import ClientSection from "@/components/home/ClientSection.vue";
import TestimonialSection from "@/components/home/TestimonialSection.vue";
import PartenairesSection from "@/components/home/PartenairesSection.vue";

import ContactBanner from "@/components/common/ContactBanner.vue";

export default {
  name: "HomeView",
  components: {
    HeroSection,
    AboutSection,
    ValeursSection,
    ClientSection,
    TestimonialSection,
    PartenairesSection,
    ContactBanner,
  },
};
</script>

<template>
  <HeroSection />
  <AboutSection />
  <ValeursSection />
  <ClientSection />
  <TestimonialSection />
  <PartenairesSection />
  <ContactBanner />
</template>

<!-- const logos = [
  "/assets/img/home/clients/Logo AES.jpg",
  "/assets/img/home/clients/Logo Bagatelle.jpg",
  "/assets/img/home/clients/Logo bar 33290.jpg",
  "/assets/img/home/clients/Logo BM.png",
  "/assets/img/home/clients/Logo café chez Sophie.png",
  "/assets/img/home/clients/Logo Carole formation.jpg",
  "/assets/img/home/clients/Logo Climatic confort.png",
  "/assets/img/home/clients/Logo KDevat formation.jpg",
  "/assets/img/home/clients/Logo KDevat formation.jpg",
  "/assets/img/home/clients/Logo Mairie de Listrac.png",
  "/assets/img/home/clients/Logo neutre.jpg",
  "/assets/img/home/clients/logo O secours formation.jpg",
  "/assets/img/home/clients/logo parfum de fleurs.jpg",
  "/assets/img/home/clients/Logo RCP.jpg",
    -->
