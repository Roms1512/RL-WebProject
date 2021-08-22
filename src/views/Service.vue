<template>
  <div id="services" class="page">
    <header>
      <img src="@/assets/PhotoFond/3.png" alt="Une personne travaillant sur son ordi">
      <h1>SERVICES</h1>
    </header>
    <section>
      <h5 class="description">
        <span class="debut">RL WebProject :</span> Nous sommes actuellement une micro-entreprise de développement web basé à <span>Embrun</span>, au cœur des <span>Hautes Alpes</span>.<br>
        Nous vous proposons un service de <span>Création</span> ou de <span>Reprise</span> de Site Web avec l’assurance de respecter les <span>recommandations SEO de Google</span>. Nous travaillons en étroite collaboration avec des <span>designers freelance</span> et un <span>photographe / vidéaste Professionnel</span>, ce qui nous permet de vous garantir un <span>design moderne</span> avec des <span>photos et des vidéos de grande qualité</span>.
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
      line-height: 2.8vh;
      width: 60vw;
      height: 25vh;
      margin: auto;
      .debut {
        margin-right: 15px;
        font-size: large;
      }
      span {
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
          top: 46vh;
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
      margin: auto;
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

  //***** Max-width *****//

  @media screen and(max-width: 1366px) {
    section {
      .all-service {
        img {
          height: 55vh;
          &:nth-child(1) {
            top: 12vh;
            left: -20vw;
          }
          &:nth-child(2) {
            height: 60vh;
            top: 52vh;
            right: -40vw;
          }
        }
      }
    }
  }
  @media screen and(max-width: 1024px) {
    header {
      img {
        zoom: 0.6;
        top: 20vh;
      }
    }
    section {
      .description {
        width: 85vw;
      }
      .all-service {
        img {
          height: 40vh;
          &:nth-child(1) {
            top: 12vh;
          }
          &:nth-child(2) {
            height: 50vh;
            top: 52vh;
            right: -40vw;
          }
        }
        .single-service {
          width: 50vw;
          &:nth-of-type(2) {
            left: 20vw;
          }
        }
      }
    }
  }
  @media screen and(max-width: 768px) {
    header {
      img {
        top: 55vh;
      }
      h1 {
        font-size: 70px;
      }
    }
    article {
      h2 {
        font-size: xx-large;
      }
    }
  }
  @media screen and(max-width: 540px) {
    header {
      img {
        zoom: 0.6 !important;
        top: 60vh !important;
      }
      h1 {
        font-size: xxx-large;
      }
    }
    section {
      height: 180vh !important;
      .description {
        height: 40vh;
        font-size: x-small;
        .debut {
          font-size: medium;
        }
      }
      .all-service {
        height: 115vh;
        .single-service {
          h4 {
            font-size: medium;
          }
          h5 {
            font-size: small;
          }
        }
      }
    }
    article {
      height: 105vh;
      .competences {
        .single-competence {
          width: 25vw;
        }
      }
    }
  }
  @media screen and(max-width: 414px) {
    header {
      img {
        zoom: 0.5;
        right: -25vw;
      }
    }
    section {
      .all-service {
        img {
          height: 40vh;
          &:nth-child(1) {
            top: 22vh;
          }
          &:nth-child(2) {
            height: 40vh;
            top: 82vh;
            right: -55vw;
          }
        }
      }
    }
    article {
      h2 {
        font-size: x-large;
      }
      .competences {
        .single-competence {
          width: 22vw;
          p {
            font-size: small;
          }
          img {
          height: 7vh;
        }
        }
      }
    }
  }

  //***** Max-height *****//

  @media screen and(max-height: 768px) {
    header {
      img {
        zoom: 0.8;
        top: 20vh;
      }
    }
  }
}
</style>