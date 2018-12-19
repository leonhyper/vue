<template>
  <div class="bg">
    <div id="app" class="hero">
      <div class="container">
          <h1 class="title">Current User</h1>
        <el-row type="flex" justify="center " :gutter="10">
          <div class="form">
            <table align="center">
              <tr>
                User: <input name="username" v-model="username" style="width:100px;border:0px" type="text" readonly="true"/>
              </tr>
            </table>
            <p></p>
            <div class="button">
              <el-button type="primary" icon="el-icon-upload" @click="logout">Log out</el-button>
            </div>
          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import cookies from 'js-cookie'
export default {
  name: 'Logout',
  data () {
    var user = typeof (cookies.get('user'))
    var text = cookies.get('user')
    if (user !== 'undefined') {
      text = cookies.get('user')
    } else {
      text = 'No user'
    }
    return {
      username: text
    }
  },
  methods: {
    logout () {
      this.$confirm('Do you want to log out?', 'NOTICE', {
        confirmButtonText: 'OK',
        cancelButtonText: 'CANCEL',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'See you next time,' + cookies.get('user') + '!'
        })
        cookies.remove('user')
        this.$router.push({path: '/login'})
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'operation canceled'
        })
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
    background:rgba(0, 0, 0, 0.6);
    border-radius:25px;
  }
  .container {
    margin-top: 30%;
  }
  .form {
    align-items: center;
    margin-top: 30px;
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
    margin-top: 60px;
  }
</style>
