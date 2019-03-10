<template>
  <div class="container p-5">
    <input id="username" v-model="username" name="username" type="text" placeholder="Username" class="form-control">
    <input id="password" v-model="password" name="password" autocomplete="off" type="password" placeholder="Password" class="form-control">
    <button id="login" @click="login" :disabled="!credencialesValidas" class="btn btn-primary btn-lg">Login</button>
  </div>
</template>

<script src="./login.js"></script>
