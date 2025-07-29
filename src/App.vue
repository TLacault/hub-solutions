<script>
import NavigationBar from "@/components/NavigationBar.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    FooterSection,
  },
};
</script>

<template>
  <NavigationBar />
  <router-view />
  <FooterSection />
</template>

<style>
#app {
  font-family: "Inter", sans-serif;
  color: var(--text);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Layout */

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  max-width: 1500px;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
}
</style>
