<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <!-- Logo  -->
          <TheLogo />
          <!-- Nav toggle icon  -->
          <NavToggler />
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <Li>
                <router-link class="nav-link text-secondary px-4" to="/"
                  >Home</router-link
                >
              </Li>
              <Li>
                <router-link class="nav-link text-secondary px-4" to="/"
                  >Pages</router-link
                >
              </Li>
              <Li>
                <router-link class="nav-link text-secondary px-4" to="/"
                  >Services</router-link
                >
              </Li>
              <Li>
                <router-link class="nav-link text-secondary px-4" to="/"
                  >Blog</router-link
                >
              </Li>
              <Li>
                <router-link class="nav-link text-secondary px-4" to="/"
                  >Contact</router-link
                >
              </Li>
            </ul>
          </div>
          <!-- Search  -->
          <NavRight />
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import Li from "@/components/nav/Li.vue";
import NavToggler from "@/components/nav/NavToggler.vue";
import TheLogo from "@/components/TheLogo.vue";
import NavRight from "@/components/nav/NavRight.vue";
</script>

<style>
.navbar-nav {
  list-style: none;
}
.navbar-nav li a:hover {
  color: #2bc2d7 !important;
}
</style>
