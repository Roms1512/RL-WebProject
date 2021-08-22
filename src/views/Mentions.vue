<template>
  <div id="mention" class="page">
    <header>
      <img src="@/assets/PhotoFond/2.png" alt="Clavier Ordinateur">
      <h1>Mentions<br> Légales</h1>
    </header>
    <section>
      <div class="colonne-1">
        <div class="sous-titre-mention">
          <h4>Éditeur du site</h4>
          <h5>Restaurant [ Nom Société ], 05000, Gap, France Responsable de la publication : [ Propriètaire ]</h5>
        </div>
        <div class="sous-titre-mention">
          <h4>Hébergement</h4>
          <h5>Ce site est hébergé par [ Nom Herbergeur ] au capital de [ Argent en € ] RCS Lille Métropole 424 761 419 00045 Siège social : [ Adresse Hebergeur ] - France.</h5>
        </div>
        <div class="sous-titre-mention">
          <h4>Crédits</h4>
          <h5>Photos : [ Propriètaire ]. Conception et réalisation du site Web : RL WebProject, 2 Impasse des Gentianes, 05200, Embrun.</h5>
        </div>
        <div class="sous-titre-mention">
          <h4>Information et libertés</h4>
          <h5>Conformément à la loi du 6 janvier 1978 relative à l'informatique, vous disposez d'un droit d'accès et de rectification à vos données personnelles.</h5>
        </div>
      </div>
      <div class="colonne-2">
        <div class="sous-titre-mention">
          <h4>Liens</h4>
          <h5>Les liens proposés vers d'autres sites sont communiqués à titre indicatif et ne sauraient engager la responsabilité du Cabinet [ Nom Entreprise ] tant en ce qui concerne les contenus, les conditions d'accès, que l'usage qu'il peut être fait de ces contenus et de leur éventuelles conséquences. Si les responsables d'un site " cible " souhaitent modifier leur mode de présence sur ce site, ils peuvent en faire la demande en adressant un email auprès du webmaster. <br>A l'inverse, les liens vers une ou plusieurs page(s) du présent site sont autorisés sous la condition d'en informer le webmaster. Le Cabinet [ Nom Société ] se réserve le droit de demander de retirer les liens à sa discrétion sans devoir en justifier la raison.</h5>
        </div>
        <div class="sous-titre-mention">
          <h4>Marques déposées</h4>
          <h5>Toutes les marques citées sur ce site Web appartiennent à leurs dépositaires respectifs.</h5>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'Mentions',
  components: {
    Footer
  }
}
</script>

<style lang="scss">
#mention {
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
    height: 83vh;
    padding: 3vh 10vw;
    display: flex;
    .colonne-1, .colonne-2 {
      margin-top: 5vh;
      width: 50%;
      text-align: left;
      h4 {
        font-size: x-large;
        margin-bottom: 2vh;
        color: #89815F;
        text-decoration: underline;
        font-weight: 600;
      }
      h5 {
        width: 90%;
        margin-bottom: 5vh;
        font-weight: 600;
        line-height: 2.3vh;
        font-size: smaller;
      }
    }
  }

  //***** Max-width *****//

  @media screen and(max-width: 1024px) {
    header {
      img {
        top: 0;
        height: 100vh;
      }
      h1 {
        font-size: 70px;
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
      height: 100vh;
    }
  }
  @media screen and(max-width: 540px) {
    header {
      h1 {
        font-size: xxx-large;
      }
    }
    section {
      height: 150vh;
      flex-direction: column;
      .colonne-1, .colonne-2 {
        width: 90vw;
      }
    }
  }
  @media screen and(max-width: 414px) {
    header {
      h1 {
        font-size: xx-large;
      }
    }
    section {
      .colonne-1, .colonne-2 {
        h4 {
          font-size: medium;
        }
        h5 {
          font-size: x-small;
        }
      }
    }
  }
  @media screen and(max-width: 375px) {
    section {
      height: 160vh;
    }
  }

  //***** Max-height *****//
}
</style>