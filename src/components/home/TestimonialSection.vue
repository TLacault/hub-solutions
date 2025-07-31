<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const testimonials = [
  {
    name: "Laura Incaurgarat",
    photo: require("@/assets/img/testimonials/laura_incaurgarat.png"),
    rating: 5,
    comment:
      "Eric est un formateur formidable ! Il a su rendre la formation fun pour réussir à captivé les personnes présentes !! Si tous les formateurs pouvaient mener les formations de manière similaire ce serait merveilleux !!! Pour ma part, j'ai trouvé ça beaucoup plus simple de me remémorer et retenir les gestes de premiers secours ! Je pense que je serais bien plus à l'aise si je suis emmener à porter secours un jour! Belle journée de formation ! Merci Éric !!",
  },
  {
    name: "Damien",
    photo: require("@/assets/img/testimonials/user_01.png"),
    rating: 5,
    comment:
      "Formation préalable des Assistants de Prévention réalisée sur 5 jours avec Eric qui est un très bon formateur. Merci pour ton dynamisme, ta bonne humeur et ton professionnalisme !",
  },
  {
    name: "Frederic Lacosse",
    photo: require("@/assets/img/testimonials/user_01.png"),
    rating: 5,
    comment:
      "Eric très bonne journée passer avec toi, ce fût un plaisir et j espère qu on ce recroisera car t'es une personne franche et humaine ce qui est rare aujourd'hui ces pour ca que tu es une personne qui mérite notre respect. Cordialement. Fred",
  },
  {
    name: "Karry All",
    photo: require("@/assets/img/testimonials/user_02.png"),
    rating: 5,
    comment:
      "Merci Eric pour ton professionnalisme et ta bonne humeur. La formation que j'ai suivi en groupe Sensibilisation aux gestes de premiers secours va mettre très utile. C'était clair et pratique. Tu as bien insisté sur les mises en situations/cas pratique. LA meilleure façon de mémoriser les gestes. Très bonne continuation.",
  },
  {
    name: "Mariehortense Laporte",
    photo: require("@/assets/img/testimonials/user_02.png"),
    rating: 5,
    comment:
      "Merci beaucoup, Eric pour cette formation, très enrichissante,et bien menée, dans la joie et la bonne humeur. Un professionalisme exemplaire. Bien à toi.",
  },
  {
    name: "Corinne Lacosse",
    photo: require("@/assets/img/testimonials/user_02.png"),
    rating: 5,
    comment:
      "Formation très intéressante animé par un formateur au top. Merci Eric. Et au plaisir d'une prochaine fois. Cordialement. Corinne",
  },
  {
    name: "Celine Bourdet",
    photo: require("@/assets/img/testimonials/user_02.png"),
    rating: 5,
    comment:
      "Formation PRAPS 2S sur 4 jours avec Éric, un super formateur dynamique, bienveillant et souriant.Une formation complète et ludique !Je vous conseille cette formation qui est top avec Éric !vous passerez un super moment tout en apprenant de nouvelles techniques indispensables pour continuer votre profession en évitant les Accidents du travail et durer dans le temps! Être acteurs(trices) auprès de vos collègues dans la prévention des risques liés à l'activité physique sanitaire et social accompagnement à la mobilité.Mille Mercis Éric !Une Aide-soignante en Ehpad depuis 20 ans.Céline",
  },
  {
    name: "Céline Lambert",
    photo: require("@/assets/img/testimonials/celine_lambert.png"),
    rating: 5,
    comment:
      "La formation sur La Sensibilisation aux Premiers Secours proposée a été à la hauteur de mes attentes. Tous les points abordés l'ont été avec justesse et précisions. Merci pour votre sérieux et votre professionnalisme. ",
  },
  {
    name: "Cathy Botto",
    photo: require("@/assets/img/testimonials/cathy_botto.png"),
    rating: 5,
    comment:
      "Très bon formateur qui connait son sujet et qui a eu à coeur de nous transmettre toutes les informations utiles. Par ailleurs, il a très bien géré un problème de salle et il a sur rebondir pour délivrer son cours dans la joie et la bonne humeur. Merci Eric !",
  },
  {
    name: "presset christiane",
    photo: require("@/assets/img/testimonials/user_02.png"),
    rating: 5,
    comment:
      "intervenant passionnant et passionné. une journée de savoirs et d'enseignements dans une ambiance détendue et amicale",
  },
  // Add up to 10 testimonials max
];

const currentIndex = ref(0);
let intervalId = null;
const isPaused = ref(false);

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length;
};

const goToIndex = (index) => {
  currentIndex.value = index;
  restartInterval();
};

const restartInterval = () => {
  clearInterval(intervalId);
  if (!isPaused.value) {
    intervalId = setInterval(nextTestimonial, 10000);
  }
};

const togglePause = () => {
  isPaused.value = !isPaused.value;
  restartInterval();
};

onMounted(() => {
  intervalId = setInterval(nextTestimonial, 10000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <section id="testimonials">
    <div class="bg-shape">
      <img src="@/assets/img/home/shape_00.webp" alt="Background Image" />
    </div>

    <div class="container">
      <h1 class="gradient-title">Tous nos clients sont satisfaits</h1>
      <div class="carousel">
        <div class="card">
          <div class="identity">
            <img
              :src="testimonials[currentIndex].photo"
              :alt="`Photo de ${testimonials[currentIndex].name}`"
              class="profile-photo"
            />
            <div class="name-rating">
              <h3 class="name">{{ testimonials[currentIndex].name }}</h3>
              <div class="stars">
                <i
                  v-for="i in 5"
                  :key="i"
                  :class="[
                    'ri-star-fill',
                    i <= testimonials[currentIndex].rating
                      ? 'active-star'
                      : 'inactive-star',
                  ]"
                ></i>
              </div>
            </div>
          </div>

          <p class="comment">{{ testimonials[currentIndex].comment }}</p>
        </div>

        <div class="controls">
          <button @click="togglePause" class="pause-btn">
            <i
              :class="isPaused ? 'ri-play-circle-fill' : 'ri-pause-circle-fill'"
              class="ri-2x"
            ></i>
          </button>
          <div class="dots">
            <span
              v-for="(_, index) in testimonials"
              :key="index"
              class="dot"
              :class="{ active: index === currentIndex }"
              @click="goToIndex(index)"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  /* outline: 1px solid red; */
}

.bg-shape {
  opacity: 0.4;
}

.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.card {
  position: relative;
  max-width: 600px;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: var(--shadow-md);
  background: linear-gradient(
    245deg,
    var(--background) 50%,
    var(--secondary) 100%
  );

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 22px;
    background: linear-gradient(
      220deg,
      var(--primary) 0%,
      var(--background) 70%
    );
    z-index: -1;
  }
}

.identity {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.profile-photo {
  width: 80px;
  height: 80px;
  border-radius: 100px;
  object-fit: cover;
  margin-bottom: 1rem;
}

.name-rating {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.name {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.stars {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.ri-star-fill {
  font-size: 1.2rem;
  margin: 0 2px;
}

.active-star {
  color: var(--primary);
}

.inactive-star {
  color: var(--secondary);
}

.comment {
  font-size: 1.1rem;
  opacity: 0.85;
  line-height: 1.5;
  font-style: italic;
  text-align: justify;
}

/* Carousel Controls */
.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
}

.dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  background-color: var(--secondary);
  border-radius: 100px;
  /* opacity: 0.5; */
  outline: 1px solid var(--primary);
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); */
  cursor: pointer;
}

.dot.active {
  width: 24px;
  background-color: var(--primary);
}

.pause-btn {
  color: var(--primary);

  i {
    color: var(--primary);
  }
}

.pause-btn:hover {
  transform: scale(1.1);
}
</style>
