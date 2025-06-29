<script>
// import HelloWorld from "@/components/NavigationBar.vue";

export default {
  name: "HomeView",
  components: {
    // HelloWorld,
  },
};
</script>

<template>
  <div class="img fade-shape">
    <img src="@/assets/img/home/shape_01.png" alt="Hero Image" />
  </div>

  <div class="hero appear">
    <h1>HUB Solutions</h1>
    <h2>Formation et conseil en prévention des risques professionnels</h2>
    <div class="links">
      <router-link to="/formations">
        <p>Formations</p>
        <i class="ri-arrow-right-circle-line"></i>
      </router-link>
      <router-link to="/audits">
        <p>Audits</p>
        <i class="ri-arrow-right-circle-line"></i>
      </router-link>
    </div>
  </div>

  <div class="scoll-down appear">
    <p>Découvrir</p>
    <i class="ri-arrow-down-double-fill bounce"></i>
  </div>
</template>

<style scoped>
.img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  animation-delay: 0.5s;
}

.hero {
  animation-delay: 1s;

  h1 {
    font-family: "Arial Black", sans-serif;
    font-size: 5rem;
    font-weight: bold;
    color: var(--text);
    text-align: center;
    margin-bottom: 1rem;

    background-clip: text;
    -webkit-background-clip: text;
    background-image: linear-gradient(
      90deg,
      var(--logo_3),
      var(--logo_5),
      var(--logo_6),
      var(--logo_1),
      var(--logo_2)
    );
    color: transparent;
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
    opacity: 0.8;
    line-height: 1.5;
    color: var(--text);
    text-align: center;
    margin-bottom: 2rem;
    max-width: 500px;
  }

  .links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;

    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      border-radius: 100px;
      background: linear-gradient(45deg, #0f67ff, #c5dafc 80%);
      color: var(--text);
      cursor: pointer;

      & p {
        font-size: 1.2rem;
        font-weight: 600;
        margin: 0;
        color: var(--background);
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      }

      i {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--background);
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }
    }
  }
}

.scoll-down {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: var(--text);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  animation-delay: 2s;

  p {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text);
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    opacity: 0.8;
  }

  i {
    border-radius: 100px;
    padding: 0.5rem 0;
    animation: bounce 2s infinite;
    color: var(--background);
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    cursor: pointer;
  }
}
</style>
