<template>
    <div class="container mt-4">
        <div class="d-flex flex-column">
            <div class="d-flex  justify-content-end">
                <button class="btn btn-primary " @click="uploadImage">Új feltöltése</button>
            </div>

            <div v-for="(image, index) in gallery" class="d-flex w-100 justify-content-evenly my-2">
              <div>
                <img :src="image" alt="Kép"  style="width: 100px; height: auto;" />
              </div>
              <div class="d-flex align-items-center">
                <button class="btn btn-danger" @click="deleteImage(index)">
                  Delete
                </button>
              </div>
            </div>
        </div>

       
            
       
      
      <input type="file" ref="fileInput" style="display: none;" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import dataservice from '../services/dataservice';
  
  const gallery = ref([]);
  const fileInput = ref(null);
  
  onMounted(() => {
    dataservice.getAllImages().then(data => {
      gallery.value = data.data;
    });
  });
  
  const deleteImage = (index) => {
    gallery.value.splice(index, 1);
  };
  
  const uploadImage = () => {
    fileInput.value.click();
  };
  

  </script>
  
  <style scoped>
th{
    color:#ecd089;
}
td{
    width:auto;
}
  </style>
  