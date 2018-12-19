<template>
  <div id="app">
    <b-navbar toggleable="md" variant="dark" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/1.png" width="50px" height="50px" class="img-circle" style="padding: 5px">
      <b-navbar-brand to="/">GET A HAND</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/#"><i class="fa fa-home" style="padding: 5px"> Home</i></b-nav-item>
          <b-nav-item to="/issues"><i class="fa fa-list" style="padding: 5px"> Manage Issues</i></b-nav-item>
          <b-nav-item to="/add"><i class="fa fa-money" style="padding: 5px"> ShareIssue</i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/login"><i class="fa fa-info" style="padding: 5px"> Log in</i></b-nav-item>
          <b-nav-item to="logout"><i class="fa fa-info" style="padding: 5px"> Log out</i></b-nav-item>
          <b-nav-item to="/about"><i class="fa fa-info" style="padding: 5px"> About Us</i></b-nav-item>
          <b-nav-item to="/contact"><i class="fa fa-comment" style="padding: 5px"> Contact Us</i></b-nav-item>
          <i class="fa fa-pied-piper-alt fa-1x" style="padding: 5px; color: #f8fff9;"></i>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div controls="controls" class="music">
      <audio controls="controls" autoplay="autoplay" loop=-1>
        <source src="./assets/bgm.mp3" type="audio/mpeg" />
      </audio>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ff2ca8;
  margin-top: 0px;
}
.music {
  position: fixed;
  bottom: 0;
}
.VueTables__sortable {
  cursor: pointer;
}
</style>
