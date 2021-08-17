<template>
  <div id="acceuil">
    <img src="@/assets/PhotoFond/1.png" alt="Ordinateur mis en fond">
    <header>
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
  </div>
  <router-view/>
</template>

<script>

export default {
  name: 'Acceuil',
}
</script>

<style lang="scss">
#acceuil {
  height: 82vh;
  background: url(../assets/Fond/1.png);
  img {
    pointer-events: none;
    position: absolute;
    opacity: 38%;
    top: 0;
    right: 0;
    height: 100vh;
  }
  a {
    color: #fff;
    padding-top: 5px;
    padding-bottom: 5px;
    font-weight: bold;
    border: 1px solid #fff;
    text-align: center;
  }
  header {
    text-align: left;
    margin-left: 10vw;
    padding-top: 20vh;
    height: 82vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h1 {
      font-weight: bolder;
      font-size: xxx-large;
      color: #fff;
    }
    h5 {
      margin-top: 10px;
      color: #fff;
      font-weight: 300;
    }
    a {
      width: 150px;
      margin-top: 5vh;
      margin-left: 60pt;
    }
  }

  section {
    height: 150vh;
    background: #0E0E0E;
    padding-top: 5vh;
    h2, h5 {
      padding-right: 10vw;
      text-align: right;
    }
    h2 {
      margin-bottom: 7vh;
      font-size: xx-large;
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
      a {
        width: 250px !important;
      }
    }
  }
}
</style>