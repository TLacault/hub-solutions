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
</template>

<style scoped>
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
</style>
