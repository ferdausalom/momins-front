<template>
  <footer>
    <div class="container">
      <div class="row"></div>
      <div class="row">
        <ul
          class="social py-4 d-flex align-items-center justify-content-center"
        >
          <SocialLi social-link="http://">
            <Icon class="icon text-white" icon="ri:facebook-fill" />
          </SocialLi>
          <SocialLi social-link="http://" class="px-4">
            <Icon class="icon text-white" icon="jam:twitter" />
          </SocialLi>
          <SocialLi social-link="http://">
            <Icon class="icon text-white" icon="akar-icons:instagram-fill" />
          </SocialLi>
          <SocialLi social-link="http://" class="px-4">
            <Icon class="icon text-white" icon="ri:linkedin-fill" />
          </SocialLi>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import SocialLi from "@/components/footer/SocialLi.vue";
</script>

<style>
footer {
  background-color: #0f292d;
  border-top: 1px solid #6f6e6e;
}
.social {
  list-style: none;
  margin: 0;
  padding: 0;
}
.social li a .icon {
  font-size: 28px;
}
</style>
