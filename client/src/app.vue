<template>
  <div id="app" class="container">
    <div class="row">
      <b-navbar-nav class="ml-auto">
        <b-nav-item id="logout" href="javascript:void(0);" @click="logout" v-if="loggedIn" right>Logout</b-nav-item>
      </b-navbar-nav>
    </div>
    <div class="row justify-content-md-center">
      <h1 class="text-center">Automated Testing con JavaScript</h1>
    </div>
    <!-- <a id="logout" href="javascript:void(0);" @click="logout" v-if="loggedIn">Logout</a> -->
    <router-view v-if="loggedIn"></router-view>
    <login
      v-else
      @login="login">
    </login>
  </div>
</template>

<script src="./app.js"></script>
