<template>

   <div class="">
      <div class="d-flex justify-content-center flex-wrap  gap-3">
         <div v-if="gallery != ''" v-for="(item, key) in gallery"
            class="p-3 col-sm-3 col-md-2 border border-dark rounded-3 darker-bg d-flex align-items-center " @click="modalImage(key)"> 
            <img :src="item" draggable="false" class="imgs selectDisable">
         </div>
      </div>
   </div>

</template>

<script setup>
import { ref } from 'vue';
import Modal from '../components/Modal.vue';
import dataservice from '../services/dataservice';
const selectedImageIndex = ref(0);
const gallery = ref()


dataservice.getAllImages().then(data => {
   gallery.value = data.data
})


const modalImage = (id) => {
   selectedImageIndex.value = id;

}

</script>

<style scoped>
.imgs{
   height: 100%;
   width: 100%;
   max-height: 100vh;
   
   object-fit: cover; 
}

.selectDisable {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    pointer-events: none;
    -webkit-touch-callout: none;
}
</style>