import Login from './components/login.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  components: {
    Login,
  },
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    login() {
      this.$set(this, 'loggedIn', true);
      this.$router.push({ path: '/bebidas' });
    },
    logout() {
      this.$set(this, 'loggedIn', false);
      this.$router.push({ path: '/' });
    }
  },
};
