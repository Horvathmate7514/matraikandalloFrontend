<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import AppFooter from "./components/AppFooter.vue";

</script>

<template>

  <NavBar />
  

  <router-view />
 
    <AppFooter />
</template>

<style scoped></style>
