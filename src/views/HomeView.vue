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
  <div class="bg-shape fade-in-shape">
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

    <div class="scoll-down appear">
      <p>Découvrir</p>
      <i class="ri-arrow-down-double-fill bounce"></i>
    </div>
  </div>

  <section class="about container">
    <div class="title">
      <i class="ri-double-quotes-l"></i>
      <h2>Hub Solutions, votre partenaire prévention</h2>
      <i class="ri-double-quotes-r"></i>
    </div>
    <div class="content">
      <div class="illustration">
        <img src="@/assets/img/home/hand_shake.png" alt="Hero Image" />
      </div>
      <div class="text">
        <p>
          Chez <span>Hub Solutions</span>, nous considérons la
          <span>diversité</span> comme une source de richesse. Chaque individu
          est différent et chaque entreprise l'est tout autant.
        </p>
        <p>
          A l'opposé de beaucoup de nos concurrents, nous assurons bien plus
          qu'une simple prestation. Nous offrons à chacun de nos clients un
          <span>accompagnement complet et personnalisé</span> dans leur démarche
          de prévention.
        </p>
        <p>
          C'est pourquoi nous avons à cœur de proposer des audits et des
          formations calibrées et adaptées aux besoins et aux spécificités de
          chaque entreprise. Par ailleurs, nous sommes convaincus que
          <span>la bienveillance, l'écoute et la confiance mutuelle</span> sont
          de réels moteurs d'apprentissage et de réussite. C'est pour cela que
          nous avons inscrit ces trois principes au cœur de toutes nos
          formations.
        </p>
        <p>
          Être <span>le partenaire de nos clients</span>, c'est ce qui fait la
          richesse de notre métier et la force de <span>Hub Solutions</span>.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* HERO */
.bg-shape {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  width: 100%;
  height: 100vh;
  animation-delay: 0.5s;

  & img {
    max-width: 100%;
    max-height: 150%;
    object-fit: cover;
    /* overflow: hidden; */
    /* animation: hue-shift 10s infinite linear; */
  }
}

.hero {
  animation-delay: 1s;

  h1 {
    font-family: "Arial Black", sans-serif;
    font-size: clamp(2rem, 10vw, 5rem);
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
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: 600;
    opacity: 0.8;
    line-height: 1.5;
    color: var(--text);
    text-align: center;
    margin-bottom: 2rem;
    width: 95%;
    max-width: 500px;
    text-wrap: wrap;
  }

  .links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
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
        font-size: clamp(1rem, 2vw, 1.2rem);
        font-weight: 600;
        margin: 0;
        color: var(--background);
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      }

      i {
        font-size: clamp(1.5rem, 2vw, 1.5rem);
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

@media (max-width: 400px) {
  .links {
    flex-direction: column !important;
    align-items: center;
    justify-content: center;

    & a {
      display: flex;
      justify-content: space-between;
      width: 100%;
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

/* ABOUT */
.about * {
  /* outline: 1px solid red; */
}

.about {
  outline: 1px solid red;
  margin-top: 30vh;
}

.about .title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;

  & i {
    font-size: 3rem;
    color: var(--primary);
  }

  & h2 {
    font-size: clamp(2rem, 5vw, 2.5rem);
    font-weight: bold;
    color: var(--text);
    text-align: center;
    max-width: 800px;
  }
}

.about .content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  padding: 2rem;

  & .illustration {
    width: 50%;
    /* min-width: 500px; */
    max-width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      max-width: 100%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }

  & .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    min-width: 40%;
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: var(--text);
    text-align: justify;

    p {
      font-weight: 400;
      line-height: 1.6;
      opacity: 0.9;
    }

    span {
      font-weight: 700;
      /* color: var(--primary); */
    }
  }
}

@media (max-width: 1300px) {
  .about .content {
    flex-wrap: wrap;
    /* justify-content: center; */

    & .illustration {
      width: 100%;
      margin-bottom: 2rem;
      max-height: 30vh;
      overflow: hidden;
      border-radius: 10px;

      & img {
        object-fit: contain;
      }
    }
    & .text {
      text-align: left;
    }
  }
}
</style>
