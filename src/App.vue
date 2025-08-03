<script>
import NavigationBar from "@/components/common/NavigationBar.vue";
import FooterSection from "@/components/common/FooterSection.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    FooterSection,
  },
};
</script>

<template>
  <router-view />
  <FooterSection />
  <NavigationBar />
</template>
