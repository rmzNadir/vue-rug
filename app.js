const app = Vue.createApp({
  data: () => ({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    gender: 'male',
    picture: 'https://randomuser.me/api/portraits/men/10.jpg',
  }),
  methods: {
    // "this" works different in arrow functions, in this case "this" means the "methods" object.
    async getUser() {
      const res = await fetch('https://randomuser.me/api');

      const { results } = await res.json();

      const {
        name: { first, last },
        email,
        gender,
        picture: { large },
      } = results[0];

      this.firstName = first;
      this.lastName = last;
      this.email = email;
      this.gender = gender;
      this.picture = large;
    },
  },
});

app.mount('#app');
