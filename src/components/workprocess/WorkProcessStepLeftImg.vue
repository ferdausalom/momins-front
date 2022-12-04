<template>
  <div class="row">
    <div class="col-md-5">
      <slot></slot>
    </div>
    <div class="col-md-5 offset-md-2 d-flex align-items-center">
      <div class="process-text-part">
        <p
          class="number bg-light text-center d-flex align-items-center justify-content-center"
        >
          <span>{{ stepNumber }}</span>
        </p>
        <h4>{{ stepTitle }}</h4>
        <p>
          {{ stepDesc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  stepNumber: Number,
  stepTitle: String,
  stepDesc: String,
});
</script>

<style>
.process-part-img {
  border-radius: 100%;
  border: 12px solid rgb(255, 255, 255);
  outline: 10px solid #2bc2d7;
}
.process-text-part p {
  font-size: 18px;
  line-height: 28px;
  color: #666666;
}
.process-text-part .number {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 700;
  font-size: 74px;
  width: 138px;
  height: 138px;
  border-radius: 100%;
  border: 7px solid rgb(255, 255, 255);
  outline: 5px solid #2bc2d7;
  color: #666666;
}
.process-text-part .number span {
  margin: -18px 0 0 0;
}
.process-text-part h4 {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 52px;
  color: #000000;
  margin: 12px 0;
}
</style>
