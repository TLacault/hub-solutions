<script>
export default {
  name: "LogoScroller",
  props: {
    leftToRight: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      logos: [
        {
          src: require("@/assets/img/clients/01.png"),
          alt: "Logo 01",
          link: "#",
        },
        {
          src: require("@/assets/img/clients/02.png"),
          alt: "Logo 02",
          link: "#",
        },
        {
          src: require("@/assets/img/clients/03.png"),
          alt: "Logo 03",
          link: "#",
        },
        {
          src: require("@/assets/img/clients/04.png"),
          alt: "Logo 04",
          link: "#",
        },
        {
          src: require("@/assets/img/clients/05.png"),
          alt: "Logo 05",
          link: "#",
        },
        {
          src: require("@/assets/img/clients/06.png"),
          alt: "Logo 06",
          link: "#",
        },
        {
          src: require("@/assets/img/clients/07.png"),
          alt: "Logo 07",
          link: "#",
        },
        {
          src: require("@/assets/img/clients/08.png"),
          alt: "Logo 08",
          link: "#",
        },
        {
          src: require("@/assets/img/clients/09.png"),
          alt: "Logo 09",
          link: "#",
        },
        {
          src: require("@/assets/img/clients/10.png"),
          alt: "Logo 10",
          link: "#",
        },
        {
          src: require("@/assets/img/clients/11.png"),
          alt: "Logo 11",
          link: "#",
        },
        {
          src: require("@/assets/img/clients/12.png"),
          alt: "Logo 12",
          link: "#",
        },
        {
          src: require("@/assets/img/clients/13.png"),
          alt: "Logo 13",
          link: "#",
        },
        {
          src: require("@/assets/img/clients/14.png"),
          alt: "Logo 14",
          link: "#",
        },
        {
          src: require("@/assets/img/clients/15.png"),
          alt: "Logo 15",
          link: "#",
        },
        {
          src: require("@/assets/img/clients/16.png"),
          alt: "Logo 16",
          link: "#",
        },
        {
          src: require("@/assets/img/clients/17.png"),
          alt: "Logo 17",
          link: "#",
        },
        {
          src: require("@/assets/img/clients/18.png"),
          alt: "Logo 18",
          link: "#",
        },
      ],
      isPaused: false,
    };
  },
  computed: {
    duplicatedLogos() {
      return [...this.logos, ...this.logos];
    },
  },
  methods: {
    pause() {
      this.isPaused = true;
      this.$refs.slideContainer.style.animationPlayState = "paused";
    },
    resume() {
      this.isPaused = false;
      this.$refs.slideContainer.style.animationPlayState = "running";
    },
  },
};
</script>

<template>
  <div id="logo-banner">
    <div class="fade-left"></div>
    <div class="fade-right"></div>
    <div class="logos" @mouseover="pause" @mouseleave="resume">
      <div
        ref="slideContainer"
        class="logos-slide"
        :class="{ reverse: !leftToRight }"
      >
        <a
          v-for="(logo, index) in duplicatedLogos"
          :key="index"
          :href="logo.link"
          target="_blank"
        >
          <img :src="logo.src" :alt="logo.alt" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
#logo-banner {
  text-align: center;
  overflow: hidden;
  display: flex;
  width: 100%;
}

.fade-left,
.fade-right {
  /* outline: 2px solid red; */
  position: absolute;
  align-self: center;
  /* top: 0;
  bottom: 0; */
  width: 10vw;
  height: 120%;
  background: linear-gradient(to left, transparent, var(--background) 90%);
  z-index: 10;
  pointer-events: none;
  border-radius: 0 100px 100px 0;
}

.fade-right {
  right: 0;
  transform: rotate(180deg);
}

.fade-left {
  left: 0;
}

.logos {
  display: flex;
  overflow: hidden;
  position: relative;
  padding: 20px 0;
}

.logos-slide {
  display: flex;
  min-width: 200%;
  animation: scroll 50s linear infinite;
}

.logos-slide.reverse {
  animation-direction: reverse;
  animation: scroll-reverse 50s linear infinite;
}

.logos-slide a {
  margin: 0 clamp(1rem, 2vw, 4rem);
}

.logos-slide img {
  height: clamp(100px, 15vw, 150px);
  object-fit: contain;
  filter: sepia(1) hue-rotate(180deg) grayscale(0.5);
  transition: transform 0.3s, filter 0.3s;
}

.logos-slide img:hover {
  filter: grayscale(0);
  transform: scale(1.1);
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-25%);
  }
}

@keyframes scroll-reverse {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(25%);
  }
}
</style>
