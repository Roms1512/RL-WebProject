<template>
  <div id="acceuil">
    <header>
      <img src="@/assets/PhotoFond/1.png" alt="Ordinateur">
      <h1>WEB<br>DÉVELOPPEUR</h1>
      <h5>Des technologies qui rassemble, <br>Pour un site web qui vous ressemble</h5>
      <router-link to="/contact">Contact</router-link>
    </header>
    <section>
      <h2>QUELQUES PROJETS RÉALISÉS<br>PAR NOS SOINS</h2>
      <h5>Chaque projet est réalisés sur mesures pour<br>correspondre à vos besoins</h5>
      <div class="projets">
        <div class="projet">
          <p>Quelques mots de <br>présentation : clients etc etc</p>
        </div>
        <div class="projet">
          <p>Quelques mots de <br>présentation : clients etc etc</p>
        </div>
        <div class="projet">
          <p>Quelques mots de <br>présentation : clients etc etc</p>
        </div>
      </div>
      <router-link to="/portefolio">VOIR PLUS</router-link>
    </section>
    <article>
      <img src="@/assets/PhotoFond/2.png" alt="Clavier Ordinateur">
      <h2>SERVICES & <br> COMPÉTENCES</h2>
      <div class="competences">
        <div class="competence">
          <img src="@/assets/Icon/15.png" alt="Icon Ordinateur">
          <div class="text-competence">
            <h4>CRÉATION DE SITES WEB</h4>
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti dolorum sed eum aliquid! Repellat ab doloremque sunt necessitatibus </h5>
          </div>
        </div>
        <div class="competence">
          <img src="@/assets/Icon/16.png" alt="Icon Roulement">
          <div class="text-competence">
            <h4>MAINTENANCE & REPRISE</h4>
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti dolorum sed eum aliquid! Repellat ab doloremque sunt necessitatibus </h5>
          </div>
        </div>
        <div class="competence">
          <img src="@/assets/Icon/17.png" alt="Icon fusée">
          <div class="text-competence">
            <h4>SEO & RÉFÉRENCEMENT</h4>
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti dolorum sed eum aliquid! Repellat ab doloremque sunt necessitatibus </h5>
          </div>
        </div>
      </div>
      <router-link to="/services">Services</router-link>
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
  height: 82vh;
  background: url(../assets/Fond/1.png);
  
  a {
    color: #fff;
    padding: 8px 40px;
    font-weight: bold;
    border: 1px solid #fff;
    text-align: center;
    margin-top: 5vh;
  }

  header {
    text-align: left;
    margin-left: 10vw;
    padding-top: 20vh;
    height: 82vh;
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
      font-weight: bold;
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
        background: rgba(255, 255, 255, 0.692);
        width: 23vw;
        height: 70vh;
        p {
          position: relative;
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
        width: 35vw;
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
}
</style>