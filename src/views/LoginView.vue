<template>
    <div class="login-container">
        <div class="login-card">
            <h2 class="login-title">Bejelentkezés</h2>
            <form @submit.prevent="submit" class="login-form">
                <div class="input-box">
                    <input 
                        type="email" 
                        class="form-control login-input" 
                        id="email" 
                        placeholder="E-mail" 
                        v-model="email"
                        required
                    />
                </div>
                <div class="input-box">
                    <input 
                        type="password" 
                        class="form-control login-input" 
                        id="password" 
                        placeholder="Jelszó" 
                        v-model="password"
                        required
                    />
                </div>
                <div class="button-container">
                    <button @click="submit" class="login-button" type="button">
                        Bejelentkezés
                    </button>
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
.login-container {
    min-height: calc(100vh - 200px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.login-card {
    background: white;
    border-radius: 15px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    padding: 2.5rem;
    width: 100%;
    max-width: 450px;
    min-width: 300px;
}

.login-title {
    text-align: center;
    color: #2a2826;
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: 600;
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.input-box {
    position: relative;
}

.login-input {
    width: 100%;
    padding: 1rem 1.25rem;
    border: 2px solid #e1e5e9;
    border-radius: 10px;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: #f8f9fa;
}

.login-input:focus {
    outline: none;
    border-color: #ecd089;
    background: white;
    box-shadow: 0 0 0 3px rgba(236, 208, 137, 0.1);
}

.login-input::placeholder {
    color: #6c757d;
}

.button-container {
    margin-top: 1rem;
}

.login-button {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(135deg, #ecd089 0%, #d4b876 100%);
    border: none;
    border-radius: 10px;
    color: #2a2826;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.login-button:hover {
    background: linear-gradient(135deg, #d4b876 0%, #c4a866 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(236, 208, 137, 0.3);
}

.login-button:active {
    transform: translateY(0);
}

/* Responsive breakpoints */
@media (max-width: 768px) {
    .login-container {
        padding: 15px;
        min-height: calc(100vh - 150px);
    }
    
    .login-card {
        padding: 2rem;
        margin: 10px;
    }
    
    .login-title {
        font-size: 1.75rem;
        margin-bottom: 1.5rem;
    }
    
    .login-form {
        gap: 1.25rem;
    }
    
    .login-input {
        padding: 0.875rem 1rem;
        font-size: 0.95rem;
    }
    
    .login-button {
        padding: 0.875rem;
        font-size: 1rem;
    }
}

@media (max-width: 480px) {
    .login-container {
        padding: 10px;
    }
    
    .login-card {
        padding: 1.5rem;
        min-width: 280px;
    }
    
    .login-title {
        font-size: 1.5rem;
        margin-bottom: 1.25rem;
    }
    
    .login-form {
        gap: 1rem;
    }
    
    .login-input {
        padding: 0.75rem 0.875rem;
        font-size: 0.9rem;
    }
    
    .login-button {
        padding: 0.75rem;
        font-size: 0.95rem;
    }
}

@media (max-width: 360px) {
    .login-card {
        padding: 1.25rem;
        min-width: 260px;
    }
    
    .login-title {
        font-size: 1.375rem;
    }
    
    .login-input {
        padding: 0.625rem 0.75rem;
        font-size: 0.85rem;
    }
    
    .login-button {
        padding: 0.625rem;
        font-size: 0.9rem;
    }
}

/* Landscape orientation for mobile */
@media (max-height: 500px) and (orientation: landscape) {
    .login-container {
        min-height: 100vh;
        padding: 10px;
    }
    
    .login-card {
        padding: 1.5rem;
        margin: 5px;
    }
    
    .login-form {
        gap: 1rem;
    }
}
</style>