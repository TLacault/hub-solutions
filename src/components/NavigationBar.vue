<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      isMobile: false,
      isOpen: false,
      lastScrollY: 0,
      hideNav: false,
    };
  },
  methods: {
    checkWindowWidth() {
      this.isMobile = window.innerWidth <= 850;
      if (!this.isMobile) this.isOpen = false;
    },
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    handleScroll() {
      const currentY = window.scrollY;

      // Show / Hide behavior for desktop
      if (!this.isMobile) {
        if (currentY > this.lastScrollY && currentY > 100) {
          this.hideNav = true;
        } else {
          this.hideNav = false;
        }
      }

      this.lastScrollY = currentY;
    },
  },
  mounted() {
    this.checkWindowWidth();
    window.addEventListener("resize", this.checkWindowWidth);
    // window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkWindowWidth);
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<template>
  <nav class="anim_appear" :class="{ hidden: hideNav && !isMobile }">
    <!-- Logo -->
    <router-link to="/" class="logo">
      <img src="@/assets/img/logo_blue.png" alt="Logo" />
      <span class="gradient_text">HUB Solutions</span>
    </router-link>

    <!-- Burger Icon -->
    <div
      class="burger"
      v-if="isMobile"
      @click="toggleMenu"
      :class="{ active: isOpen }"
    >
      <i class="ri-menu-5-line"></i>
    </div>

    <!-- Navigation Links -->
    <transition name="slide-fade">
      <div
        class="links"
        v-if="!isMobile || isOpen"
        :class="{ 'mobile-expanded': isMobile }"
      >
        <router-link to="/" @click="isOpen = false">Accueil</router-link>
        <router-link to="/formations" @click="isOpen = false"
          >Formations</router-link
        >
        <router-link to="/audits" @click="isOpen = false">Audits</router-link>
        <router-link to="/iprp" @click="isOpen = false">IPRP</router-link>
        <router-link to="/contact" @click="isOpen = false">Contact</router-link>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
nav {
  /* outline: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0rem;
  width: 100%;
  padding: 10px 1rem 10px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 1000;

  &.hidden {
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
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

  & img {
    width: 40px;
    /* aspect-ratio: 1 / 1; */
  }

  & span {
    font-family: "Arial Black", sans-serif;
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    font-weight: 600;
    /* font-weight: bold; */
  }
}

@media (max-width: 600px) {
  .logo span {
    font-weight: 900;
    font-family: "Arial", sans-serif;
  }
}

@media (max-width: 400px) {
  .logo span {
    display: none;
  }
}

.links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  border-radius: 100px;
  padding: 0.5rem;
  background-color: rgba(236, 237, 239, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

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

/* Burger Icon */
.burger {
  display: none;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  border-radius: 50%;
  z-index: 1001;

  & i {
    font-size: 1.8rem;
    color: var(--text);
  }

  &.active {
    rotate: 90deg;
    scale: 1.1;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
}

/* Mobile Styles */
@media (max-width: 850px) {
  nav {
    justify-content: space-between;
    gap: 0;
    /* padding: 1rem; */
    border-radius: 0px;
    box-shadow: none;
    background: none;
    /* backdrop-filter: none; */
  }

  .burger {
    display: block;
  }

  .links {
    flex-direction: column;
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.5rem;
    border-radius: 15px;
    /* background-color: rgba(236, 237, 239, 0.5); */
    max-height: 0;
    /* overflow: hidden; */
    /* box-shadow: 0 0 15px rgba(0, 0, 0, 0.1); */
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .links.mobile-expanded {
    max-height: 500px;
    padding: 0.5rem;
  }

  .links a {
    width: 100%;
    border-radius: 10px;
  }

  .logo {
    margin-bottom: 0.5rem;
  }
}

/* Animation */
/* .slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-in-out;
} */

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: scaleY(0.8);
}
</style>
