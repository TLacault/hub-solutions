<script>
export default {
  name: "FooterSection",
  //   props: {
  //     msg: String,
  //   },
};
</script>

<template>
  <footer>
    <div class="links">
      <div class="link-group contact">
        <h2>Contact</h2>
        <router-link to="/contact">
          <i class="ri-survey-fill"></i>
          <p>Formulaire de contact</p>
        </router-link>
        <a href="mailto:contact@hub-solutions.fr">
          <i class="ri-mail-send-fill"></i>
          <p>contact@hub-solutions.fr</p>
        </a>
        <a href="tel:+33629367787">
          <i class="ri-phone-fill"></i>
          <p>+33 6 29 36 77 87</p>
        </a>
        <a href="https://maps.app.goo.gl/8GNyXBzzET7bvDbw6" target="_blank">
          <i class="ri-map-pin-fill"></i>
          <p>Nouvelle Aquitaine</p>
        </a>
      </div>
      <div class="link-group formations">
        <h2>Formations</h2>
        <router-link to="/formations">
          <i class="ri-book-open-fill"></i>
          <p>Catalogue de formations</p>
        </router-link>
        <router-link to="/formations/sst">
          <i class="ri-book-fill"></i>
          <p>Sauveteur Secouriste du Travail</p>
        </router-link>
        <router-link to="/formations/prap-ibc">
          <i class="ri-book-fill"></i>
          <p>Prévention des Risques liés à l'Activité Physique - PRAP</p>
        </router-link>
        <router-link to="/formations/epi">
          <i class="ri-book-fill"></i>
          <p>Equipements de Protection Individuelle - EPI</p>
        </router-link>
        <router-link to="/formations/bases">
          <i class="ri-book-fill"></i>
          <p>Les bases de la prévention</p>
        </router-link>
      </div>
      <div class="link-group audits">
        <h2>Audits</h2>
        <router-link to="/audits">
          <i class="ri-file-list-3-fill"></i>
          <p>Catalogue d'audits</p>
        </router-link>
        <router-link to="/audits/document-unique">
          <i class="ri-file-list-2-fill"></i>
          <p>Evaluation des risques & Rédaction du document unique</p>
        </router-link>
        <router-link to="/audits/epi">
          <i class="ri-file-list-2-fill"></i>
          <p>Audit et conseil en EPI</p>
        </router-link>
        <router-link to="/audits/etude-postes">
          <i class="ri-file-list-2-fill"></i>
          <p>Etude de postes</p>
        </router-link>
      </div>
      <div class="link-group partenaires">
        <h2>Partenaires</h2>
        <a href="https://www.dreets.gouv.fr/nouvelle-aquitaine" target="_blank">
          <i class="ri-building-2-fill"></i>
          <p>DREETS Nouvelle-Aquitaine</p>
        </a>
        <a href="https://www.inrs.fr/" target="_blank">
          <i class="ri-building-2-fill"></i>
          <p>INRS</p>
        </a>
        <a href="https://www.ameli.fr/entreprise" target="_blank">
          <i class="ri-building-2-fill"></i>
          <p>CPAM Entreprises</p>
        </a>
        <a href="https://www.carsat-nouvelle-aquitaine.fr/" target="_blank">
          <i class="ri-building-2-fill"></i>
          <p>CARSAT Nouvelle-Aquitaine</p>
        </a>
      </div>
      <div class="link-group informations">
        <h2>Informations</h2>
        <router-link to="/plan">
          <i class="ri-map-2-fill"></i>
          <p>Plan du site</p>
        </router-link>
        <router-link to="/glossaire">
          <i class="ri-book-marked-fill"></i>
          <p>Glossaire</p>
        </router-link>
        <router-link to="/legal">
          <i class="ri-scales-3-fill"></i>
          <p>Mentions légales</p>
        </router-link>
      </div>
    </div>
    <div class="copyright">
      <img src="@/assets/img/logo/original.webp" alt="HUB Solution Logo" />
      <h1>HUB Solutions</h1>
      <p>&copy; 2025 Hub Solutions. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 0;
  gap: 2rem;
  margin-top: 30vh;
}

.links {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 100%;
  padding: 1rem;
}

.link-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 250px;
  width: 18%;

  h2 {
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--text);
    margin-bottom: 0.5rem;
  }

  a {
    text-decoration: none;
    color: var(--text);
    display: flex;
    text-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: var(--shade);

    &:hover {
      background-color: var(--shade-hover);
    }

    i {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.2;
    }
  }
}

@media (max-width: 570px) {
  .link-group {
    width: 100%;
    max-width: 95%;

    & h2 {
      text-align: left;
    }
  }
}

.link-group:nth-of-type(1) a i {
  color: var(--logo_1);
}
.link-group:nth-of-type(2) a i {
  color: var(--logo_2);
}
.link-group:nth-of-type(3) a i {
  color: var(--logo_3);
}
.link-group:nth-of-type(4) a i {
  color: var(--logo_6);
}
.link-group:nth-of-type(5) a i {
  color: var(--logo_5);
}

.copyright {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: var(--text);
  text-align: center;

  & img {
    width: 80px;
    height: auto;
  }

  & h1 {
    font-family: "Arial Black", sans-serif;
    font-size: 1.5rem;
  }

  & p {
    font-size: 0.875rem;
  }
}
</style>
