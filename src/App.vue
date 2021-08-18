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
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

#nav {
  background: url(./assets/Fond/1.png);
  height: 18vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 4vw;
  padding-right: 5vw;
  position: relative;
  .logo {
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
      margin-left: 100pt;
    }
  }
  a {
    font-weight: bold;
    color: #fff;
    height: 30px;

    &.router-link-exact-active {
      border-bottom: 1px solid #89815F;
    }
  }
}
</style>
