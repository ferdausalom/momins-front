<template>
  <div class="our-services">
    <div class="container">
      <div class="row">
        <h3 class="text-center text-secondary">Our Services</h3>
        <p class="text-center text-secondary">
          No templates, only exclusive solutions
        </p>
      </div>
      <div class="row">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  </div>
</template>

<script setup>
import ServiceCard from "@/components/services/ServiceCard.vue";
</script>

<style>
.our-services {
  padding: 0 0 140px 0;
}
.our-services h3 {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  padding: 110px 0 0px 0;
}
.our-services p {
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
}
</style>
