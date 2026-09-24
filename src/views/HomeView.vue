<script setup>
import { useWindowSize } from '@vueuse/core'


const { width, height } = useWindowSize()

</script>

<template>
  <div class="row col-12">
    <div class="col-sm-12 col-lg-6">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/src/assets/img/kandallo.jpg" class="d-block w-50 mx-auto" alt="Slide 1">
          </div>
          <div class="carousel-item">
            <img src="/src/assets/img/T.K1.jpg" class="d-block w-75 mx-auto" alt="Slide 2">
          </div>
          <div class="carousel-item">
            <div class="teglakalyha">
              <img src="/src/assets/img/teglakalyha_2.jpeg" class="d-block w-50 mx-auto" alt="Slide 3">
            </div>
          </div>
          <div class="carousel-caption shadow rounded-3" v-if="width >= 900">
            <h5>Az ön igényeire szabva</h5>
            <p>Kandalló, Kemence, grillező, bográcsozó és vaslapos platni.</p>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"></button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"></button>
      </div>

      <!-- Felirat külön, a carousel után -->
      <div class="carousel-caption-custom shadow rounded-3" v-if="width <= 768">
        <h5>Az ön igényeire szabva</h5>
        <p>Kandalló, Kemence, grillező, bográcsozó és vaslapos platni.</p>
      </div>

    </div>
    <div class="col-sm-12 col-lg-6 d-flex align-items-center p-5">
      <div class="darker-bg shadow rounded-4 text-size p-5">
        <h4>Üdvözlöm a Mátrai kandalló oldalán!</h4>
        <p class="bemutatkozoszoveg">
          A Mátrai név ismerősen csenghet a cserépkályhás szakmából. Családom útja
          1957-ben kezdődött és a 3 generáció alatt megszerzett tudás tovább száll. Felmenőim kályhái sokak otthonának
          melegéről gondoskodnak a mai napig. Most a Mátrai kandalló bújtatja modern köntösbe az ősi, már évezredek óta
          használt technológiát. Ismerkedjen meg munkáinkkal, melyek között megtalálhatja az Önnek tetsző formát és
          stílust, a klasszikustól az egyszerű, modern kivitelezésig. Az általunk épített kandallók egyéni tervezése
          biztosítja, hogy munkánk minden tekintetben tükrözze az Ön elvárásait.
        </p>
      </div>

    </div>
  </div>
  <div class="megrendelesborder p-2 darker-bg container">
    <div class="noblur">
      <h2 class="text-center"> <b>Megrendelés menete</b></h2>
      <div class="text-center">
        <p class="megrendeles">Ha megtetszett valamelyik munkánk, bátran lépjen kapcsolatba velünk messengeren, emailbe
          vagy telefonon. Egyeztetés után egy helyszíni terepfelmérés következik, ami Győr és 15 km-es körzetében
          díjmentes, messzebb 10000 Ft, ami üzlet kötés esetében levonódik a teljes összegből. Ezután egyedi terv és
          árajánlat készül minden ügyfélnek a megbeszéltek alapján, forintra kiszámolva.</p>

      </div>
    </div>
  </div>

</template>

<style scoped>
.carousel-caption {
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
}

.carousel-caption-custom {
  position: absolute;
  bottom: 20%;
  /* ne a legalsó sarokban legyen */
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
  padding: 10px;
  border-radius: 8px;
  max-width: 80%;
  text-align: center;
}

@media (min-height: 70vh) {

  .carousel-item img {
    object-fit: contain;
    max-height: 100%;
    min-height: 70vh;
  }
}

/* Mobilon kerüljön a kép ALÁ fixen */
@media (max-width: 768px) {
  .carousel-caption-custom {
    position: static;
    /* ne legyen overlay */
    transform: none;
    margin-top: 10px;
    background-color: transparent;
    backdrop-filter: none;
    text-align: center;
    max-width: 100%;
  }

  .carousel-item img {
    object-fit: contain;
    max-height: 100%;
    min-height: 0vh;

  }
}






.text-size {
  font-size: 1.2rem;
}



h2 {
  margin-top: 15px;
  margin-bottom: 15px;
}

.megrendeles {
  font-size: 1.6rem;
}



.teglakalyha {
  height: 100%;
  align-items: center;
}

.teglakalyhacaption {
  bottom: 10rem !important;
}

.megrendelesborder {
  border: #ecd089, solid, 3px;
  border-radius: 20px;
}
</style>