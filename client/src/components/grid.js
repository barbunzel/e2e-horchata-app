export default {
  created() {
    this.cargarBebidas();
  },
  data() {
    return {
      bebidas: [],
    };
  },
  methods: {
    cargarBebidas() {
      this.$http.get('http://localhost:3000/api/bebidas')
        .then(respuesta => {
          this.$set(this, 'bebidas', respuesta.data);
        });
    },
    login() {
      this.$emit('login');
    },
    borrar(id) {
      this.$http.delete(`http://localhost:3000/api/bebidas/${id}`)
        .then(() => {
          this.cargarBebidas();
        });
    },
  },
};
