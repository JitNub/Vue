const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Slutföra kursen och lära mig Vue!",
      courseGoalB: "Bemästra Vue och bygga fantastiska appar!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
