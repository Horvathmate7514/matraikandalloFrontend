<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import AppFooter from "./components/AppFooter.vue";
var pathname = window.location.pathname.split("/")

</script>

<template>
  <div class="app-container">
    <NavBar />
    <main class="main-content">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<style>
/* Global responsive styles */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  width: 100%;
}

/* Responsive container adjustments */
@media (max-width: 768px) {
  .main-content {
    padding: 0;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 14px;
  }
}

/* Ensure proper spacing for admin pages */
.admin-container {
  margin-top: 20px;
}

@media (max-width: 768px) {
  .admin-container {
    margin-top: 10px;
  }
}

/* Smooth scrolling for better mobile experience */
html {
  scroll-behavior: smooth;
}

/* Touch-friendly button sizes on mobile */
@media (max-width: 768px) {
  button, .btn {
    min-height: 44px;
    min-width: 44px;
  }
  
  input, select, textarea {
    min-height: 44px;
  }
}

/* Prevent horizontal scrolling on mobile */
@media (max-width: 768px) {
  body {
    overflow-x: hidden;
  }
  
  .container, .container-fluid {
    padding-left: 15px;
    padding-right: 15px;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .btn, button {
    border: 2px solid currentColor;
  }
  
  input, select, textarea {
    border: 2px solid currentColor;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #1a1a1a;
    color: #ffffff;
  }
  
  .card, .admin-card, .upload-card, .category-section {
    background-color: #2d2d2d;
    border-color: #404040;
  }
  
  input, select, textarea {
    background-color: #3d3d3d;
    border-color: #555;
    color: #ffffff;
  }
  
  .form-label {
    color: #e0e0e0;
  }
}
</style>
