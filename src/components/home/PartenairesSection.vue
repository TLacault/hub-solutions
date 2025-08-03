<script>
import PartenaireCard from "@/components/home/PartenaireCard.vue";

export default {
  name: "PartenairesSection",
  components: {
    PartenaireCard,
  },
  data() {
    return {
      partenaires: {
        1: {
          name: "L'Institut National de Recherche sur la Sécurité",
          link: "http://inrs.fr/",
          img: "01.png",
        },
        2: {
          name: "Bordeaux Métropole",
          link: "https://www.bordeaux-metropole.fr/",
          img: "02.png",
        },
        3: {
          name: "Le Département de la Gironde",
          link: "http://gironde.fr/",
          img: "03.png",
        },
        4: {
          name: "la Caisse Primaire d'Assurance Maladie",
          link: "http://cpam%20entreprises/",
          img: "04.png",
        },
        5: {
          name: "La Direction Régionale de l'Économie, de l'Emploi, du Travail et des Solidarités",
          link: "http://direccte%20nouvelle-aquitaine/",
          img: "05.png",
        },
        6: {
          name: "La Caisse d'Assurance Retraite et de la Santé au Travail",
          link: "http://carsat%20entreprises/",
          img: "06.png",
        },
        7: {
          name: "Le Centre National de la Fonction Publique Territoriale",
          link: "http://direccte%20nouvelle-aquitaine/",
          img: "07.png",
        },
      },
    };
  },
};
</script>

<template>
  <section id="partenaires">
    <div class="bg-shape">
      <img src="@/assets/img/home/shape_03.webp" alt="Background Image" />
    </div>

    <div class="container">
      <h2 class="section-title gradient-title">Nos Partenaires</h2>
      <div class="partenaire-list">
        <li v-for="(part, id) in partenaires" :key="id" class="partenaire">
          <PartenaireCard :name="part.name" :link="part.link" :img="part.img" />
        </li>
      </div>
    </div>
  </section>
</template>

<style scoped>
#partenaires {
  margin-bottom: -20vh;
}

.partenaire-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
</style>
