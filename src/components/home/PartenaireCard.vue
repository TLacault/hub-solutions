<script>
export default {
  name: "PartenaireCard",
  props: {
    name: String,
    link: String,
    img: String,
  },
};
</script>

<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="partenaire-card"
  >
    <div class="card-img">
      <img :src="require(`@/assets/img/partenaires/${img}`)" :alt="name" />
    </div>
    <h3>{{ name }}</h3>
  </a>
</template>

<style scoped>
* {
  /* outline: 1px solid red; */
}

.partenaire-card {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  color: inherit;
  padding: 2rem;
  gap: 1rem;

  max-width: 400px;

  background: radial-gradient(
    circle at bottom,
    rgba(15, 103, 255, 0.2) -50%,
    rgba(255, 255, 255, 0) 90%
  );
  border-radius: 20px;
  backdrop-filter: blur(8px);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2), inset 0 0 10px rgba(0, 0, 0, 0.1);

  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.3)
    );
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    scale: 1.02;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }
}

.card-img {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & img {
    height: 100%;
    max-height: 150px;
    width: auto;
    object-fit: contain;
    display: block;
  }
}

@media (max-width: 850px) {
  .partenaire-card {
    width: 80vw;
  }
}
</style>
