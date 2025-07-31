<script>
import LogoScroller from "@/components/home/LogoScroller.vue";

export default {
  components: { LogoScroller },
};
</script>

<template>
  <section id="clients">
    <div class="bg-shape">
      <img src="@/assets/img/home/shape_03.webp" alt="Background Image" />
    </div>
    <h1 class="gradient-title">Ils nous ont fait confiance</h1>
    <div class="banner">
      <LogoScroller :leftToRight="true" />
      <LogoScroller :leftToRight="false" />
    </div>
  </section>
</template>

<style scoped>
h1 {
  max-width: 90%;
}

.banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
</style>
