<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
     <router-link to="/input">Go to Input</router-link>
      <router-link to="/cascader">Go to Cascader</router-link>
    <p>vue elementUI 学习测试</p>
    <div class="list-render">
      <p>列表渲染</p>
      <ul id="example-1">
        <li
          v-for="(user, index) of users"
          :key="user.id"
        >
          {{ index }}: {{ user.name }}
        </li>
      </ul>
      <ul
        id="v-for-object"
        class="demo"
      >
        <li v-for="value in object">
          {{ value }}
        </li>
      </ul>
      <p>键名</p>
      <div v-for="(value, name) in object">{{ name }}: {{ value }}</div>
      <p>值，键名，下标</p>
      <div v-for="(value, name, index) in object">
        {{ index }}. {{ name }}: {{ value }}
      </div>
      <p>显示过滤/排序后的结果</p>
      <div>
        <ul v-for="n in evenNumbers">
          <li>{{ n }}</li>
        </ul>
        <p>
          在计算属性不适用的情况下 (例如，在嵌套 v-for 循环中)
          你可以使用一个方法：
        </p>
        <ul v-for="set in sets">
          <li v-for="n in even(set)">{{ n }}</li>
        </ul>
        <p>在 v-for 里面使用值范围</p>
        <ul v-for="n in 10">
          <li>v-for num is {{ n }}</li>
        </ul>
        <p>在template上使用v-for</p>
        <ul>
          <template v-for="user in users">
            <ul>
              <li>userid:{{ user.id }}</li>
              <li>姓名: {{ user.name }}</li>
              <li>年龄:{{ user.age }}</li>
              <li>性别: {{ user.sex }}</li>
            </ul>
          </template>
        </ul>
      </div>
    </div>
    <div class="event-binding">
      <p>事件绑定</p>
      <p>v-on监听dom事件</p>
      <div id="example-1">
        <button v-on:click="counter += 1">Add 1</button>
        <p>The button above has been clicked {{ counter }} times.</p>
      </div>
      <p>事件处理方法</p>
      <div id="example-2">
        <!-- `greet` 是在下面定义的方法名 -->
        <button v-on:click="greet">Greet</button>
      </div>
      <p>内联处理器中的方法</p>
      <div id="example-3">
        <button v-on:click="say('hi')">Say hi</button>
        <button v-on:click="say('what')">Say what</button>
        <p>原始 dom</p>
      </div>
    </div>
    <div class="form-binding">
      <h2>表单输入绑定</h2><br>
      <input
        v-model="message"
        placeholder="edit me"
      >
      <p>Message is: {{ message }}</p>
      <span>Multiline message is:</span>
      <p style="white-space: pre-line;">{{ message }}</p>
      <br>
      <textarea
        v-model="message"
        placeholder="add multiple lines"
      ></textarea>
      <h3>复选框</h3>
      <input
        type="checkbox"
        id="checkbox"
        v-model="checked"
      ><br>
      <label for="checkbox">{{ checked }}</label><br>
      <input
        type="checkbox"
        id="jack"
        value="Jack"
        v-model="checkedNames"
      >
      <label for="jack">Jack</label>
      <input
        type="checkbox"
        id="john"
        value="John"
        v-model="checkedNames"
      >
      <label for="john">John</label>
      <input
        type="checkbox"
        id="mike"
        value="Mike"
        v-model="checkedNames"
      >
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
      <div id="example-4">
        <input
          type="radio"
          id="one"
          value="One"
          v-model="picked"
        >
        <label for="one">One</label>
        <br>
        <input
          type="radio"
          id="two"
          value="Two"
          v-model="picked"
        >
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>
      </div>
      <div id="example-5">
        <select v-model="selected">
          <option
            disabled
            value=""
          >请选择</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <span>Selected: {{ selected }}</span>
      </div>
      <div id="example-6">
        <select
          v-model="selected"
          multiple
          style="width: 50px;"
        >
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <br>
        <span>Selected: {{ selected }}</span>
      </div>
      <p>v-for渲染的动态选项</p>
      <select v-model="selected">
        <option
          v-for="option in options"
          v-bind:value="option.value"
        >
          {{ option.text }}
        </option>
      </select>
      <span>Selected: {{ selected }}</span>
      <div>
        <p>值绑定</p>
        <!-- 当选中时，`picked` 为字符串 "a" -->
        <input
          type="radio"
          v-model="picked"
          value="a"
        >

        <!-- `toggle` 为 true 或 false -->
        <input
          type="checkbox"
          v-model="toggle"
        >

        <!-- 当选中第一个选项时，`selected` 为字符串 "abc" -->
        <select v-model="selected">
          <option value="abc">ABC</option>
        </select>
        <p>复选框</p>
        <input
          type="checkbox"
          v-model="toggle"
          true-value="yes"
          false-value="no"
        >
        <p>toggle:{{toggle}}</p>
        <p>单选按钮</p>
        <input
          type="radio"
          v-model="pick"
          v-bind:value="a"
        >
        <p>选择框的选项</p>
        <select v-model="selected">
          <!-- 内联对象字面量 -->
          <option v-bind:value="{ number: 123 }">123</option>
          <option v-bind:value="{ number: 456 }">456</option>
          <option v-bind:value="{ number: 789 }">789</option>
          <option v-bind:value="{ number: 101112 }">101112</option>
        </select>
        <p>修饰符</p>
        请输入信息:&nbsp;&nbsp;<input v-model.lazy="msg"><span>{{ msg }}</span>
        <p>自动转换输入类型为number:</p>
        请输入年龄:&nbsp;&nbsp;<input
          v-model.number="age"
          type="number"
        >
        <p>{{age}}</p>
        <p>过滤输入的收尾空白字符</p>
        输入信息:&nbsp;&nbsp;<input v-model="msg">
      </div>
    </div><br>
    <div class="basic-component">
      <div id="components-demo">
        <button-counter></button-counter>
        <button-counter></button-counter>
        <button-counter></button-counter>
        <button-counter></button-counter>
      </div>
      <p>props 传值</p>
      <div class="blog">
        <p>博文组件</p>
        <blog-post title="My journey with Vue"></blog-post>
        <blog-post title="Blogging with Vue"></blog-post>
        <blog-post title="Why Vue is so fun"></blog-post>
      </div>
      <div id="blog-post-demo">
        <p>blog-post接受单独的post prop</p>
        <blog-post
          v-for="post in posts"
          v-bind:key="post.id"
          v-bind:post="post"
        ></blog-post>
      </div>
      <div>
        <h1>监听子组件事件</h1>
        <div id="blog-posts-events-demo">
          <div :style="{ fontSize: postFontSize + 'em' }">
            <blog-post
              v-for="post in posts"
              v-bind:key="post.id"
              v-bind:post="post"
              v-on:small-text="postFontSize -= 0.1"
              v-on:enlarge-text="postFontSize += 0.1"
            ></blog-post>
          </div>
        </div>
      </div>
      <div>
        <h1>使用事件抛出一个值</h1>
        <div id="blog-posts-events-demo">
          <div :style="{ fontSize: postFontSize + 'em' }">
            <blog-post
              v-for="post in posts"
              v-bind:key="post.id"
              v-bind:post="post"
              v-on:small-text="postFontSize -= 0.1"
              v-on:enlarge-text="onEnlargeText"
            ></blog-post>
          </div>
        </div>
      </div>
      <div>
        <p>在组件上使用v-model</p>
        请输入用户名:&nbsp;&nbsp;<input v-model="username">
        <p>你输入的用户名是: {{username}}</p><br>
        搜索文本
        <input
          v-bind:value="searchText"
          v-on:input="searchText = $event.target.value"
        >
        <p>searchText: {{searchText}}</p>
      </div>
      <div>
        <p>custom input </p>
        <custom-input v-model="searchText"></custom-input>
      </div>
      <div>
        <p>通过插槽分发内容</p>
        alert box : <alert-box></alert-box>
      </div>
      <div>
        <p>组件注册</p>
        请输入用户名: &nbsp;&nbsp;&nbsp;<Input></Input>
      </div>

      <div>
        <h1>prop</h1>
        <blog-post-prop post-title="prop组件传值"></blog-post-prop>
      </div>
      <div>
        <h1>单向数据流</h1>
        <div id="simgle-data-flow">
          <single-data-flow></single-data-flow>
        </div>
      </div>
      <div>
        <h3>替换/合并已有的 Attribute </h3>
        请选择日期: <el-input type="time"></el-input>
      </div>
      <div>
        <p>prop property </p>
        <prop-property></prop-property>
      </div>
      <div>
        <h2>禁用 attribute 继承</h2>
        <base-input2
          v-model="username"
          required
          placeholder="Enter your username"
        ></base-input2>
        <h3>username:{{username}}</h3>
      </div>
    </div>
    <div>
      <h2>自定义事件</h2>
      <p>不同于组件和 prop，事件名不存在任何自动化的大小写转换,因此推荐用 kebab-case 铭铭事件</p>
      <p>自定义组件的 v-model</p>
      <base-checkbox v-model="lovingVue"></base-checkbox>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Input from "./Input";
export default {
  name: "HelloWorld",
  components: {
    Input,
  },
  data() {
    return {
      msg: "欢迎学习vue ~",
      message: "",
      searchText: "",
      username: "",
      pick: "",
      age: 0,
      checked: 0,
      selected: [],
      picked: "",
      a: "",
      checkedNames: [],
      counter: 0,
      toggle: "this is toggle",
      numbers: [1, 2, 3, 4, 5],
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
      users: [
        { id: 1, name: "张三", age: 12, sex: "male" },
        { id: 2, name: "李四", age: 32, sex: "female" },
        { id: 3, name: "王五", age: 76, sex: "male" },
        { id: 4, name: "赵六", age: 36, sex: "female" },
        { id: 5, name: "王五", age: 58, sex: "male" },
      ],
      object: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
      posts: [
        {
          id: 1,
          content: "this is first con",
          title: "My journey with Vue",
          post_time: new Date(),
          postFontSize: 1,
        },
        {
          id: 2,
          content: "this is second con",
          title: "Blogging with Vue",
          post_time: new Date(),
          postFontSize: 2,
        },
        {
          id: 3,
          content: "this is third con",
          title: "Why Vue is so fun",
          post_time: new Date(),
          postFontSize: 3,
        },
      ],
      postFontSize: 1,
    };
  },
  methods: {
    test(params) {
      console.log("test vue function");
    },
    warn: function (message, event) {
      // 现在我们可以访问原生事件对象
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },
    say: function (message) {
      alert(message);
    },
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert("Hello " + this.name + "!");
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName);
      }
    },
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0;
      });
    },
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount;
      console.log("enlargeAmount: " + enlargeAmount);
    },
  },
  watch: {
    selected() {
      alert("selected: " + JSON.stringify(this.selected));
    },
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0;
      });
    },
  },
};
// 定义一个名为 button-counter 的新组件
Vue.component("button-counter", {
  data: function () {
    return {
      count: 0,
    };
  },
  template:
    '<button v-on:click="count++">You clicked me {{ count }} times.</button>',
});
new Vue({
  el: "#components-demo",
});
Vue.component("blog-post", {
  props: ["post"],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text')">
        Enlarge text
      </button>
      <button v-on:click="$emit('small-text')">Smaller text
      </button>
      <button v-on:click="$emit('enlarge-text',0.1)">使用事件跑出一个值
      </button>
      <div v-html="post.content"></div>
    </div>`,
});
new Vue({
  el: "#blog-post-demo",
  data: {
    posts: [
      { id: 1, title: "My journey with Vue" },
      { id: 2, title: "Blogging with Vue" },
      { id: 3, title: "Why Vue is so fun" },
    ],
  },
});
new Vue({
  el: "#blog-posts-events-demo",
  data: {
    posts: [
      { id: 1, title: "My journey with Vue" },
      { id: 2, title: "Blogging with Vue" },
      { id: 3, title: "Why Vue is so fun" },
    ],
    postFontSize: 2,
  },
});
Vue.component("custom-input", {
  props: ["value"],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `,
});
new Vue({
  el: "#custom-input-demo",
});
Vue.component("alert-box", {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `,
});
new Vue({
  el: "#alert-box-demo",
});
Vue.component("blog-post-prop", {
  // 在 JavaScript 中是 camelCase 的
  props: ["postTitle"],
  template: "<h3>{{ postTitle }}</h3>",
});
new Vue({
  el: "blog-post-prop",
});
Vue.component("single-data-flow", {
  // 在 JavaScript 中是 camelCase 的
  props: {
    propA: Number,
    PropB: [String, Number],
    PropC: {
      type: String,
      required: true,
    },
    PropD: {
      type: Number,
      default: 100,
    },
    PropE: {
      type: Object,
      default: function () {
        return { message: "hello" };
      },
    },
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ["success", "warning", "danger"].indexOf(value) !== -1;
      },
    },
  },
  inherAttrs: false,
  template:
    '<button v-on:click="counter += 1">You have clicked {{ counter }} times .</button>',
  data: function () {
    return {
      counter: 0,
    };
  },
});
new Vue({
  el: "single-data-flow",
});
Vue.component("prop-property", {
  props: ["post"],
  template: '<el-input v-bind="post"></el-input>',
  data: function () {
    return {
      post: {
        id: 1,
        value: "My Journey with Vue",
      },
    };
  },
});
new Vue({ el: "prop-property" });
Vue.component("base-input2", {
  inheritAttrs: false,
  props: ["label", "value"],
  template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    </label>
  `,
});
new Vue({ el: "base-input2" });
Vue.component("base-checkbox", {
  model: {
    prop: ["checked", "lovingVue", "value"],
    event: "change",
  },
  props: {
    checked: Boolean,
  },
  template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners"
      >
    </label>
  `,
  computed: {
    inputListeners: function () {
      var vm = this;
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign(
        {},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function (event) {
            vm.$emit("input", event.target.value);
          },
        }
      );
    },
  },
});
new Vue({
  el: "base-checkbox",
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
