<template>
  <div class="current-user">
    <span>
      <p>{{ user.firstName }}</p>
      <slot v-bind:user="user">
        {{ user.lastName }}
      </slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "CurrentUser",
  props: {
    user: {
      type: Object,
      default: function () {
        return { firstName: "zhang", lastName: "san" };
      },
    },
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      //   user: {
      //     firstName: "zhang",
      //     lastName: "san",
      //     age: 21,
      //   },
    };
  },
  mounted() {
    console.log("user: " + JSON.stringify(this.user));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
