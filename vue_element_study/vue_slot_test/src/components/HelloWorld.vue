<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="submit-button">
      <h2>插槽 submit button </h2>
      <submit-button>Save</submit-button>
      <h2>具名插槽</h2>
      <div id='base-layout'>
        <base-layout>
          <template v-slot:header>
            <h1>Here might be a page title</h1>
          </template>

          <template v-slot:default>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
          </template>

          <template v-slot:footer>
            <p>Here's some contact info</p>
          </template>
        </base-layout>
      </div>
      <div>
        <h2>作用域插槽</h2>
        <base-layout>
          <template slot="header">
            <h1>Here might be a page title</h1>
          </template>

          <p>A paragraph for the main content.</p>
          <p>And another one.</p>

          <template slot="footer">
            <p>Here's some contact info</p>
          </template>
        </base-layout>
      </div>
      <p>当前用户: </p>
      <current-user></current-user>
      <div>
        <h2>动态组件 & 异步组件</h2>
        <p>异步组件例子</p>
        <async-example></async-example>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import CurrentUser from "./CurrentUser.vue";
export default {
  name: "HelloWorld",
  components: {
    CurrentUser,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
Vue.component("submit-button", {
  template: `
    <button type="submit"><slot>Submit</slot></button>
    `,
});
new Vue({
  el: "submit-button",
});
Vue.component("base-layout", {
  template: `
   <div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>`,
});
new Vue({
  el: "base-layout",
});
Vue.component("async-example", function (resolve, reject) {
  setTimeout(function () {
    // 向 `resolve` 回调传递组件定义
    resolve({
      template: "<div>I am async!</div>",
    });
  }, 1000);
});
new Vue({
  el: "async-example",
});
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
