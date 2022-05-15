<template>
  <div class="test">
    <h1>{{ msg }}</h1>
  </div>

  <hr />

  <p>input 元素：</p>
  <input v-model="message" placeholder="编辑我……" />
  <p>消息是: {{ message }}</p>

  <p>textarea 元素：</p>
  <p style="white-space: pre">{{ message2 }}</p>
  <textarea v-if="1 + 1 >= 2" v-model="message2" placeholder="多行文本输入……" />

  <hr />

  <p>单个复选框：</p>
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>

  <p>多个复选框：</p>
  <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames" />
  <label for="runoob">Runoob</label>
  <input type="checkbox" id="google" value="Google" v-model="checkedNames" />
  <label for="google">Google</label>
  <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames" />
  <label for="taobao">taobao</label>
  <br />
  <span>选择的值为: {{ checkedNames }}</span>

  <hr />

  <label>请选择背景色</label>
  <input type="color" value="choose color" id="myColor" />

  <hr />

  <p>原始字符串: {{ ori1 }}</p>
  <p>计算后反转字符串: {{ ori12 }}</p>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      message: "Runoob",
      message2: "菜鸟教程\r\nhttp://www.runoob.com",
      checked: false,
      checkedNames: [],
    };
  },
  computed: {
    ori1: "ori1O",
    ori2: "ori2O",
    reversedMessage2: function () {
      return this.message.split("").reverse().join("");
    },
  },
};
</script>
