export default {
  created() {
    this.cargarBebida();
  },
  data() {
    return {
      bebida: {
        nombre: '',
        marca: '',
        carbonatada: false,
      },
    };
  },
  methods: {
    cargarBebida() {
      const id = this.$route.params.id;
      this.$http.get(`http://localhost:3000/api/bebidas/${id}`)
        .then(respuesta => {
          this.$set(this, 'bebida', respuesta.body);
        });
    },
    editar() {
      const id = this.$route.params.id;
      this.$http.put(`http://localhost:3000/api/bebidas/${id}`, { bebida: this.bebida })
        .then(() => {
          this.$router.push({ path: '/bebidas' });
        });
    },
  },
};
