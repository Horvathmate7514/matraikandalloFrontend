<template>
    <div class="d-flex justify-content-center align-items-center vh-100">
      <div class="card p-4 shadow-lg" style="width: 400px; padding: 2rem;">
        <h2 class="text-center text-dark">Bejelentkezés</h2>
        <form>
          <div class="input-box mb-3">
            <input v-model="email" type="email" class="form-control" id="email" placeholder="E-mail" required />
          </div>
          <div class="input-box mb-3">
            <input v-model="password" type="password" class="form-control" id="password" placeholder="Jelszó" required />
          </div>
          <div class="input-box button mb-3">
            <input type="submit" class="logingomb btn w-100" value="Bejelentkezés" />
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .logingomb {
      background-color: #ecd089;
  }
  

  </style>
  