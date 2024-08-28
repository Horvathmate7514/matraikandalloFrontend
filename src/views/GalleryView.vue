<template>

   <div class="">
      <div class="d-flex justify-content-center flex-wrap  gap-3">
         <!-- <div class="p-3 col-3 d-flex align-items-center border border-dark rounded-3 darker-bg">
            <img src="../assets/img/T.K1.jpg" alt="" class="w-100">
         </div> -->
         <div v-if="gallery != ''" v-for="(item, key) in gallery"
            class="p-3 col-3 border border-dark rounded-3 darker-bg d-flex align-items-center" @click="modalImage(key)"
            data-bs-toggle="modal" data-bs-target="#photoGaleryModal">
            <img :src="item" alt="" class="w-100 ">
         </div>
      </div>
   </div>
   <Modal :imageId="selectedImageIndex" :gallery="gallery" />
   <!-- <img src="../assets/img/kandallo/79844871_2455984214662996_6265950529986232320_n.jpg" class="w-100"> -->
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Modal from '../components/Modal.vue';
import dataservice from '../services/dataservice';
const selectedImageIndex = ref();
const gallery = ref()

dataservice.getAllImages().then(data => {

   gallery.value = data.data
   
})

const modalImage = (id) => {
   selectedImageIndex.value = id;

}

</script>

<style scoped></style>