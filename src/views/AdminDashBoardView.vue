<template>
  <div class="container mt-4">
    <!-- Feltöltés gomb -->
    <div class="d-flex justify-content-end">
      <button class="btn btn-primary" @click="openUpload">Új Kép Feltöltése</button>
    </div>

    <!-- Kategória választó és fájl input -->
    <div v-if="isUploading" class="mt-4">
      <h2>Új Kép Feltöltése</h2>
      <!-- Kategória választó -->
      <div class="mb-3">
        <label for="category" class="form-label">Válassz kategóriát:</label>
        <select v-model="selectedCategory" class="form-select" id="category">
          <option value="kemence">Kemence</option>
          <option value="kandallo">Kandalló</option>
        </select>
      </div>

      <!-- Fájl kiválasztása -->
      <div class="mb-3">
        <label for="file" class="form-label">Fájl kiválasztása:</label>
        <input type="file" class="form-control" ref="fileInput" @change="handleFileChange">
      </div>
      
      <button class="btn btn-primary" @click="uploadImage">Feltöltés</button>
      <button class="btn btn-secondary" @click="closeUpload">Bezárás</button>
    </div>

    <!-- Sikeres feltöltés üzenet -->
    <div v-if="uploadSuccess" class="upload-success-message">
      <p>Sikeres feltöltés!</p>
    </div>

    <!-- Képek megjelenítése -->
 <div class="category-section">
      <h3>Kemence Képek</h3>
      <div v-if="kemenceImages.length" class="d-flex justify-content-evenly my-2">
        <div v-for="(image, index) in kemenceImages" :key="index">
          <img :src="image" alt="Kép" style="width: 100px; height: auto;" />
          <div class="d-flex align-items-center">
            <button class="btn btn-danger" @click="deleteImage(index, 'kemence')">Törlés</button>
          </div>
        </div>
      </div>
    </div>

    <div class="category-section">
      <h3>Kandalló Képek</h3>
      <div v-if="kandalloImages.length" class="d-flex justify-content-evenly my-2">
        <div v-for="(image, index) in kandalloImages" :key="index">
          <img :src="image" alt="Kép" style="width: 100px; height: auto;" />
          <div class="d-flex align-items-center">
            <button class="btn btn-danger" @click="deleteImage(index, 'kandallo')">Törlés</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import dataservice from '../services/dataservice';
import { useUserStore } from '../../store/store';

const gallery = ref([]);  // Képek
const fileInput = ref(null);  // Fájl input referencia
const selectedCategory = ref('kemence');  // Alapértelmezett kategória
const isUploading = ref(false);  // Állapot a fájl feltöltése során
const fileName = ref(null);  // Fájl név
const kemenceImages = ref([]);  // Kemence képek
const kandalloImages = ref([]);  // Kandalló képek
const uploadSuccess = ref(false);  // Sikeres feltöltés állapot
const userStorage = useUserStore();
const token = userStorage.user.token;

// Képek betöltése
onMounted(() => {
  dataservice.getAllImages().then(data => {
    kemenceImages.value = data.kemence;
    kandalloImages.value = data.kandallo;
  });
});

// Kép törlése
const deleteImage = (index, category) => {
  let imageName = category === 'kemence' ? kemenceImages.value[index] : kandalloImages.value[index];
  let imageFileName = imageName.match(/([^\/\\?]+)\.([a-zA-Z0-9]+)(?=$|\?)/)[0];
  dataservice.deleteImg({ "image": imageFileName }, token).then(() => {
    dataservice.getAllImages().then(data => {
      kemenceImages.value = data.kemence;
      kandalloImages.value = data.kandallo;
    });
  });
};

// Feltöltés folyamat indítása
const openUpload = () => {
  isUploading.value = true;
};

// Feltöltés bezárása
const closeUpload = () => {
  isUploading.value = false;
};

// Kép fájl kiválasztásának kezelése
const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    fileName.value = file.name;  // Ha van fájl, hozzárendeljük a fájl nevét
  }
};

// Kép feltöltése
const uploadImage = () => {
  const file = fileInput.value.files[0];

  // Ellenőrizzük, hogy a fájl ki lett-e választva
  if (!file) {
    alert('Válassz egy képet!');
    return;
  }

  const category = selectedCategory.value;

  // Ellenőrizzük a kategóriát
  if (!category) {
    alert('Válassz kategóriát!');
    return;
  }

  // A fájl és kategória elküldése a dataservice segítségével
  dataservice.upload(file, category, token).then(() => {
    // Sikeres feltöltés után a képek újratöltése
    dataservice.getAllImages().then(data => {
      kemenceImages.value = data.kemence;
      kandalloImages.value = data.kandallo;
    });
    uploadSuccess.value = true; // Sikeres feltöltés állapota
    setTimeout(() => {
      uploadSuccess.value = false; // 3 másodperc után eltűnik
    }, 3000);
    closeUpload();  // Feltöltés után a modal bezárása
  }).catch(err => {
    console.error('Hiba a kép feltöltésekor:', err);
  });
};
</script>

<style scoped>
/* Sikeres feltöltés animáció */
.upload-success-message {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  opacity: 1;
  transition: opacity 1s ease-out;
}

/* Képek megjelenítése */
.category-section {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Képek középre igazítása vízszintesen */
}

.category-section h3 {
  text-align: center;
}

.category-section .d-flex {
  flex-direction: column;  /* Képek függőleges elrendezése */
  align-items: center;     /* Képek középre igazítása vízszintesen */
}

.category-section img {
  width: 80%;  /* Képek méretének szabályozása */
  height: auto;
  margin-bottom: 10px;  /* Kis távolság a képek között */
}

/* Törlés gomb elhelyezése a kép mellett */
.category-section .d-flex div {
  display: flex;
  align-items: center;  /* Kép és gomb vízszintes elrendezése */
  justify-content: center;  /* Középre igazítás */
}

button {
  margin-left: 20px; /* A gomb elválasztása a képtől */
  margin-top: 5px;
}
</style>
