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
      &.router-link-exact-active {
        border-bottom: 1px solid #89815F;
      }
    }
  }
}
</style>
