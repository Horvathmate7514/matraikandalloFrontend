<template>

    <div class="navbar-background d-flex container-fluid justify-content-around align-items-center sticky-top"
        v-if="width >= 1500">
        <div class="branding">
            <router-link to="/" class="logo">
                <img class="logoimg" src="/src/assets/img/logogold_wobg.png" alt="" />
            </router-link>
        </div>

        <ul class="navbar">
            <li v-if="$route.path != '/'">
                <router-link to="/" class="link">Nyitólap</router-link>
            </li>
            <li v-if="$route.path != '/gallery'">
                <router-link class="link" to="/gallery">Képgaléria</router-link>
            </li>
            <li>
                <a class="link" href="https://www.facebook.com/Matraikandallo" target="_blank">Facebook</a>
            </li>
            <li>
                <a class="link" href="https://www.instagram.com/matraikandallo/" target="_blank">Instagram</a>
            </li>
            <li>
                <router-link to="/email" class="link">Rendelés</router-link>
            </li>
            <li>
                <a class="link" href="tel:+36309647351">+36309647351</a>
            </li>
        </ul>
    </div>



    <div class="navbar-background d-flex container-fluid justify-content-between align-items-center sticky-top"
        v-if="width < 1500 && width > 645">
        <div class="branding">
            <router-link to="/" class="logo">
                <img class="logoimg" src="/src/assets/img/logogold_wobg.png" alt="" />
            </router-link>
        </div>

        <ul class="navbar">
            <li v-if="$route.path != '/'">
                <router-link to="/" class="link" >Nyitólap</router-link>
            </li>
            <li v-if="$route.path != '/gallery'">
                <router-link class="link" to="/gallery" >Képgaléria</router-link>
            </li >
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Elérhetőségek
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="https://www.facebook.com/Matraikandallo"
                            target="_blank">Facebook</a></li>
                    <li><a class="dropdown-item" href="https://www.instagram.com/matraikandallo/"
                            target="_blank">Instagram</a></li>
                    <li><a class="dropdown-item" href="mailto:Matraikandallo@gmail.com">Email</a></li>
                    <li><a class="dropdown-item" href="tel:+36309647351">+36309647351</a></li>
                </ul>
            </li>
        </ul>
    </div>



    <nav class="navbar navbar-background" v-if="width < 645">
        <div class="container-fluid">
            <div class="branding">
                <router-link to="/" class="logo">
                    <img class="logoimg" src="/src/assets/img/logogold_wobg.png" alt="" />
                </router-link>
            </div>
            <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <li class="nav-item">
                        <router-link to="/" class="link nav-link" >Nyitólap</router-link>
                    </li>
                    <li>
                        <router-link class="link nav-link" to="/gallery" >Képgaléria</router-link>
                    </li>
                    <li class="nav-item">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">Elérhetőségek
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="https://www.facebook.com/Matraikandallo"
                                    target="_blank">Facebook</a></li>
                            <li><a class="dropdown-item" href="https://www.instagram.com/matraikandallo/"
                                    target="_blank">Instagram</a></li>
                            <li><a class="dropdown-item" href="mailto:Matraikandallo@gmail.com">Email</a></li>
                            <li><a class="dropdown-item" href="tel:+36309647351">+36309647351</a></li>
                        </ul>
                    </li>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
</script>

<style scoped>
.custom-toggler .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(236, 208, 137, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.custom-toggler.navbar-toggler {
    border-color: rgb(236, 208, 137);
}

.logoimg {
    width: 200px;
}

.navbar-background {
    background-color: #2a2826;
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

ul,
.link {
    font-weight: 500;
    color: #ecd089;
    list-style: none;
    text-decoration: none;
}

.link {
    padding: 8px 17px;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 500;
    transition: 0.3s ease all;
    padding: 4px;
    border-bottom: 1px solid transparent;
}

li {
    padding: 10px;
}
</style>