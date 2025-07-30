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
  <section id="hero">
    <div class="shape-01 anim_appear-shape">
      <img src="@/assets/img/home/shape_01.png" alt="Hero Image" />
    </div>

    <h1 class="anim_appear">HUB Solutions</h1>
    <h2 class="anim_appear">
      Formation et conseil en prévention des risques professionnels
    </h2>
    <div class="links anim_appear">
      <router-link to="/formations">
        <p>Formations</p>
        <i class="ri-arrow-right-circle-line"></i>
      </router-link>
      <router-link to="/audits">
        <p>Audits</p>
        <i class="ri-arrow-right-circle-line"></i>
      </router-link>
    </div>

    <div class="scroll-down anim_appear">
      <p>Découvrir</p>
      <i class="ri-arrow-down-double-fill bounce"></i>
    </div>
  </section>

  <section id="about">
    <div class="container">
      <div class="title">
        <i class="ri-double-quotes-l"></i>
        <h2>HUB Solutions, votre partenaire prévention</h2>
        <i class="ri-double-quotes-r"></i>
      </div>
      <div class="content">
        <div class="illustration">
          <img src="@/assets/img/home/hand_shake.png" alt="Hero Image" />
        </div>
        <div class="text">
          <p>
            Chez <span class="gradient_text">HUB Solutions</span>, nous
            considérons la <span>diversité</span> comme une source de richesse.
            Chaque individu est différent et chaque entreprise l'est tout
            autant.
          </p>
          <p>
            A l'opposé de beaucoup de nos concurrents, nous assurons bien plus
            qu'une simple prestation. Nous offrons à chacun de nos clients un
            <span>accompagnement complet et personnalisé</span> dans leur
            démarche de prévention.
          </p>
          <p>
            C'est pourquoi nous avons à cœur de proposer des audits et des
            formations calibrées et adaptées aux besoins et aux spécificités de
            chaque entreprise. Par ailleurs, nous sommes convaincus que
            <span>la bienveillance, l'écoute et la confiance mutuelle</span>
            sont de réels moteurs d'apprentissage et de réussite. C'est pour
            cela que nous avons inscrit ces trois principes au cœur de toutes
            nos formations.
          </p>
          <p>
            Être <span>le partenaire de nos clients</span>, c'est ce qui fait la
            richesse de notre métier et la force de <span>Hub Solutions</span>.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="valeurs">
    <div class="container">
      <div class="shape-02">
        <img src="@/assets/img/home/shape_02.png" alt="Valeur Background" />
      </div>
      <div class="title gradient_text">Nos valeurs</div>
      <div class="cards">
        <div class="card">
          <i class="ri-verified-badge-fill"></i>
          <div class="name">Confiance</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua !
          </p>
        </div>
        <div class="card">
          <i class="ri-medal-fill"></i>
          <div class="name">Professionnalisme</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua !
          </p>
        </div>
        <div class="card">
          <i class="ri-shake-hands-fill"></i>
          <div class="name">Diversité</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua !
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* HERO */
.shape-01 {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  top: 0;
  height: 100dvh;
  animation-delay: 0.5s;

  img {
    height: 100%;
    object-fit: cover;
  }
}

#hero {
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
    animation-delay: 1s;
  }

  h2 {
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: 600;
    color: var(--text-700);
    text-align: center;
    margin-bottom: 2rem;
    width: 90%;
    max-width: 500px;
    text-wrap: wrap;
    animation-delay: 1.2s;
  }

  .links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    animation-delay: 1.6s;

    & a {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      border-radius: 100px;
      /* width: fit-content; */
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

      & i {
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

@media (max-width: 500px) {
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

.scroll-down {
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

  animation-delay: 2.4s;

  & p {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text);
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    opacity: 0.8;
  }

  & i {
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
#about {
  margin-top: 30vh;
}

#about .title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;

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

#about .content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;

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

      &:nth-child(1) {
        font-weight: 800;
      }
    }
  }
}

@media (max-width: 1300px) {
  #about .content {
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

/* VALEURS */
#valeurs {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  gap: 2rem;
  margin-top: 50vh;
  margin-bottom: 30vh;

  & .title {
    /* font-size: 4rem; */
    font-size: clamp(3rem, 5vw, 4rem);
    font-weight: bold;
    text-align: center;
    margin-bottom: 3rem;
  }
}

.shape-02 {
  position: absolute;
  z-index: -1;

  & img {
    width: 100%;
    height: auto;
    object-fit: cover;
    opacity: 0.1;
  }
}

#valeurs .cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;

  & .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 350px;
    max-width: 80vw;
    padding: 2rem;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;

    &:hover {
      transform: translateY(-5px);
      scale: 1.02;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    }

    i {
      font-size: 2.5rem;
      color: var(--primary);
    }

    .name {
      font-size: 1.4rem;
      font-weight: bold;
      color: var(--text);
      text-align: center;
    }

    p {
      font-size: 1rem;
      color: var(--text-700);
      line-height: 1.5;
      opacity: 0.8;
    }
  }
}
</style>
