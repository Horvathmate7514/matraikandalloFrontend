<template>
  <div class="container mt-4">
    <div class="d-flex flex-column">
      <div class="d-flex  justify-content-end">
        <button class="btn btn-primary " @click="openFileMenu">Új feltöltése</button>
      </div>

      <div v-for="(image, index) in gallery" class="d-flex w-100 justify-content-evenly my-2">
        <div>
          <img :src="image" alt="Kép" style="width: 100px; height: auto;" />
        </div>
        <div class="d-flex align-items-center">
          <button class="btn btn-danger" @click="deleteImage(index)">
            Delete
          </button>
        </div>
      </div>
    </div>





    <input type="file" ref="fileInput" :value="fileName" @change="uploadImage" style="display: none;" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import dataservice from '../services/dataservice';
import { useUserStore } from '../../store/store';

const gallery = ref([]);
const fileInput = ref(null);
const fileName = ref(null);
const userStorage = useUserStore();
const token = userStorage.user.token;


onMounted(() => {
  dataservice.getAllImages().then(data => {
    gallery.value = data.data;
  });
});

const deleteImage = (index) => {

  let imageName = gallery.value[index].match(/([^\/\\?]+)\.([a-zA-Z0-9]+)(?=$|\?)/)[0]
  dataservice.deleteImg({"image":imageName}, token).then(data => {
    dataservice.getAllImages().then(data => {
      gallery.value = data.data;
    });
  });

};

const openFileMenu = () => {
  fileInput.value.click();
}

const uploadImage = (e) => {
console.log(token);

  let file = e.target.files[0]
  dataservice.upload(file, token).then(data => {
    dataservice.getAllImages().then(data => {
      gallery.value = data.data;
    });
  });

};


</script>

<style scoped>
th {
  color: #ecd089;
}

td {
  width: auto;
}
</style>