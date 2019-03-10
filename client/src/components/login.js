export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    credencialesValidas: function () {
      return this.username && this.password;
    },
  },
  methods: {
    login() {
      this.$emit('login');
    },
  },
};
