<script setup>
import AppFooter from '../components/AppFooter.vue';
</script>

<template>

  <body>
    <div class="d-flex mb-4 mb-3">
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
              <img src="/src/assets/img/T.K1.jpg" class="d-block w-75 mx-auto" alt="Slide 2">
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
            <!-- <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span> -->
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span> -->
          </button>
        </div>
      </div>
      <div class="col-md-4 d-flex align-items-center p-5">
        <p class="bemutatkozoszoveg">
          Üdvözlöm a Mátrai kandalló oldalán! A Mátrai név ismerősen csenghet a cserépkályhás szakmából. Családom útja
          1957-ben kezdődött és a 3 generáció alatt megszerzett tudás tovább száll. Felmenőim kályhái sokak otthonának
          melegéről gondoskodnak a mai napig. Most a Mátrai kandalló bújtatja modern köntösbe az ősi, már évezredek óta
          használt technológiát. Ismerkedjen meg munkáinkkal, melyek között megtalálhatja az Önnek tetsző formát és
          stílust, a klasszikustól az egyszerű, modern kivitelezésig. Az általunk épített kandallók egyéni tervezése
          biztosítja, hogy munkánk minden tekintetben tükrözze az Ön elvárásait.
        </p>

      </div>
    </div>
    <div class="megrendelesborder mx-5">
      <h2 class="text-center"> <b>Megrendelés menete</b></h2>
      <div class="text-center">
        <p class="megrendeles">Ha megtetszett valamelyik munkánk, bátran lépjen kapcsolatba velünk messengeren, emailbe vagy telefonon. Egyeztetés után egy helyszíni terepfelmérés következik, ami Győr és 15 km-es körzetében díjmentes, messzebb 10 000 Ft, ami üzlet kötés esetében levonódik a teljes összegből. Ezután egyedi terv és árajánlat készül minden ügyfélnek a megbeszéltek alapján, forintra kiszámolva.</p>

      </div>
    </div>
    <AppFooter />
  </body>
</template>

<style scoped>
body {
  min-height: 100vh;
  background: #343331;
  margin-top: 70px;
}
h2{
  margin-top: 15px;
  margin-bottom: 15px;
}

.megrendeles{
  color: white;
  font-size: 30px;
 
}

.carousel-item img {
  object-fit: contain;
  max-height: 100%;
  min-height: 90vh;
}

/* .carousel-control-prev {
  margin-left: 250px;
}

.carousel-control-next {
  margin-right: 250px;
} */

.teglakalyha {
  height: 100%;
  align-items: center;

}

.teglakalyhacaption {
  bottom: 10rem !important;
}

@media screen and (min-width: 765px) and (max-width: 3500px) {

  .bemutatkozoszoveg {
      color: white;
      text-align: justify;
      font-size: 80px;
      padding: 15px;
      margin-top: 200px;
      margin-right: 200px;
    }


}
.bemutatkozoszoveg {
    color: white;
    font-size: 30px;

  }
  h2{
    color: white;
  }
  .megrendelesborder{
    border: #ecd089, solid, 3px;
    border-radius: 20px;
    }
</style>