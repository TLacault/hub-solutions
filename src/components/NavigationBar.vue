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
      <router-link to="/iprp">IPRP</router-link>
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
  width: 95%;
  max-width: 1500px;
  border-radius: 100px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  /* outline: 1px solid var(--background); */
  backdrop-filter: blur(10px);
  animation-delay: 1.5s;
  z-index: 1000;
}

@media (max-width: 1000px) {
  .logo span {
    /* display: none; */
  }
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
  /* background-color: var(--shade); */

  & img {
    width: 40px;
    aspect-ratio: 1 / 1;
  }

  & span {
    font-family: "Arial Black", sans-serif;
    font-size: 1.5rem;
    /* font-weight: bold; */
  }
}

.links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  border-radius: 100px;
  padding: 0.5rem;
  background-color: rgba(236, 237, 239, 1);
  backdrop-filter: blur(10px);

  & a {
    text-align: center;
    text-decoration: none;
    color: var(--text);
    font-size: 1rem;
    font-weight: 600;
    padding: 0.7rem 1.4rem;
    border-radius: 100px;

    &:hover {
      background-color: rgba(200, 200, 200, 0.4);
      /* background-color: var(--secondary); */
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

@media (max-width: 800px) {
  nav {
    flex-direction: column;
    align-items: center;
    gap: 0rem;
    border-radius: 20px;
  }

  .links {
    flex-direction: column;
    width: 100%;
    padding: 0.5rem;
    border-radius: 15px;
    background-color: rgba(236, 237, 239, 0.5);

    & a {
      /* text-align: start; */
      width: 100%;
      border-radius: 10px;
    }
  }

  .logo {
    margin-bottom: 1rem;

    & .span {
      display: block !important;
    }
  }
}
</style>
