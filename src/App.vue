<script setup>
import { RouterView } from "vue-router";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark navbar-bgcolor">
    <div class="container-fluid mx-5">
      <img src="/src/assets/img/logogold.png" alt="" style="width: 150px; height: 120px">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class=" collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto ">
          <li class="nav-item">
             <router-link class="nav-link active" to="/">Főoldal</router-link>

          </li>
          <li class="nav-item">
            <a class="nav-link mx-2" href="#">Szolgáltatásaink</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2" href="#">Árak</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Company
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Blog</a></li>
              <li><a class="dropdown-item" href="#">About Us</a></li>
              <li><a class="dropdown-item" href="#">Contact us</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<style scoped>
.navbar-bgcolor {
  background-color: rgba(52, 50, 48, 255);
}
</style>
