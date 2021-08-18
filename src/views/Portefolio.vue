<template>
  <div id="portefolio" class="page">
    <header>
      <img src="@/assets/PhotoFond/6.png" alt="MacBook">
      <h1>PORTEFOLIO</h1>
    </header>
    <section>
      <div class="projet projet-1">
        <div class="colonne-1"></div>
        <div class="colonne-2"></div>
      </div>
      <div class="line"></div>
      <div class="projet projet-2">
        <div class="colonne-1"></div>
        <div class="colonne-2"></div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'Portefolio',
  components: {
    Footer
  }
}
</script>

<style lang="scss">
#portefolio {
  height: 100vh;
  background: url(../assets/Fond/2.png);
  position: relative;
  top: -18vh;
  left: -1px;

  header {
    text-align: left;
    margin-left: 10vw;
    padding-top: 38vh;
    height: 100vh;
    img {
      z-index: 0;
      pointer-events: none;
      position: absolute;
      opacity: 50%;
      top: -50vh;
      right: -30vw;
      height: 150vh;
    }
    h1 {
      font-weight: 600;
      font-size: 100px;
      color: #fff;
    }
  }

  section {
    background: #0E0E0E;
    .projet {
      margin: auto;
      height: 120vh;
      width: 80vw;
      display: flex;
      .colonne-1, .colonne-2 {
        margin: auto;
        height: 100vh;
        width: 38vw;
        background: #c1c1c1;
      }
    }
    .line {
      margin: auto;
      height: 2px;
      width: 60vw;
      background: #89815F;
    }
  }
}
</style>