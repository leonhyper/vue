<template>
<div class="bg">
  <div class="hero">
    <div class="container">
      <h1 class="title">Sign Up</h1>
      <h1 class="line">Join our family!</h1>
      <el-row type="flex" justify="center " :gutter="10">
        <div class="form">
          <el-form ref="registerForm" :model="newuser" :rules="rules" status-icon label-width="80px">
            <el-form-item label="username" prop="name">
              <el-input v-model="newuser.name"></el-input>
            </el-form-item>
            <el-form-item label="password" prop="pass">
              <el-input v-model="newuser.pass" type="password"></el-input>
            </el-form-item>
            <el-form-item label="confirm" prop="confirm">
              <el-input v-model="newuser.confirm" type="password"></el-input>
            </el-form-item>
            <div class="button">
              <el-button type="primary" icon="el-icon-upload" @click="submit">submit</el-button>
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
export default {
  name: 'Register',
  data () {
    var validateConfirm = (rule, value, callback) => {
      if (value === this.newuser.pass) {
        callback()
      } else {
        callback(new Error('Password is not consistent!'))
      }
    }
    var validateName = (rule, value, callback) => {
      IssueService.validateName(value).then((res) => {
        if (res.data.hasOwnProperty('name') !== true) {
          callback()
        } else {
          callback(new Error('Name already exist!'))
        }
      })
    }
    return {
      newuser: {},
      rules: {
        name: [
          {required: true, message: 'User name can not be empty!', trigger: 'blur'},
          {pattern: /^[A-Za-z0-9]/, message: 'Only number or letters allowed!', trigger: 'blur'},
          {min: 3, max: 20, message: 'Length at least 3 and at most 20', trigger: 'blur'},
          {validator: validateName, trigger: 'blur'}
        ],
        pass: [
          {required: true, message: 'Password cannot be empty!', trigger: 'blur'},
          {pattern: /^[A-Za-z0-9]/, message: 'Only number or letters allowed!', trigger: 'blur'},
          {min: 6, max: 20, message: 'Length at least 6 and at most 20', trigger: 'blur'}
        ],
        confirm: [
          {required: true, message: 'Please enter the password again!', trigger: 'blur'},
          {validator: validateConfirm, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submit () {
      IssueService.validateName(this.newuser.name).then((res) => {
        if (res.data.hasOwnProperty('name') !== true) {
          this.$refs.registerForm.validate((valid) => {
            console.log(valid)
            if (valid) {
              var user = {
                name: this.newuser.name,
                pass: this.newuser.pass
              }
              IssueService.register(user)
                .then(response => {
                  // JSON responses are automatically parsed.
                  console.log(response)
                  this.$notify({
                    type: 'success',
                    message: 'Successfully signed up! Welcome to join us,' + this.newuser.name + '!',
                    duration: 3000
                  })
                  this.$router.push({path: '/login'})
                })
                .catch(error => {
                  this.errors.push(error)
                  console.log(error)
                  this.$message(error)
                })
            } else {
              this.$message({
                type: 'error',
                message: 'Please check your input!',
                showClose: true
              })
            }
          })
        } else {
          this.$message({
            type: 'error',
            message: 'Please change an username!',
            showClose: true
          })
        }
      })
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
    background:rgba(255, 255, 255, 0.9);
    border-radius:25px;
  }
  .container {
    margin-top: 30%;
  }
  .form {
    align-items: center;
    margin-top: 15px;
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
  .line {
    text-align: center;
    margin-top: auto;
    font-weight: 400;
    font-size: 20pt;
  }
  .button {
    margin-left: auto;
    margin-right: auto;
  }
</style>
