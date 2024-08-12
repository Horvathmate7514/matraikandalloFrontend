<template>

   <div class="">
      <div class="d-flex justify-content-center flex-wrap  gap-3">
         <!-- <div class="p-3 col-3 d-flex align-items-center border border-dark rounded-3 darker-bg">
            <img src="../assets/img/T.K1.jpg" alt="" class="w-100">
         </div> -->
         <div v-for="(item, key) in gallery" class="p-3 col-3 border border-dark rounded-3 darker-bg" @click="modalImage(key)"
            data-bs-toggle="modal" data-bs-target="#photoGaleryModal">
            <img :src="item" alt="" class="w-100">
         </div>
      </div>
   </div>
   <Modal :imageId="selectedImageIndex" :gallery="gallery" />
   <!-- <img src="../assets/img/kandallo/79844871_2455984214662996_6265950529986232320_n.jpg" class="w-100"> -->
</template>

<script setup>
import { ref } from 'vue';
import Modal from '../components/Modal.vue';
const selectedImageIndex = ref('');
const modules = import.meta.glob('@/assets/img/**/*')
const gallery = []
for (const path in modules) {
   const p = new URL(path, import.meta.url).href;
   gallery.push(p);
}

const modalImage = (id) => {
   selectedImageIndex.value = id;
   console.log(selectedImageIndex.value);
   
}

</script>

<style scoped></style>