<script>
export default {
  name: "NavigationBar",
  //   props: {
  //     msg: String,
  //   },
};
</script>

<template>
  <nav class="appear">
    <router-link to="/" class="logo">
      <img src="@/assets/img/logo.png" alt="Logo" />
      <span>Hub Solutions</span>
    </router-link>
    <div class="links">
      <router-link to="/">Accueil</router-link>
      <router-link to="/formations">Formations</router-link>
      <router-link to="/audits">Audits</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 1rem;
  width: 100%;
  max-width: 1500px;
  padding: 10px;
  border-radius: 100px;
  /* background-color: rgba(200, 200, 200, 0.2); */
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
  /* outline: 1px solid var(--background); */
  backdrop-filter: blur(10px);
  animation-delay: 1.5s;
  z-index: 1000;
}

.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: var(--text);
  border-radius: 100px;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--shade);

  & img {
    width: 40px;
    aspect-ratio: 1 / 1;
  }

  & span {
    font-family: "Arial Black", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
  }
}

.links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 100px;
  padding: 0.5rem;
  background-color: var(--shade);
  opacity: 0.8;
  backdrop-filter: blur(20px);
  /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); */

  & a {
    text-align: center;
    text-decoration: none;
    color: var(--text);
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.7rem 1.4rem;
    border-radius: 100px;

    &:hover {
      background-color: rgba(200, 200, 200, 0.5);
      background-color: var(--secondary);
      /* color: var(--primary); */
    }

    &:active {
      scale: 0.95;
    }

    &.router-link-active {
      background-color: var(--secondary);
      color: var(--primary);
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
