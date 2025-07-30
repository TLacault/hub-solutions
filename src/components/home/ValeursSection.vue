<template>
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
