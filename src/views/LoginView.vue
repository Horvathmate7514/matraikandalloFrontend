<template>
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="card p-4 shadow-lg" style="width: 400px; padding: 2rem;">
            <h2 class="text-center text-dark">Bejelentkezés</h2>
            <form>
                <div class="input-box mb-3">
                    <input type="email" class="form-control" id="email" placeholder="E-mail" v-model="email" />
                </div>
                <div class="input-box mb-3">
                    <input type="password" class="form-control" id="password" placeholder="Jelszó" v-model="password" />
                </div>
                <div class="input-box button mb-3">
                    <input @click="submit" class="logingomb btn w-100 " type="button" value="Bejelentkezés" />
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import dataservice from '../services/dataservice';
import { useUserStore } from '../../store/store';
import { useRouter } from 'vue-router';



const store = useUserStore()
const router = useRouter()


let email = ref('');
let password = ref('');

let data = {
    email: "",
    password: "",
}

function submit() {
    data = {
        email: email.value,
        password: password.value,
    }

    try {
        dataservice.login(data).then(data => {
            store.setUser(data)
            store.setLoggedIn(true)
            router.push({ name: "admin" })
        })
        
    } catch (error) {
        console.log(error)
    }
}



</script>

<style scoped>
.logingomb {
    background-color: #ecd089;
    
    
}

.logingomb:hover{
    background-color: #343331}
</style>