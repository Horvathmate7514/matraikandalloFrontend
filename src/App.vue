<script setup>
import { RouterView } from "vue-router";
import AppFooter from "./components/AppFooter.vue";
import { ref } from "vue";

const CloseNavElements = () => {
  isNavbarActive.value = false;
};

const isNavbarActive = ref(false);


const toggleNavbar = () => {
  isNavbarActive.value = !isNavbarActive.value;
  const menuIcon = document.getElementById("menu-icon");
  if (isNavbarActive.value) {
    menuIcon.style.transform = "rotate(180deg)";
  } else {
    menuIcon.style.transform = "rotate(0deg)";
  }
  isCartActive.value = false;
  isUserActive.value = false;
};

</script>

<template>
  <body>
    
 
  <header>
  <div class="branding">
      <router-link to="/" class="logo">
        <img class="logoimg" src="/src/assets/img/logogold_wobg.png" alt="" />
      </router-link>
    </div>

    <ul class="navbar mx-auto" :class="{ active: isNavbarActive }">
      <li>
        <router-link
          to="/"
          class="link"
          @click="CloseNavElements"
          >Nyitólap</router-link
        >
      </li>
      <li>
        <router-link
          class="link"
          to=""
          @click="CloseNavElements"
          >Képgaléria</router-link
        >
      </li>
      <li>
        <a
          class="link"
          href="https://www.facebook.com/Matraikandallo" target="_blank"
          @click="CloseNavElements"
          >Facebook</a>
      </li>
      <li>
        <a
          class="link"
          href="https://www.instagram.com/matraikandallo/" target="_blank"
          @click="CloseNavElements"
          >Instagram</a>
      </li>
      <li>
        <a
          class="link"
          href="mailto:Matraikandallo@gmail.com" 
          @click="CloseNavElements"
          >Email</a>
      </li>
      <li>
        <a
          class="link"
          href="tel:+36309647351" 
          @click="CloseNavElements"
          >+36309647351</a>
      </li>
      
      <!-- <div >
    <li class="link">
      <roter-link class="link" to="https://www.facebook.com/Matraikandallo" target="_blank">Facebbok</roter-link>
    </li>
  
    <button type="button" class="btn  btn-lg btn-floating mx-2">
      <a href="https://www.instagram.com/matraikandallo/" target="_blank">Instagram</a>
    </button>
    <button type="button" class="btn btn-lg btn-floating mx-2">
      <a  href="mailto:Matraikandallo@gmail.com">Email</a>
    </button>
    <button type="button" class="btn btn-lg btn-floating mx-2">
      <a href="tel:36309647351">+36309647351</a>
    </button> -->
  <!-- </div> -->
    </ul>



  </header>
</body>
  <router-view />
</template>

<style scoped>
i{
  cursor: pointer;
}






* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-padding-top: 4rem;
  scroll-behavior: smooth;
  list-style: none;
  text-decoration: none;
}

.logoimg {
  width: 100px;
}

.btn {
  padding: 0.7rem 1.2rem;

  color: var(--bg-color);
  font-weight: 500;
  display: inline-block;

  clip-path: polygon(100% 0, 93% 50%, 86% 99%, 0% 100%, 7% 47%, 13% 0%);
}



.btn:hover {
  background: gray;
  letter-spacing: 2px;
  transition: 0.2s;
}

header {
  width: 100%;
  top: 0;
  right: 0;
  z-index: 10000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px;
  transition: 0.5s linear;
  background-color: #2a2826;
  position: fixed;
  transition: 0.5s ease all;
  z-index: 99;

  
}

.navbar {
  display: flex;
  column-gap: 2.4rem;
}

.navbar a {
  padding: 8px 40px;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--bg-color);
}

.header-icons {
  font-size: 30px;
  cursor: pointer;
  z-index: 100000;
  display: flex;
  column-gap: 0.8rem;
}

.header-icons .bx {
  color: var(--bg-color);
}

.header-icons .bx:hover {
  color: #00afea;
}

#menu-icon {
  color: var(--bg-color);
  font-size: 30px;
  z-index: 100001;
  cursor: pointer;
  display: none;
  transform: rotate(0deg); /* Kezdeti forgatás */
  transition: transform 1s ease; /* Animáció */
}

@media (max-width: 1058px) {
  header {
    padding: 0px 60px;
  }
}

@media (max-width: 990px) {
  header {
    padding: 0px 4%;
  }
  #menu-icon {
    display: initial;
  }
  header .navbar {
    /* position: absolute;
        width: 240px;
        height: 100vh;
        top: 100%;
        left: -100%;
        display: flex;
        flex-direction: column;
        background: #ffffff59;
        backdrop-filter: blur(10px);
        row-gap: 1.4rem;
        padding: 20px;
        transition: 0.2s linear;
        text-align: left; */
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    transition: 0.5s all ease;
    max-width: 220px;
    height: 100%;
    backdrop-filter: blur(10px);
    background-color: #ffffff59;
    top: 0;
    left: -110%;
  }
  .navbar a {
    color: black;
    padding: 0px 10px;
  }
  .navbar a:hover {
    color: #00afea;
    border-color: #00afea;
  }
  .navbar.active {
    left: 0;
    justify-content: unset;
  }
}

ul,
.link {
  font-weight: 500;
  color: #ecd089;
  list-style: none;
  text-decoration: none;
}

li {
  text-transform: uppercase;
  padding: 10px;
}

.link {
  padding: 8px 17px;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  transition: 0.3s ease all;
  padding: 4px;
  border-bottom: 1px solid transparent;

  /* &:hover {
    color: #00afea;
    border-color: #46cdfa;
  } */
}

/* .cart {
  position: absolute;
  top: 110%;
  right: -1000%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;
  background: white;
  padding: 20px;
  color: black;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 10px 4px rgb(14 55 54 / 15%);
} */

.cart img {
  width: 100px;
}
.cart .box {
  display: flex;
  align-items: center;
  column-gap: 2rem;
}

.cart .box .text h3 {
  font-size: 1rem;
}

.cart .box .bx {
  font-size: 24px;
  
}

.cart .box .bx:hover {
  color: red;
  cursor: pointer;
}

.cart h2 {
  font-size: 1.1rem;
  font-weight: 600;
}

.cart.active {
  right: 1rem;
  transition: 0.5s;
}


.user h2 {
  font-size: 1.2rem;
  color: var(--text-color);
}

.user .login-btn {
  background: #4070f4;
  color: var(--bg-color);
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
}

.user .login-btn:hover {
  background: var(--text-color);
  letter-spacing: 2px;
  transition: 0.2s all;
}

.user input {
  border: none;
  outline: none;
  background: var(--second-color);
  padding: 10px;
  border-radius: 0.5rem;
  width: 100%;
}

.user p {
  font-size: 0.938rem;
}

.user a {
  color: #00afea;
}

.user a:hover {
  color: var(--text-color);
}

.user.active {
  right: 1rem;
  transition: 0.5s;
}

</style>
