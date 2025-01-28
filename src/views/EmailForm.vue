<template>
    <div class="fullsize">
        <div class="container mx-auto">
            <h1 class="form-title">Személyes egyeztetés</h1>
            <form action="#" >
                <div class="main-user-info">
                    <div class="user-input-box">
                        <label for="fullName">Név</label>
                        <input v-model="rawData.name"  type="text" name="fullName" placeholder="Írja be a teljes nevét"  />
                    </div>

                    <div class="user-input-box">
                        <label for="email">Email címe</label>
                        <input  v-model="rawData.email" type="text" name="email" placeholder="Írja be az ön Email címét" />
                    </div>

                    <div class="user-input-box">
                        <label for="exampleFormControlTextarea1" class="form-label">Email szövege</label>
                        <textarea  v-model="rawData.message" class="form-control" id="exampleFormControlTextarea1" rows="3"
                            placeholder="Mit szeretne, telefonszám, egyéb elérhetőség"></textarea>
                    </div>
                </div>

                <div class="form-submit-btn">
                    <input type="button" value="Küldés" @click="sendEmail()">
                </div>

            </form>
        </div>
    </div>
</template>

<script setup>
import dataservice from '../services/dataservice';
import { ref } from 'vue';


const rawData = ref(
    {
    name:"",
    email:"",
    message:""


}
)





const sendEmail = () => {

    dataservice.postSendEmail(rawData.value).then(
        
        )
        .catch()
}



</script>




<style scoped>
.fullsize {

    min-height: 60vh;
}

.container {
    margin-top: 150px;
    width: 100%;
    max-width: 650px;
    background-color: #2a2826;
    padding: 28px;
    border-radius: 10px;
    box-shadow: inset -2px 2px 2px;
    color: #edd088;


}

.form-title {
    font-size: 26px;
    font-weight: 600;
    text-align: center;
    padding-bottom: 6px;
    color: white;
    text-shadow: 2px 2px 2px black;
    border-bottom: solid 1px white;
}

.main-user-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px 0;
}



.user-input-box {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-bottom: 15px;
}

.user-input-box label {
    width: 95%;
    color: white;
    font-size: 20px;
    font-weight: 400;
    margin: 5px 0;
}

.user-input-box input {
    height: 40px;
    width: 95%;
    border-radius: 7px;
    outline: none;
    border: 1px solid grey;
    padding: 0 10px;
}

.gender-title {
    color: white;
    font-size: 24px;
    font-weight: 600;
    border-bottom: 1px solid white;
}

.gender-category {
    margin: 15px 0;
    color: white;
}

.gender-category label {
    padding: 0 20px 0 5px;
}

.gender-category label,
.gender-category input,
.form-submit-btn input {
    cursor: pointer;
}

.form-submit-btn {
    margin-top: 40px;
}

.form-submit-btn input {
    display: block;
    width: 100%;
    margin-top: 10px;
    font-size: 20px;
    padding: 10px;
    border: none;
    border-radius: 3px;
    color: #edd088;
    background-color: #343331;

}

.form-submit-btn input:hover {
    background-color: #2a2826;

}

@media(max-width: 600px) {
    .container {
        min-width: 280px;
    }

    .user-input-box {
        margin-bottom: 12px;
        width: 100%;
    }

    .user-input-box:nth-child(2n) {
        justify-content: space-between;
    }

    .gender-category {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .main-user-info {
        max-height: 380px;
        overflow: auto;
    }

    .main-user-info::-webkit-scrollbar {
        width: 0;
    }
}

#exampleFormControlTextarea1 {
    height: 150px;
}
</style>