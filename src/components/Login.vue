<template>
    <div class="bg">
      <div id="app" class="hero">
        <div class="container">
          <h1 class="title">User Login</h1>
          <el-row type="flex" justify="center " :gutter="10">
            <div class="form">
              <el-form ref="loginForm" :model="user" :rules="rules" status-icon label-width="80px">
                <el-form-item label="username" prop="name">
                  <el-input v-model="user.name"></el-input>
                </el-form-item>
                <el-form-item label="password" prop="pass">
                  <el-input v-model="user.pass" type="password"></el-input>
                </el-form-item>
                <div class="button">
                  <el-button type="primary" icon="el-icon-upload" @click="login">Log in</el-button>
                  <el-button type="primary" icon="el-icon-upload" @click="register">Sign up</el-button>
                </div>
              </el-form>
            </div>
          </el-row>
        </div>
    </div>
    </div>
</template>

<script>
import IssueService from '@/services/IssueService'
import cookies from 'js-cookie'

export default {
  name: 'Login',
  data () {
    return {
      user: {},
      rules: {
        name: [
          {required: true, message: 'User name can not be empty!', trigger: 'blur'}
        ],
        pass: [
          {required: true, message: 'Password cannot be empty!', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          IssueService.validate(this.user.name, this.user.pass).then((res) => {
            console.log(res.data.name)
            console.log(this.user)
            if (res.data.hasOwnProperty('name') === true) {
              this.$notify({
                type: 'success',
                message: 'Welcome,' + this.user.name + '!',
                duration: 3000
              })
              // this.$router.replace('/')
              cookies.set('user', res.data.name)
              this.$router.push('/')
            } else {
              this.$message({
                type: 'error',
                message: 'Invalid username or password!',
                showClose: true
              })
            }
          })
        }
      })
    },
    register () {
      this.$router.push({path: '/register'})
    }
  }
}

</script>

<style scoped>
  .bg {
    height:100%;
    width:100%;
    position:absolute;
    background-image: url("../assets/4.png");;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .hero {
    width:400px;
    height: 400px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    text-align: center;
    background:rgba(0, 0, 0, 0.6);
    border-radius:25px;
  }
  .container {
    margin-top: 30%;
  }
  .form {
    align-items: center;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
  }
  .title {
    font-family: 'Courier New',serif;
    text-align: center;
    margin-top: auto;
    font-weight: 600;
    font-size: 40pt;
  }
  .button {
    margin-left: auto;
    margin-right: auto;
  }
</style>
