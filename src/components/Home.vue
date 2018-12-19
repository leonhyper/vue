<template>
  <div class="bg">
    <div class="hero">
      <h1 class="vue-title">We Handle Your Problems !!</h1>
      <div class="tb">
        <table align="center">
          <tr>
            <td>
              <p class="lead"><b style="color:white"><i>Is there anything bothering you?</i></b>
              <p class="sub">You no more have to face your trouble alone!!</p>
              <p class="sub">Tell aloud about your worries to us!!</p>
            </td>
            <td>
              <img src="../assets/2.png" width="300px" height="300px" alt="description here"/>
            </td>
          </tr>
        </table>
      </div>
      <p></p>
      <p class="lead">Share your problems and get them <b style="font-family:arial;color:red">SOLVED</b> !</p>
    </div>
  </div>
</template>

<style>
  .bg {
    background-image: url("../assets/4.png");
    background-size: cover;
    background-repeat: no-repeat;
  }
  .tb {
    background:rgba(255, 255, 255, 0.7);/*实现FF背景透明，文字不透明*/
    width:55%;
    align-items: center;
    text-align: center;
    margin:0 auto
  }
  .hero {
    height: 100vh;
    margin-top: 0px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 2.5rem;
  }
  .hero .sub {
    font-weight: 200;
    font-size: 1.5rem;
    color: #ff25bb;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    font-size: 70pt;
    margin-bottom: 10px;
  }
</style>
