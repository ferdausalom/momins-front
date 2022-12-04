<template>
  <li v-bind="$attrs">
    <a :href="socialLink">
      <slot></slot>
    </a>
  </li>
</template>
<img v-bind:src="'/media/avatars/' + joke.avatar" />

<script setup>
defineProps({
  socialLink: [String, Number],
});
</script>
