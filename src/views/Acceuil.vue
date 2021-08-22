<template>
  <div id="acceuil" class="page">
    <header>
      <img src="@/assets/PhotoFond/1.png" alt="Ordinateur">
      <h1>WEB<br>DÉVELOPPEUR</h1>
      <h5>Des technologies qui rassemble, <br>Pour un site web qui vous ressemble</h5>
      <router-link to="/contact">CONTACT</router-link>
    </header>
    <section>
      <h2 data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">QUELQUES PROJETS RÉALISÉS<br>PAR NOS SOINS</h2>
      <h5 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Chaque projet est réalisés sur mesures pour<br>correspondre à vos besoins</h5>
      <div class="projets">
        <div class="projet" data-aos="fade-in" data-aos-duration="2500" data-aos-offset="350" data-aos-once="true">
          <img src="@/assets/PhotoProjet/1.png" alt="projet 1">
          <p>Open Classrooms <br>Projet d'écoles, SEO & Référencement</p>
        </div>
        <div class="projet" data-aos="fade-in" data-aos-duration="2500" data-aos-delay="700" data-aos-offset="350" data-aos-once="true">
          <img src="@/assets/PhotoProjet/3.png" alt="projet 2">
          <p>Entrainement <br>Reproduction d'une Template</p>
        </div>
        <div class="projet" data-aos="fade-in" data-aos-duration="2500" data-aos-delay="1400" data-aos-offset="350" data-aos-once="true">
          <img src="@/assets/PhotoProjet/9.png" alt="projet 3">
          <p>Entrainement <br>Reproduction d'une Template</p>
        </div>
      </div>
      <router-link to="/portefolio" class="button">VOIR PLUS</router-link>
    </section>
    <article>
      <img src="@/assets/PhotoFond/2.png" alt="Clavier Ordinateur">
      <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">SERVICES & <br> COMPÉTENCES</h2>
      <div class="competences">
        <div class="competence" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="500" data-aos-once="true">
          <img src="@/assets/Icon/15.png" alt="Icon Ordinateur">
          <div class="text-competence">
            <h4>CRÉATION DE SITES WEB</h4>
            <h5>Besoin d’un site web Professionnel pour vous ou votre entreprise ? Site Vitrine, OnePage, Site Sur Mesure ? Vous ne savais pas quoi choisir ? Pas de panique, nous sommes là pour vous aider à choisir la meilleure solution et à créer un site web adaptée à votre activité(s).</h5>
          </div>
        </div>
        <div class="competence" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1500" data-aos-once="true">
          <img src="@/assets/Icon/16.png" alt="Icon Roulement">
          <div class="text-competence">
            <h4>MAINTENANCE & REPRISE</h4>
            <h5>Vous avez déjà un site Internet et vous souhaitez, le Sécuriser, le Mettre à Jour, Refaire son Design ou même l’Optimiser, venez vers nous, nous vous aiderons dans vos démarches.</h5>
          </div>
        </div>
        <div class="competence" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200" data-aos-offset="350" data-aos-once="true">
          <img src="@/assets/Icon/17.png" alt="Icon fusée">
          <div class="text-competence">
            <h4>SEO & RÉFÉRENCEMENT</h4>
            <h5>Nous vous garantissons un site web qui sera fluide pour vos utilisateurs, qui respect les recommandations SEO de Google et qui vous fera monter dans les résultats de recherches.</h5>
          </div>
        </div>
      </div>
      <router-link to="/services">VOIR PLUS</router-link>
    </article>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'Acceuil',
  components: {
    Footer
  }
}
</script>

<style lang="scss">
#acceuil {
  position: absolute;
  width: 100%;
  top: -18vh;
  a {
    padding: 8px 40px;
    font-weight: bold;
    border: 1px solid #fff;
    text-align: center;
    margin-top: 5vh;
  }
  header {
    background: linear-gradient(to left, #2A2A2A, #010101);
    text-align: left;
    margin-left: 10vw;
    padding-top: 38vh;
    height: 118vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
    h5 {
      margin-top: 10px;
      color: #fff;
      font-weight: 300;
      font-size: large;
    }
    a {
      margin-left: 60pt;
    }
  }
  section {
    height: 130vh;
    background: #0E0E0E;
    padding-top: 5vh;
    h2, h5 {
      padding-right: 10vw;
      text-align: right;
    }
    h2 {
      font-weight: 600;
      margin-bottom: 7vh;
      font-size: xxx-large;
      color: #89815F;
    }
    h5 {
      font-weight: 300;
      font-size: medium;
    }
    .projets {
      margin: 5vh auto;
      width: 85vw;
      height: 80vh;
      display: flex;
      justify-content: space-between;
      .projet {
        position: relative;
        width: 23vw;
        height: 70vh;
        img {
          object-fit: cover;
          object-position: center top;
          width: 23vw;
          height: 70vh;
        }
        p {
          position: absolute;
          top: 72vh;
          text-align: left;
          font-weight: 300;
          font-size: small;
        }
      }
      
    }
    
  }
  article {
    position: relative;
    height: 100vh;
    background: #0E0E0E;
    padding-top: 5vh;
    img {
      pointer-events: none;
      position: absolute;
      height: 100vh;
      opacity: 20%;
      right: 0;
      top: 0;
    }
    h2 {
      font-weight: 600;
      text-align: left;
      color: #89815F;
      padding-left: 7vw;
      font-size: xxx-large;
    }
    .competences {
      height: 60vh;
      width: 80vw;
      margin:4vh auto 5vh auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .competence {
        position: relative;
        width: 40vw;
        height: 25vh;
        display: flex;
        align-items: center;
        img {
          position: relative;
          height: 25vh;
          opacity: 100%;
          zoom: 0.5;
        }
        .text-competence {
          text-align: left;
          line-height: center;
          margin-left: 3vw;
          margin-right: 8vw;
          h4 {
            font-size: large;
            margin-bottom: 2vh;
            font-weight: 600;
          }
          h5 {
            font-weight: 300;
            font-size: medium;
          }
        }
      }
    }
  }
  @media screen and(max-width: 1366px) {
    header {
      justify-content: center;
    }

    section {
      position: relative;
      height: 300vh;
      .projets {
        flex-direction: column;
        align-items: center;
        .projet {
          width: 85vw;
          height: 90vh;
          margin-bottom: 10vh;
          img {
            width: 100%;
            height: 70vh;
          }
        }
      }
      .button {
        position: relative;
        top: 172vh;
      }
    }
  }
  @media screen and(max-width: 1024px){
    article {
      height: 100vh;
      .competences {
        height: 70vh;
        flex-direction: column;
        flex-wrap: nowrap;
        .competence {
          width: 100%;
        }
      }
    }
  }
  @media screen and(max-width: 768px) {
    header {
      h1 {
        font-size: 70px;
      }
    }
    section {
      height: 290vh;
      h2 {
        font-size: xx-large;
      }
      h5 {
        font-size: medium;
      }
      .button {
        top: 165vh;
      }
    }
    article {
      height: 105vh;
      img {
        height: 105vh;
      }
      h2 {
        font-size: xx-large;
      }
      .competences {
        .competence {
          img {
            height: 20vh;
          }
          .text-competence {
            h4 {
              font-size: medium;
            }
            h5 {
              font-size: small;
            }
          }
        }
      }
    }
  }
  @media screen and(max-height: 768px) {
    section {
      height: 310vh;
    }
    article {
      height: 115vh;
      img {
        height: 115vh;
      }
    }
  }
}
</style>