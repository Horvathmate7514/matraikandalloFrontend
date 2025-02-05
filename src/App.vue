<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import AppFooter from "./components/AppFooter.vue";
var pathname = window.location.pathname.split("/").slice(1)[1]

</script>

<template>

  <NavBar v-if="pathname!= 'admin' && pathname!= '/admin/login'"
  />
  

  <router-view />
 
  <AppFooter v-if="pathname!= 'admin' && pathname!= '/admin/login'"
  />
</template>

<style scoped>
</style>
