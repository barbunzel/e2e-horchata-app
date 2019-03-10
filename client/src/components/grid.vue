<template>
  <div class="container-fluid">
    <router-link to="/bebidas/crear" id="agregar">Agregar Bebida</router-link>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Marca</th>
          <th scope="col">Carbonatada</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(bebida, index) in bebidas" :key="index">
          <th scope="row">{{index + 1}}</th>
          <td><router-link :to="`/bebidas/${bebida._id}`">{{bebida.nombre}}</router-link></td>
          <td>{{bebida.marca}}</td>
          <td>{{bebida.carbonatada}}</td>
          <td><a id="borrar" href="javascript:void(0);" @click="borrar(bebida._id)">Borrar</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="./grid"></script>