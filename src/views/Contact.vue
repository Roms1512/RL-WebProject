
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
      <form id="contact_form" @submit.prevent="sendEmail">
        <input type="hidden" name="contact_number">
        <input type="text"  id="nom" name="user_name" placeholder="NOM, PRÉNOM" aria-label="Nom Prenom" required>
        <input type="email" id="email" name="user_email" placeholder="E-MAIL" aria-label="Email" required>
        <select name="sujet" id="sujet" aria-label="Sujet du message" required>
          <option value="">SUJET</option>
          <option value="devis">{{ sujet.devis }}</option>
          <option value="création-pro">{{ sujet.business }}</option>
          <option value="création-perso">{{ sujet.perso }}</option>
          <option value="reprise">{{ sujet.reprise }}</option>
          <option value="maintenance">{{ sujet.maintenance }}</option>
          <option value="referencement">{{ sujet.referencement }}</option>
          <option value="autre">{{ sujet.autre }}</option>
        </select>
        <textarea name="message" id="message" maxlength="1000" placeholder="MESSAGE ..." aria-label="Ecrivez votre message" required></textarea>
        <button @click="submitForm" id="submit">ENVOYEZ !</button>
      </form>
    </section>
    <Footer/>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'
import { mapState,mapMutations } from 'vuex'
import Footer from '@/components/Footer'


export default {
  name: 'Contact',
  components: {
    Footer
  },
  computed: {
    ...mapState(['sujet', 'devis', 'business', 'perso', 'reprise', 'maintenance', 'referencement', 'autre']),
    ...mapMutations(['submitForm'])
  },
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm(process.env.VUE_APP_YOUR_SERVICE_ID, process.env.VUE_APP_YOUR_TEMPLATE_ID, e.target, process.env.VUE_APP_YOUR_USER_ID)
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
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
        cursor: pointer;
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

  //***** Max-width *****//

  @media screen and(max-width: 1024px) {
    header {
      img {
        zoom: 0.6;
        top: 40vh;
      }
    }
    section {
      height: 150vh;
      .info-contact {
        margin:10vh auto;
        width: 90vw;
        .info {
          width: 30vw;
          h4 {
            margin-top: 10px;
          }
        }
      }
      form {
        input, select {
          height: 60px;
        }
      }
    }
  }
  @media screen and(max-width: 768px) {
    header {
      img {
        top: 60vh;
      }
      h1 {
        font-size: 70px;
      }
    }
    section {
      h2 {
        font-size: xx-large;
      }
      .info-contact {
        .info {     
          h5 {
            font-size: x-small !important;
          }
        }
      }
      h3 {
        font-size: large;
      }
      form {
        width: 80vw;
        input, select {
          height: 50px;
        }
      }
    }
  }
  @media screen and(max-width: 540px) {
    header {
      h1 {
        font-size: xxx-large;
      }
    }
    section {
      height: 200vh !important;
      h2 {
        margin-bottom: 5vh;
      }
      .info-contact {
        margin: 10vh auto !important;
        height: 70vh;
        width: 80vw;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        .info {
          height: 25vh;
          &:nth-of-type(2) {
            border-left: none;
            border-right: none;
            border-top: 2px solid #89815F;
            border-bottom: 2px solid #89815F;
            padding: 3vh 0;
            margin: 0 0 4vh 0;
          }
          &:nth-of-type(3) {
            width: 100%;
            text-align: center;
          }
        }
      }
      form {
        input, select, textarea {
          font-size: medium;
        }
      }
    }
  }
  @media screen and(max-width: 414px), (max-height: 414px) {
    header {
      img {
        zoom: .5;
      }
    }
    section {
      h2 {
        font-size: x-large;
      }
      form {
        height: 70vh !important;
        input, select, textarea {
          font-size: smaller;
        }
        input, select {
          height: 40px;
        }
      }
    }
  }
  @media screen and(max-width: 375px), (max-height: 375px) {
    header {
      img {
        zoom: 0.4;
        top: 120vh;
      }
    }
    section {
      .info-contact {
        .info {
          img {
            zoom: 0.08;
          }
        }
      }
      h3 {
        font-size: smaller;
      }
    }
  }

  //***** Max-height *****//

  @media screen and(max-height: 768px) {
          section {
            height: 170vh;
            form {
              height: 75vh;
            }
          }
  }
  @media screen and(max-height: 540px) {
    header {
      h1 {
        font-size: xxx-large;
      }
    }
  }
  @media screen and(max-height: 414px) {
    header {
      img {
        zoom: 0.8;
        right: 20vw;
        top: 20vh;
      }
    }
    section {
      height: 200vh !important;
      .info-contact {
        margin-bottom: 30vh;
      }
      form {
        height: 85vh !important;
      }
    }
  }
}
</style>
