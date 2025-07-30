<template>
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
</template>

<style scoped>
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
</style>
