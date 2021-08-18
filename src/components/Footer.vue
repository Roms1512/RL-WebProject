<template>
  <div id="footer">
    <h2>RL WEBPROJECT</h2>
    <div class="reseaux">
      <a class="icon" href="https://www.facebook.com/romain.lavaur.3/" target="_blank"><i class="fab fa-facebook-square"></i></a>
      <a class="icon" href="https://www.instagram.com/romain_lavaur_off/?hl=fr" target="_blank"><i class="fab fa-instagram"></i></a>
    </div>
    <div class="droit">
      <div class="copyright">
        <i class="far fa-copyright"></i>
        <p>2021 RL WEBPROJECT All rights reserved</p> |
        <router-link to="/mentions">Mentions Légales</router-link>
      </div>
      <div class="design">
        <p>DESIGN BY</p>
        <a href="https://www.fiverr.com/bleumarina/create-innovative-website-design-or-website-mockup?source=order_page_summary_gig_link_image&funnel=caef94e0ad803e72ee31fdc332d1effb" target="_blank">BLEUMARINA</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style lang="scss">
#footer {
  background: #89815F;
  height: 17vh;
  padding: 2vh 4vw;
  a {
    border: none !important;
    padding: 0 1vw !important;
    margin-top: 0 !important;
  }
  h2 {
    letter-spacing: 10pt;
    font-family: 'AlphaCentauri';
    font-size: xx-large;
  }
  .reseaux, .droit {
    margin-top: 1vh;
  }
  .reseaux {
    text-align: left;
    font-size: xx-large;
    .icon {
      padding: 0 !important;
      i {
        margin-right: 10px;
      }
    }
  }
  .droit {
    height: 3vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .copyright, .design {
      font-size: small;
      display: flex;
      align-items: center;
    }
    .copyright {
      i {
        margin-top: 3px;
        margin-right: 10px;
      }
      p {
        margin-right: 20px;
      }
    }
  }
}
</style>