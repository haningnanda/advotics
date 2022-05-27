<template>
  <div id="app">
    <NavbarComponent/>
    <SideBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent.vue';
import SideBar from './components/SideBar.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    SideBar
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F7F7F7;
  min-height: 100vh;
}
</style>
