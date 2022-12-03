<template>
  <footer>
    <div class="container">
      <div class="row"></div>
      <div class="row">
        <ul
          class="social py-4 d-flex align-items-center justify-content-center"
        >
          <li>
            <a href="http://"
              ><Icon class="icon text-white" icon="ri:facebook-fill"
            /></a>
          </li>
          <li class="px-4">
            <a href=""><Icon class="icon text-white" icon="jam:twitter" /></a>
          </li>
          <li>
            <a href="http://"
              ><Icon class="icon text-white" icon="akar-icons:instagram-fill"
            /></a>
          </li>
          <li class="px-4">
            <a href="http://"
              ><Icon class="icon text-white" icon="ri:linkedin-fill"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped>
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
