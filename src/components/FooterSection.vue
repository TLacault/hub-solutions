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
    <h1>Footer</h1>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;
  background-color: rgba(200, 200, 200, 0.2);
  outline: 1px solid rgba(0, 0, 0, 1);
}
</style>
