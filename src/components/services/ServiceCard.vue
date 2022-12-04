<template>
  <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
    <div class="card-area position-relative bg-light text-center">
      <div class="card-hover position-absolute"></div>
      <div
        class="card-icon m-auto d-flex align-items-center justify-content-center text-center"
      >
        <!-- Card image or icon  -->
        <slot></slot>
      </div>
      <h2 class="card-title">{{ cardTitle }}</h2>
      <p class="card-desc">
        {{ cardDesc }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  cardTitle: String,
  cardDesc: String,
});
</script>

<style>
.card-area {
  border-radius: 10px;
  padding: 50px 57px;
  width: 409px;
  /* box-shadow: 0 0 11px #b2b2b2; */
}
.card-area h2 {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 52px;
  padding: 50px 0 20px 0;
}
.card-area p {
  font-size: 18px;
  line-height: 28px;
  margin: 0;
}
.card-icon {
  width: 138px;
  height: 138px;
  border-radius: 100%;
  border: 7px solid rgb(255, 255, 255);
  outline: 5px solid #2bc2d7;
}
.card-hover {
  background-color: #2bc2d7;
  top: 17px;
  left: 16px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.9s ease-in-out, box-shadow 0.9s ease-in-out,
    transform 0.8s ease-in-out;
}
.card-area:hover .card-hover {
  top: 17px;
  left: 16px;
  opacity: 1;
  /* transform: rotate(-4deg);
  -ms-transform: rotate(-4deg);
  -webkit-transform: rotate(-4deg); */
  box-shadow: 10px 10px 15px 1px #e8e8e8;
  transform: matrix(1, -0.07, 0.07, 1, 0, 0);
}
</style>
