<template>
  <div id="services" class="page">
    <header>
      <img src="@/assets/PhotoFond/3.png" alt="Une personne travaillant sur son ordi">
      <h1>SERVICES</h1>
    </header>
    <section>
      <h5 class="description">
        <span>Petite Description :</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi vitae asperiores alias eveniet odit dicta! Obcaecati eos enim ipsum eaque nobis sequi perspiciatis nihil quasi quaerat, eligendi similique magni placeat?
        In tempora quia officia, fugit quisquam libero! Aliquid, hic quasi debitis, quisquam qui ea delectus, sed nostrum magni modi pariatur quo distinctio reiciendis vitae assumenda quia maiores? Laborum, eius molestias?
        Nulla fugiat obcaecati quos, ullam sunt vitae autem. Nisi provident autem doloribus aliquid error fuga. Ducimus praesentium sunt nulla voluptate facere ad numquam at magni, sed qui hic inventore voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus praesentium alias ipsum odit quod aliquid facilis ducimus aperiam vitae, blanditiis sit dolorum dolore, adipisci fugiat commodi quibusdam, voluptatibus quia corporis.
        Deleniti provident cum, quos excepturi laudantium iure beatae error consequatur perferendis labore quia reprehenderit nemo accusamus totam eos inventore molestias suscipit nesciunt ea culpa explicabo tempore fugit eum. Dolores, quasi.
      </h5>
      <div class="all-service">
        <img src="@/assets/PhotoFond/4.png" alt="Écouteur et Téléphone Apple">
        <img src="@/assets/PhotoFond/5.png" alt="Clavier Apple">
        <div class="single-service">
          <h4>CRÉATION DE SITES WEB</h4>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi, nesciunt commodi, rem, nobis mollitia nostrum ab ipsum sequi tempore sunt maxime consequatur excepturi deserunt illo ullam repellat ad sapiente.</h5>
        </div>
        <div class="single-service">
          <h4>MAINTENANCE & REPRISE</h4>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi, nesciunt commodi, rem, nobis mollitia nostrum ab ipsum sequi tempore sunt maxime consequatur excepturi deserunt illo ullam repellat ad sapiente.</h5>
        </div>
        <div class="single-service">
          <h4>SEO & RÉFÉRENCEMENT</h4>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi, nesciunt commodi, rem, nobis mollitia nostrum ab ipsum sequi tempore sunt maxime consequatur excepturi deserunt illo ullam repellat ad sapiente.</h5>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'Service',
  components: {
    Footer
  }
}
</script>

<style lang="scss">
#services {
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
      opacity: 38%;
      top: 0;
      right: 0;
      height: 100vh;
    }
    h1 {
      font-weight: bold;
      font-size: 100px;
      color: #fff;
    }
  }
  section {
    background: #0E0E0E;
    height: 150vh;
    h5 {
      text-align: left;
      font-weight: 300;
    }
    .description {
      padding: 3vh 0;
      width: 60vw;
      height: 25vh;
      margin: auto;
      span {
        margin-right: 20px;
      }
    }
    .all-service {
      position: relative;
      width: 60vw;
      height: 100vh;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      img {
        position: absolute;
        height: 65vh;
        &:nth-child(1) {
          opacity: 30%;
          top: 18vh;
          left: -20vw;
        }
        &:nth-child(2) {
          opacity: 25%;
          height: 70vh;
          top: 45vh;
          right: -36vw;
        }
      }
      .single-service {
        position: relative;
        width: 26vw;
        height: 23vh;
        text-align: left;
        &:nth-of-type(2) {
          left: 34vw;
        }
        h4 {
          color: #89815F;
          margin-bottom: 7vh;
          font-size: x-large;
        }
        h5 {
          font-size: large;
        }
      }
    }
  }
}
</style>