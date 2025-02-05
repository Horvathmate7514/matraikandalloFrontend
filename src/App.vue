<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import AppFooter from "./components/AppFooter.vue";
var pathname = window.location.pathname.split("/")

</script>

<template>
  <NavBar v-if="!pathname.includes('admin')" />


  <router-view />

  <AppFooter v-if="!pathname.includes('admin')" />
</template>

<style scoped></style>
