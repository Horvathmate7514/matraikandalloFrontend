<template>

   <div class="container">
         <div class="row gap-4">
            <div v-for="item in 15" class="p-3 col-3 border border-dark rounded-3 darker-bg">
               <img src="../assets/img/kandallo/79844871_2455984214662996_6265950529986232320_n.jpg" alt=""
                  class="w-100">
            </div>
            <div  class="p-3 col-3 d-flex align-items-center border border-dark rounded-3 darker-bg">
               <img src="../assets/img/T.K1.jpg" alt=""
                  class="w-100">
            </div>
            <div v-for="item in 15" class="p-3 col-3 border border-dark rounded-3 darker-bg" 
            @click="modalImage()" data-bs-toggle="modal" data-bs-target="#photoGaleryModal">
               <img src="../assets/img/kandallo/79844871_2455984214662996_6265950529986232320_n.jpg" alt=""
                  class="w-100" >
            </div>
            
      </div>
   </div>
   <Modal>
      <img src="../assets/img/kandallo/79844871_2455984214662996_6265950529986232320_n.jpg" class="w-100">
   </Modal>
</template>

<script setup>
import {ref} from 'vue';
import Modal from '../components/Modal.vue';
   const selectedImage = ref('');

const modalImage =() =>{
   selectedImage.value = '../assets/img/kandallo/79844871_2455984214662996_6265950529986232320_n.jpg';
   console.log(selectedImage.value);
   
}
</script>

<style scoped></style>