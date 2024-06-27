<script setup>
import AppFooter from '../components/AppFooter.vue';
</script>

<template>
  <body>
    <div class="row mb-4 mb-3">
      <div class="col-md-8">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/src/assets/img/kandallo.jpg" class="d-block w-50 mx-auto" alt="Slide 1">
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="/src/assets/img/kemence.jpg" class="d-block w-50 mx-auto" alt="Slide 2">
              <div class="carousel-caption d-none d-md-block">
                <h5>Az ön igényeire szabva</h5>
                <p>Kemence, grillező, bográcsozó és vaslapos platni.</p>
              </div>
            </div>
            <div class="carousel-item">
              <div class="teglakalyha">
                <img src="/src/assets/img/teglakalyha_2.jpeg" class="d-block w-50 mx-auto" alt="Slide 3">
              </div>
              <div class="carousel-caption d-none d-md-block teglakalyhacaption">
                <h5>Az ön igényeire szabva</h5>
                <p>Vakolt-és téglakályhák.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-md-4">
        <p style="color: white; text-align:justify; font-size: 20px; margin-top: 250px; margin-right: 100px;">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quam quas nam. Eveniet provident molestias
          exercitationem? Fuga ullam a quam alias sit quod cum iusto excepturi in voluptas! Fugiat, cumque.
        </p>
      </div>
    </div>
    <AppFooter />
  </body>
</template>

<style scoped>
body {
  min-height: 100vh;
  background: #343331
}

.carousel-item img {
  object-fit: contain;
  max-height: 100%;
  min-height: 90vh;
}

.carousel-control-prev {
  margin-left: 250px;
}

.carousel-control-next {
  margin-right: 250px;
}

.teglakalyha {
  height: 100%;
  align-items: center;

}
.teglakalyhacaption{
  bottom: 10rem!important;
}
</style>