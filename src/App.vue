<template >
  <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/test">Test</router-link>|Farmer
    </div> -->
  <NavBar></NavBar>
  <!-- <transition name="fade">
    <router-view />
  </transition> -->

  <router-view v-slot="{Component}">
    <transition name="fade-transform" mode="out-in" enter-from-class="fade-transform-enter">
      <component :is="Component"> </component>
    </transition>
  </router-view>
  <Footer></Footer>
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.4s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/FooterComponent";

export default {
  components: { NavBar, Footer },
  data() {},
  methods: {},
  mounted() {},
};
</script>