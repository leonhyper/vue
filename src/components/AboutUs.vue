<template>
    <div>
      <div class="container">
        <header class="clearfix">
          <h1>About Us</h1>
          <h2>Here is Leon who built this web. I really don't know what to place in this page so I'll give a brief introduction about myself.</h2>
          <h3>I've got plenty of hobbies, one of which is drawing. As you see, all pictures used in this web App as background or illustrations are all painted by myself.</h3>
          <h4>So I want to put a gallery here to display my paintings just out of personal interest.</h4>
        </header>
        <div id="grid-gallery" class="grid-gallery">
          <section class="grid-wrap">
            <ul class="grid">
              <li class="grid-sizer"></li>
              <li>
                <figure @click="showDialog(0)">
                  <img src="static/3.png" alt="img01"/>
                  <figcaption><h4>Fairy Girl</h4><p>Painted as a gift to a girl.</p></figcaption>
                </figure>
              </li>
              <li>
                <figure @click="showDialog(1)">
                  <img src="static/5.png" alt="img02"/>
                  <figcaption><h4>EX</h4><p>A relationship with someone 5 years ago.</p></figcaption>
                </figure>
              </li>
              <li>
                <figure @click="showDialog(2)">
                  <img src="static/6.png" alt="img03"/>
                  <figcaption><h4>The unhappy three</h4><p>It is quit funny to notice that both Bago and Garfield have a complaining face.</p></figcaption>
                </figure>
              </li>
              <li>
                <figure @click="showDialog(3)">
                  <img src="static/7.png" alt="img04"/>
                  <figcaption><h4>Science Fiction</h4><p>I always love science fictions. This is a successful challenge on painting a girl from future.</p></figcaption>
                </figure>
              </li>
              <li>
                <figure @click="showDialog(4)">
                  <img src="static/8.png" alt="img05"/>
                  <figcaption><h4>Fashion in Sports</h4><p>Impressed by this sports suit when shopping online.</p></figcaption>
                </figure>
              </li>
              <li>
                <figure @click="showDialog(5)">
                  <img src="static/2.png" alt="img06"/>
                  <figcaption><h4>Sweet</h4><p>This one might be the one that satisfies me most.</p></figcaption>
                </figure>
              </li>
              <li>
                <figure @click="showDialog(6)">
                  <img src="static/11.png" alt="img07"/>
                  <figcaption><h4>Another Gift</h4><p>A gift to another girl as well.</p></figcaption>
                </figure>
              </li>
              <li>
                <figure @click="showDialog(7)">
                  <img src="static/12.png" alt="img08"/>
                  <figcaption><h4>Nero</h4><p>Emperor of Rome could be a young lady.</p></figcaption>
                </figure>
              </li>
              <li>
                <figure @click="showDialog(8)">
                  <img src="static/13.png" alt="img09"/>
                  <figcaption><h4>Milai</h4><p>My favourite heroine in animations.</p></figcaption>
                </figure>
              </li>
              <li>
                <figure @click="showDialog(9)">
                  <img src="static/14.png" alt="img10"/>
                  <figcaption><h4>Worrier</h4><p>A little unlike what in my imagination.</p></figcaption>
                </figure>
              </li>
              <li>
                <figure @click="showDialog(10)">
                  <img src="static/16.png" alt="img11"/>
                  <figcaption><h4>Alley</h4><p>Alley fulfilled with fantasy.</p></figcaption>
                </figure>
              </li>
              <li>
                <figure @click="showDialog(11)">
                  <img src="static/15.png" alt="img12"/>
                  <figcaption><h4>Spring Festival</h4><p>Celebrate the new year.</p></figcaption>
                </figure>
              </li>
            </ul>
          </section>
          <el-dialog
            :visible.sync="dialogVisible"
            width="60%">
            <div>
              <table>
                <figure>
                  <img :src="src" id="art">
                </figure>
              </table>
            </div>
          </el-dialog>
        </div>
      </div>
    </div>
</template>

<script >
export default {
  name: 'AboutUs',
  data () {
    return {
      dialogVisible: false,
      src: ''
    }
  },
  methods: {
    showDialog: function (n) {
      var img = ['static/3.png', 'static/5.png', 'static/6.png', 'static/7.png',
        'static/8.png', 'static/2.png', 'static/11.png', 'static/12.png',
        'static/13.png', 'static/14.png', 'static/16.png', 'static/15.png']
      // var img = ['"../assets/3.png"', '"../assets/5.png"', '"../assets/6.png"', '"../assets/7.png"',
      //   '"../assets/8.png"', '"../assets/2.png"', '"../assets/11.png"', '"../assets/12.png"',
      //   '"../assets/13.png"', '"../assets/14.png"', '"../assets/16.png"', '"../assets/15.png"']
      var s = img[n]
      this.dialogVisible = true
      // setTimeout(function () {
      //   console.log(s)
      //   document.getElementById('art').setAttribute('src', s)
      // }, 1000)
      // document.getElementById('art').setAttribute('src', s)
      this.src = s
    }
  }
}
</script>

<style scoped>
.art {
  width: 100%;
}
.container {
  font-family: 'fontawesome',fantasy;
  font-weight: normal;
  font-style: normal;
}
.grid-gallery ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.grid-gallery figure {
  margin: 0;
}

.grid-gallery figure img {
  display: block;
  width: 100%;
}

.grid-gallery figcaption h3 {
  margin: 0;
  padding: 0 0 0.5em;
}

.grid-gallery figcaption p {
  margin: 0;
}

/* Grid style */
.grid-wrap {
  max-width: 69em;
  margin: 0 auto;
  padding: 0 1em 1.875em;
}

.grid {
  margin: 0 auto;
}

.grid li {
  width: 25%;
  float: left;
  cursor: pointer;
}

.grid figure {
  padding: 15px;
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;
}

.grid li:hover figure {
  opacity: 0.7;
}

.grid figcaption {
  background: #e4e4e4;
  padding: 25px;
}
</style>
