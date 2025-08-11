<template>
  <div class="admin-container">
    <!-- Header Section -->
    <div class="admin-header">
      <h1 class="admin-title">Admin Dashboard</h1>
      <button class="btn btn-primary upload-btn" @click="openUpload">
        <i class="upload-icon">📁</i>
        Új Kép Feltöltése
      </button>
    </div>

    <!-- Upload Section -->
    <div v-if="isUploading" class="upload-section">
      <div class="upload-card">
        <h2 class="upload-title">Új Kép Feltöltése</h2>
        
        <!-- Category Selector -->
        <div class="form-group">
          <label for="category" class="form-label">Válassz kategóriát:</label>
          <select v-model="selectedCategory" class="form-select" id="category">
            <option value="kemence">Kemence</option>
            <option value="kandallo">Kandalló</option>
          </select>
        </div>

        <!-- File Selection -->
        <div class="form-group">
          <label for="file" class="form-label">Fájl kiválasztása:</label>
          <input 
            type="file" 
            class="form-control file-input" 
            ref="fileInput" 
            @change="handleFileChange"
            accept="image/*"
          >
        </div>
        
        <!-- Action Buttons -->
        <div class="upload-actions">
          <button class="btn btn-primary" @click="uploadImage">
            <i class="action-icon">⬆️</i>
            Feltöltés
          </button>
          <button class="btn btn-secondary" @click="closeUpload">
            <i class="action-icon">❌</i>
            Bezárás
          </button>
        </div>
      </div>
    </div>

    <!-- Success Message -->
    <div v-if="uploadSuccess" class="upload-success-message">
      <div class="success-content">
        <i class="success-icon">✅</i>
        <span>Sikeres feltöltés!</span>
      </div>
    </div>

    <!-- Images Display -->
    <div class="images-container">
      <!-- Kemence Images -->
      <div class="category-section">
        <h3 class="category-title">
         
          Kemence Képek
        </h3>
        <div v-if="kemenceImages.length" class="images-grid">
          <div v-for="(image, index) in kemenceImages" :key="index" class="image-item">
            <div class="image-container">
              <img :src="image" :alt="`Kemence kép ${index + 1}`" class="admin-image">
              <div class="image-overlay">
                <button class="btn btn-danger delete-btn" @click="deleteImage(index, 'kemence')">
                  <i class="delete-icon">🗑️</i>
                  Törlés
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="no-images">
          <p>Nincsenek még kemence képek</p>
        </div>
      </div>

      <!-- Kandallo Images -->
      <div class="category-section">
        <h3 class="category-title">
         
          Kandalló Képek
        </h3>
        <div v-if="kandalloImages.length" class="images-grid">
          <div v-for="(image, index) in kandalloImages" :key="index" class="image-item">
            <div class="image-container">
              <img :src="image" :alt="`Kandalló kép ${index + 1}`" class="admin-image">
              <div class="image-overlay">
                <button class="btn btn-danger delete-btn" @click="deleteImage(index, 'kandallo')">
                  <i class="delete-icon">🗑️</i>
                  Törlés
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="no-images">
          <p>Nincsenek még kandalló képek</p>
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



.admin-container {
background-color: #343331;
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.admin-title {
   color:  rgb(236, 208, 137);
  margin: 20px;
  padding: 10px;
}

.upload-btn {
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.upload-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 123, 255, 0.3);
}

.upload-icon {
  font-size: 1.2rem;
}

/* Upload Section */
.upload-section {
  margin-bottom: 2rem;
}

.upload-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
}

.upload-title {
  color: #2a2826;
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
  font-weight: 600;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #495057;
}

.form-select, .file-input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-select:focus, .file-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.upload-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.action-icon {
  margin-right: 0.5rem;
}

/* Success Message */
.upload-success-message {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0 8px 25px rgba(40, 167, 69, 0.3);
  z-index: 1000;
  animation: slideIn 0.3s ease-out;
}

.success-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
}

.success-icon {
  font-size: 1.2rem;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Images Container */
.images-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.category-section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
}

.category-title {
  color: #2a2826;
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.category-icon {
  font-size: 1.5rem;
}

.images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}

.image-item {
  position: relative;
}

.image-container {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.image-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.admin-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-container:hover .image-overlay {
  opacity: 1;
}

.delete-btn {
  background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.delete-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(220, 53, 69, 0.4);
}

.delete-icon {
  font-size: 1rem;
}

.no-images {
  text-align: center;
  padding: 2rem;
  color: #6c757d;
  font-style: italic;
}

/* Responsive Breakpoints */
@media (max-width: 1200px) {
  .images-grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1.25rem;
  }
}

@media (max-width: 992px) {
  .admin-container {
    padding: 15px;
  }
  
  .admin-header {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }
  
  .admin-title {
    font-size: 2rem;
  }
  
  .upload-btn {
    align-self: center;
  }
  
  .images-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .admin-container {
    padding: 10px;
  }
  
  .admin-title {
    font-size: 1.75rem;
  }
  
  .upload-card, .category-section {
    padding: 1.5rem;
  }
  
  .upload-title, .category-title {
    font-size: 1.5rem;
  }
  
  .images-grid {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 0.875rem;
  }
  
  .admin-image {
    height: 160px;
  }
  
  .upload-actions {
    flex-direction: column;
  }
  
  .upload-actions .btn {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .admin-container {
    padding: 8px;
  }
  
  .admin-title {
    font-size: 1.5rem;
  }
  
  .upload-card, .category-section {
    padding: 1.25rem;
  }
  
  .upload-title, .category-title {
    font-size: 1.375rem;
  }
  
  .images-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 0.75rem;
  }
  
  .admin-image {
    height: 140px;
  }
  
  .form-select, .file-input {
    padding: 0.625rem;
    font-size: 0.9rem;
  }
  
  .upload-btn {
    padding: 0.625rem 1.25rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .images-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 0.625rem;
  }
  
  .admin-image {
    height: 120px;
  }
  
  .delete-btn {
    padding: 0.375rem 0.75rem;
    font-size: 0.8rem;
  }
  
  .upload-success-message {
    bottom: 10px;
    right: 10px;
    left: 10px;
    padding: 0.875rem 1.25rem;
  }
}

/* Landscape orientation for mobile */
@media (max-height: 500px) and (orientation: landscape) {
  .admin-container {
    padding: 10px;
  }
  
  .admin-header {
    margin-bottom: 1rem;
  }
  
  .upload-card, .category-section {
    padding: 1rem;
  }
  
  .images-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 0.5rem;
  }
  
  .admin-image {
    height: 100px;
  }
}

/* High DPI displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .admin-image {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
}

/* Print styles */
@media print {
  .upload-btn, .delete-btn, .upload-section {
    display: none;
  }
  
  .admin-container {
    padding: 0;
  }
  
  .category-section {
    box-shadow: none;
    border: 1px solid #000;
    break-inside: avoid;
  }
}
</style>
