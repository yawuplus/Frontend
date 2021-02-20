<template>
  <div class="hello">
    <el-form>
        这里输入文字:
      <el-input type="text"
                v-model="inputText">输入框
      </el-input>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Input",
  props:['inputtext'],
  data ()
  {
    return {
      inputText: '请在这里输入文本，谢谢',
    };
  },
  methods: {
    test ( params )
    {
      console.log( "test vue function" );
    },

  },
  watch: {

  },
  computed: {

  }
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
