export default {
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
    crear() {
      this.$http.post('http://localhost:3000/api/bebidas/', { bebida: this.bebida })
        .then(() => {
          this.$router.push({ path: '/bebidas' });
        });
    },
  },
};
