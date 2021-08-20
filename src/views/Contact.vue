<template>
  <div id="contact" class="page">
    <header>
      <img src="@/assets/PhotoFond/4.png" alt="Une personne travaillant sur son ordi">
      <h1>CONTACT</h1>
    </header>
    <section>
      <h2>CONTACTEZ-NOUS</h2>
      <div class="info-contact">
        <div class="info">
          <img src="@/assets/Icon/1.png" alt="Icon Téléphone">
          <h4>TÉLÉPHONE</h4>
          <h5>06.03.74.49.93</h5>
        </div>
        <div class="info">
          <img src="@/assets/Icon/2.png" alt="Icon Point de Localisation">
          <h4>ADRESSE</h4>
          <h5>2 Impasses les Gentianes<br>05200 Embrun</h5>
        </div>
        <div class="info">
          <img src="@/assets/Icon/3.png" alt="Icon Enveloppe">
          <h4>E-MAIL</h4>
          <h5>romainlavaur@hotmail.com</h5>
        </div>
      </div>
      <h3>SI VOUS AVEZ DES QUESTIONS,<br>ENVOYER NOUS UN MESSAGE</h3>
      <form method="post" action="">
        <input type="text" placeholder="NOM, PRÉNOM" aria-label="Nom Prenom" required>
        <input type="email" placeholder="E-MAIL" aria-label="Email" required>
        <select name="sujet" id="sujet" aria-label="Sujet du message" required>
          <option value="">SUJET</option>
          <option value="devis">J'ai besoin d'un devis</option>
          <option value="création-pro">Création d'un site web pour mon entreprise</option>
          <option value="création-perso">Création d'un site web personnel(le)</option>
          <option value="reprise">Reprise d'un site web existant</option>
          <option value="maintenance">Maintenance de mon site</option>
          <option value="Réferencement">Améliorer le référencement de mon site</option>
        </select>
        <textarea name="message" id="message" maxlength="1000" placeholder="MESSAGE ..." aria-label="Ecrivez votre message" required></textarea>
        <button>ENVOYEZ !</button>
      </form>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'Contact',
  components: {
    Footer
  }
}
</script>

<style lang="scss">
#contact {
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
      bottom: 0;
      right: 0;
      height: 90vh;
    }
    h1 {
      font-weight: 600;
      font-size: 100px;
      color: #fff;
    }
  }

  section {
    background: #0E0E0E;
    height: 160vh;
    h2 {
      padding-top: 5vh;
      color: #89815F;
      font-weight: 600;
      font-size: xxx-large;
      margin-bottom: 20vh;
    }
    .info-contact {
      width: 60vw;
      height: 20vh;
      margin: 10vh auto;
      display: flex;
      
      .info {
        width: 20vw;
        height: 12vh;
        line-height: center;
        img {
          zoom: 0.1;
        }
        h4 {
          color: #89815F;
          margin-bottom: 2vh;
        }
        h5 {
          font-weight: 400;
        }
        &:nth-of-type(2) {
          border-left: 2px solid #89815F;
          border-right: 2px solid #89815F;
        }
      }
    }
    h3 {
      height: 20vh;
      font-weight: 600;
      font-size: x-large;
    }
    form {
      margin: auto;
      width: 60vw;
      height: 60vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      input, select, textarea {
        font-family: 'Montserrat';
        font-weight: 500;
        font-size: large;
        color: #89815F;
        border: none;
        background: #222222;
        padding:10px 20px;
        &::placeholder {
          color: #89815F;
          font-family: 'Montserrat';
          font-weight: 500;
        }
      }
      input, select {
        height: 40px;
      }
      textarea {
        height: 28vh;
        margin-bottom: 8vh;
        resize: none;
      }
      button {
        width: 180px;
        margin: 0 auto 0 auto;
        color: #fff;
        background: transparent;
        padding: 8px 40px;
        font-weight: bold;
        border: 1px solid #fff;
        text-align: center;
      }
    }
  }
}
</style>