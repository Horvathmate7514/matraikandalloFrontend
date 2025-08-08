<template>
   <div class="gallery-container">
     <div class="d-flex justify-content-center flex-wrap gap-3">
       <div v-if="gallery.length" v-for="(item, key) in gallery" :key="key"
         class="p-3 col-sm-3 col-md-2 border border-dark rounded-3 darker-bg d-flex align-items-center"
         @click="openLightbox(key)">
         <img :src="item" draggable="false" class="imgs selectDisable">
       </div>
     </div>
 
     <!-- Lightbox Modal -->
     <div v-if="lightboxOpen" class="lightbox">
       <div class="lightbox-content">
         <span class="close" @click="closeLightbox">&times;</span>
         <button class="prev" @click="prevImage">&#10094;</button>
         <img :src="gallery[selectedImageIndex]" class="lightbox-image selectDisable">
         <button class="next" @click="nextImage">&#10095;</button>
       </div>
     </div>
   </div>
 </template>
 
 <script setup>
 import { ref, onMounted, onBeforeUnmount } from 'vue';
import dataservice from '../services/dataservice';

const gallery = ref([]);
const selectedImageIndex = ref(0);
const lightboxOpen = ref(false);

onMounted(() => {
  dataservice.getAllImages().then(data => {
    gallery.value = data.data;
  });

  // Nyílkezelés hozzáadása
  window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  // Esemény eltávolítása komponens elhagyásakor
  window.removeEventListener('keydown', handleKeydown);
});

const openLightbox = (index) => {
  selectedImageIndex.value = index;
  lightboxOpen.value = true;
};

const closeLightbox = () => {
  lightboxOpen.value = false;
};

const prevImage = () => {
  selectedImageIndex.value = (selectedImageIndex.value - 1 + gallery.value.length) % gallery.value.length;
};

const nextImage = () => {
  selectedImageIndex.value = (selectedImageIndex.value + 1) % gallery.value.length;
};

const handleKeydown = (e) => {
  if (!lightboxOpen.value) return;

  if (e.key === 'ArrowRight') {
    nextImage();
  } else if (e.key === 'ArrowLeft') {
    prevImage();
  } else if (e.key === 'Escape') {
    closeLightbox();
  }
};
 </script>
 
 <style scoped>
 .imgs {
   width: 100%;
   height: 100%;
   object-fit: cover;
   cursor: pointer;
   transition: transform 0.3s;
 }
 
 .imgs:hover {
   transform: scale(1.1);
 }
 
 .selectDisable {
   user-select: none;
   pointer-events: none;
 }
 
 /* Lightbox Styling */
 .lightbox {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.8);
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 999;
 }
 
 .lightbox-content {
   position: relative;
   max-width: 90%;
   max-height: 90%;
   text-align: center;
 }
 
 .lightbox-image {
   max-width: 100%;
   max-height: 80vh;
   border-radius: 8px;
 }
 
 .close {
   position: absolute;
   top: 10px;
   right: 20px;
   font-size: 30px;
   color: white;
   cursor: pointer;
 }
 
 .prev, .next {
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   font-size: 24px;
   background: none;
   border: none;
   color: white;
   cursor: pointer;
 }
 
 .prev {
   left: 10px;
 }
 
 .next {
   right: 10px;
 }
 </style>
 