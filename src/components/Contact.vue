<template>
  <div class="bg">
    <div class="hero">
      <div class="container">
        <h1 class="title">Contact Us</h1>
        <el-row type="flex" justify="center " :gutter="10">
          <div class="form">
            <p>E-MAIL Address 1: 1013702057@qq.com</p>
            <p>E-MAIL Address 2: 1013702057zs@gmail.com</p>
            <p>PHONE NUMBER: +353 830657732 (Ireland)</p>
          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
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
    margin-top: 70px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
