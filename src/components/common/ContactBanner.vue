<template>
  <section id="contact-banner">
    <div class="container">
      <img src="@/assets/img/common/contact_banner.webp" alt="" />
      <h2>Contactez nous pour obtenir une offre personnalisée !</h2>
      <router-link class="btn btn-primary" to="/contact">
        <p>Nous contacter</p>
        <i class="ri-mail-send-fill"></i>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
#contact-banner {
  margin-bottom: -15vh;
}

.container {
  position: relative;
  text-align: center;
  border-radius: 20px;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow: hidden;
}

h2 {
  z-index: 1;
  font-size: clamp(1.5rem, 2vw + 1rem, 2.5rem);
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.btn {
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: clamp(1rem, 1.5vw + 0.5rem, 1.5rem);
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  outline: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);

  * {
    color: white;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    outline: 1px solid rgba(255, 255, 255, 0.7);
    scale: 1.05;
  }
}

img {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  filter: brightness(0.8) blur(5px) sepia(0.3) hue-rotate(180deg);
}
</style>
