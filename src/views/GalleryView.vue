<template>
  <div class="gallery-container">
    <h1 class="pointerSelect d-flex justify-content-center" @click="selectType(1)">Kandallo</h1>
    <div class="d-flex justify-content-center flex-wrap gap-3">
      <div v-if="kandello.length" v-for="(item, key) in kandello" :key="key"
        class="p-3 col-sm-3 col-md-2 border border-dark rounded-3 darker-bg d-flex align-items-center"
        @click="openLightbox(key,0)">
        <img :src="item" draggable="false" class="imgs selectDisable">
      </div>
    </div>
    <h1 class="me-5 pointerSelect d-flex justify-content-center" @click="selectType(0)">Kemence</h1>
    <div class="d-flex justify-content-center flex-wrap gap-3">
      <div v-if="Kemence.length" v-for="(item, key) in Kemence" :key="key"
        class="p-3 col-sm-3 col-md-2 border border-dark rounded-3 darker-bg d-flex align-items-center"
        @click="openLightbox(key,1)">
        <img :src="item" draggable="false" class="imgs selectDisable">
      </div>
    </div>
    <!-- Lightbox Modal -->
    <div v-if="lightboxOpen" class="lightbox">
      <div v-if="showImg == 0">
        <div class="lightbox-content">
          <span class="close" @click="closeLightbox">&times;</span>
          <button class="prev" @click="prevImage(0)">&#10094;</button>
          <img :src="kandello[selectedImageIndex]" class="lightbox-image">
          <button class="next" @click="nextImage(0)">&#10095;</button>
        </div>
      </div>
      <div v-if="showImg == 1">
        <div class="lightbox-content">
          <span class="close" @click="closeLightbox">&times;</span>
          <button class="prev" @click="prevImage(1)">&#10094;</button>
          <img  :src="Kemence[selectedImageIndex]" class="lightbox-image">
          <button class="next" @click="nextImage(1)">&#10095;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import dataservice from '../services/dataservice';

const kandello = ref([]);
const Kemence = ref([]);
const gallery = ref([]);
const selectedImageIndex = ref(0);
const showImg = ref(0);
const lightboxOpen = ref(false);

onMounted(() => {
  dataservice.getAllImages().then(data => {
    Kemence.value = data.kemence;  // Kemence képek
    kandello.value = data.kandallo;  // Kandalló képek
  }).catch(err => {
    console.error('Hiba a képek lekérésekor', err);
  });
});;

const openLightbox = (index,type) => {
  showImg.value = type
  selectedImageIndex.value = index;
  lightboxOpen.value = true;
};

const closeLightbox = () => {
  lightboxOpen.value = false;
};

const prevImage = (type) => {
  if (type==0){selectedImageIndex.value = (selectedImageIndex.value - 1 + kandello.value.length) % kandello.value.length; return}
  else selectedImageIndex.value = (selectedImageIndex.value - 1 + Kemence.value.length) % Kemence.value.length;
};

const nextImage = (type) => {
  if (type==0){selectedImageIndex.value = (selectedImageIndex.value + 1) % kandello.value.length; return}
  else selectedImageIndex.value = (selectedImageIndex.value + 1) % Kemence.value.length;

 
};

const selectType = (type) => {
  dataservice.getAllImages(type).then(data => {
    gallery.value = data.data;
  });
}

</script>

<style scoped>
.pointerSelect {
  cursor: pointer;
}

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

.prev,
.next {
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