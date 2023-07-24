const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Lära mig Vue.js",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Learn Vue!";
      } else {
        return "Master Vue!";
      }
    },
  },
});

app.mount("#user-goal");
