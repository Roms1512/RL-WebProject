<template>
    <div id="nav">
          <div class="logo">
            <router-link to="/"><p>RL WebProject</p></router-link>
          </div>
          <div class="nav-bar">
            <router-link to="/portefolio">Portefolio</router-link>
            <router-link to="/services">Services</router-link>
            <router-link to="/contact">Contact</router-link>
          </div>
    </div>
    <transition name="router-anim">
      <router-view/>
    </transition>
</template>

<script>
export default {
  name: 'Nav',
  
}
</script>

<style lang="scss">
// @import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1';

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-70px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-70px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.page {
  position: fixed;
  width: inherit;
}
.router-anim-enter-active {
  animation: coming 1s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 1s;
}

#app {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

#nav {
  background: transparent;
  height: 18vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 4vw;
  padding-right: 5vw;
  position: relative;
  .logo {
    z-index: 10;
    p {
      color: #89815F;
      font-family: 'AlphaCentauri';
      font-size: x-large;
      letter-spacing: 10pt;
    }
  }
  .nav-bar {
    z-index: 10;
    a {
      font-weight: bold;
      color: #fff;
      margin-left: 100pt;
      padding-bottom: 1vh;
      border: 0px solid transparent;
      transition: border 1s .1s;
      &.router-link-exact-active {
        border-bottom: 1px solid #89815F;
        
      }
    }
  }

  //***** Max-width *****//

  @media screen and(max-width: 1024px) {
    .nav-bar {
      a {
        margin-left: 50pt;
      }
    }
  }
  @media screen and(max-width: 768px), (max-height: 768px) {
    flex-direction: column;
    justify-content: center !important;
    .logo, .nav-bar {
      width: 100%;
    }
    .logo {
      margin-bottom: 4vh;
      p {
        font-size: xx-large;
        color: #a39555;
      }
    }
    .nav-bar {
      a {
        margin-left: 25pt;
        margin-right: 25pt;
      }
    }
  }
  @media screen and(max-width: 540px), (max-height: 540px) {
    .logo {
      margin-top: 2vh;
      p {
        font-size: x-large;
      }
    }
  }
  @media screen and(max-width: 414px), (max-height: 414px) {
    .logo {
      p {
        font-size: large;
      }
    }
    .nav-bar {
      display: flex;
      justify-content: space-between;
      a {
        font-size: small;
        margin: 0;
      }
    }
  }
  @media screen and(max-width: 375px), (max-height: 375px) {
    .nav-bar {
      a {
        font-size: x-small;
      }
    }
  }
}
</style>
