<template>
  <div>
    <p id="welcome">欢迎登录</p>
    <form v-if="!isReg" class="login">
      <div>
        <label>用户名：</label>
        <input type="text" v-model="name" />
      </div>
      <div>
        <label>密码：</label>
        <input type="password" v-model="password" />
      </div>
      
      <div>
        <button type="button" @click="login()">登录</button>
        <button type="button" @click="reg()">注册</button>
      </div>
    </form>
    <form v-else class="login">
      <div>
        <label>用户名：</label>
        <input type="text" v-model="name" />
      </div>
      <div>
        <label>密码：</label>
        <input type="password" v-model="password" />
      </div>
      <div>
        <label>确认密码：</label>
        <input type="password" v-model="rePassword" />
      </div>
      <div>
        <button type="button" @click="addUser()">确定</button>
        <button type="button" @click="reLogin()">取消</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      isReg: false,
      name: "",
      password: "",
      rePassword: ""
    };
  },
  methods: {
    login() {
      if (
        this.name === localStorage.getItem("name") &&
        this.password === localStorage.getItem("password")
      ) {
        this.name = "";
        this.password = "";
        this.$router.push("/home/list"); //路由来到首页的列表子路由
      } else{
          alert("用户名或密码输入错误！");
          this.password='';
      } 
    },
    reg() {
      this.isReg = true;
    },
    addUser() {
      if (!(this.password === this.rePassword)) {
        alert("两次输入的密码不一致，请重新输入！");
        this.password = "";
        this.rePassword = "";
        return;
      }
      localStorage.setItem("name", this.name);
      localStorage.setItem("password", this.password);
      alert("注册成功！");
      this.isReg = false;
    },
    reLogin() {
      this.isReg = false;
    }
  }
};
</script>

<style>
#welcome{
  margin:30px 30px 30px 30px;
  font-size:18px;
}
.login{
  margin:0 30px 0 30px;
  font-size:16px;
}
.login label{
  display: inline-block;
  width:80px;
  text-align: right;

}
</style>