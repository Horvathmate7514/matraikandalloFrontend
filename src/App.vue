<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import AppFooter from "./components/AppFooter.vue";

</script>

<template>

  <NavBar class="disabled"/>
  

  <router-view class="disabled"/>
 
  <AppFooter class="disabled"/>
</template>

<style scoped>
.disabled {
    pointer-events: none;
}
</style>
