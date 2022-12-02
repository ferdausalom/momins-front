<template>
  <div class="hero-area position-relative">
    <img
      class="position-absolute angle-up-img bottom-0 start-0"
      src="../assets/images/home/angle-up.png"
      alt=""
    />
    <img
      class="position-absolute star-img"
      src="../assets/images/home/star.png"
      alt=""
    />
    <img
      class="position-absolute angle-left-img top-0 end-0"
      src="../assets/images/home/angle-left.png"
      alt=""
    />

    <TheHeader />
    <Slide />
  </div>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
import Slide from "@/components/slide/Slide.vue";
</script>

<style scoped>
.hero-area {
  height: 87vh;
}
.star-img {
  top: 220px;
  left: 184px;
  z-index: -1;
}
.angle-left-img,
.angle-up-img {
  z-index: -2;
}
</style>
