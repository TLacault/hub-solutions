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
/* Layout */

* {
  /* outline: 1px solid grey; */
}

section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 1500px;
}

#hero {
  height: 100dvh;
}
</style>
