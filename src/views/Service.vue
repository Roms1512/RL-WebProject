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
        Nulla fugiat obcaecati quos, ullam sunt vitae autem. Nisi provident autem doloribus aliquid error fuga. Ducimus praesentium sunt nulla voluptate facere ad numquam at magni, sed qui hic inventore voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h5>
      <div class="all-service">
        <img src="@/assets/PhotoFond/4.png" alt="Écouteur et Téléphone Apple" data-aos="slide-right" data-aos-duration="1500" data-aos-offset="300" data-aos-once="true" data-aos-delay="500">
        <img src="@/assets/PhotoFond/5.png" alt="Clavier Apple" data-aos="slide-left" data-aos-duration="1500" data-aos-offset="300" data-aos-once="true" data-aos-delay="500">
        <div class="single-service" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
          <h4>CRÉATION DE SITES WEB</h4>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi, nesciunt commodi, rem, nobis mollitia nostrum ab ipsum sequi tempore sunt maxime consequatur excepturi deserunt illo ullam repellat ad sapiente.</h5>
        </div>
        <div class="single-service" data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
          <h4>MAINTENANCE & REPRISE</h4>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi, nesciunt commodi, rem, nobis mollitia nostrum ab ipsum sequi tempore sunt maxime consequatur excepturi deserunt illo ullam repellat ad sapiente.</h5>
        </div>
        <div class="single-service" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="800" data-aos-once="true">
          <h4>SEO & RÉFÉRENCEMENT</h4>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi, nesciunt commodi, rem, nobis mollitia nostrum ab ipsum sequi tempore sunt maxime consequatur excepturi deserunt illo ullam repellat ad sapiente.</h5>
        </div>
      </div>
    </section>
    <article>
      <h2>COMPÉTENCES</h2>
      <div class="competences">
        <div class="single-competence" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
          <img src="@/assets/Icon/7.png" alt="Logo SASS">
          <p>SASS</p>
        </div>
        <div class="single-competence" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400" data-aos-once="true">
          <img src="@/assets/Icon/8.png" alt="Logo Vue.JS">
          <p>VUE.JS</p>
        </div>
        <div class="single-competence" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800" data-aos-once="true">
          <img src="@/assets/Icon/9.png" alt="Logo MongoDB">
          <p>MONGODB</p>
        </div>
        <div class="single-competence" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1200" data-aos-once="true">
          <img class="express" src="@/assets/Icon/10.png" alt="Logo Express.JS">
          <p>EXPRESS.JS</p>
        </div>
        <div class="single-competence" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1600" data-aos-once="true">
          <img src="@/assets/Icon/11.png" alt="Logo Node.JS">
          <p>NODE.JS</p>
        </div>
        <div class="single-competence" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="2000" data-aos-once="true">
          <img src="@/assets/Icon/12.png" alt="Logo MySQL">
          <p>MYSQL</p>
        </div>
      </div>
    </article>
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
  background: linear-gradient(to right, #2A2A2A, #010101);
  position: relative;
  top: -18vh;

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
      font-weight: 600;
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
        font-weight: 400;
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
        height: 60vh;
        &:nth-child(1) {
          opacity: 30%;
          top: 22vh;
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

  article {
    height: 82vh;
    h2 {
      font-weight: 600;
      margin-top: 2vh;
      color: #89815F;
      font-size: xxx-large;
    }
    .competences {
      margin:auto;
      width: 60vw;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .single-competence {
        position: relative;
        width: 20vw;
        margin-top: 15vh;
        img {
          height: 10vh;
          &.express {
            position: absolute;
            right: 2.5vw;
            zoom: 2;
          }
        }
        &:nth-of-type(4) {
          p {
            position: absolute;
            right: 6.8vw;
            bottom: 0;
          }
        }
      }
    }
  }
}
</style>