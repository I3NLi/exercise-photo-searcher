<template>
<div id="history">
  <mu-appbar style="width: 100%;position: sticky;top:0" color="primary">
    <mu-button icon slot="left" value="history">
      <mu-icon value="arrow_back_ios"></mu-icon>
    </mu-button>
    <center>Explanation</center>
    <mu-menu slot="right">
      <mu-button icon>
        <mu-icon value="menu" :size="32"></mu-icon>
      </mu-button>
      <mu-list slot="content">
        <mu-list-item button>
          <mu-list-item-content>
            <mu-list-item-title>Management</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
    </mu-menu>
  </mu-appbar>

  <!-- 原题 -->
  <img :src="foto?blobToSrc(foto.data):Img404" class="TImg">

  <!-- 答案区 -->
  <Collapse v-if="hasFoto" simple :value="[1,2,3,4,5,6]">
    <Panel name="1">
      Explanation
      <!-- <img :src="mockQua" slot="content"/> -->
      <p slot="content">Let D = {z€C: |z|&lt;1} be the complex unit disc and let 0 &lt; a &lt; 1 real number. Suppose that f : D -&gt; C is a holomorphic function such that f(a) = 1 and f(-a) = -1.
        (a) Prove that
        sup |f(z)| &gt;= 1/a.
        z € D
        (b) Prove that if f has no root, then
        sup |f(z)| &gt;= exp((1-a^2)*pi/4a)
        z€D
      </p>
    </Panel>

    <Panel name="2">
      Solution
      <div slot="content">
        <Carousel loop slot="content">
          <CarouselItem>
            <div class="demo-carousel">
              <img :src="mockSol" class="CImg">
            </div>
          </CarouselItem>
          <!-- <CarouselItem>
            <div class="demo-carousel">
              <img :src="mockSol2">
            </div>
            <Rate allow-half />
          </CarouselItem> -->
        </Carousel>

        <Button shape="circle">Write a Solution</Button>
      </div>
    </Panel>

    <Panel name="4">
      Tutorial
      <Carousel loop slot="content">
        <CarouselItem>
          <div class="demo-carousel">
            <iframe src="https://www.youtube.com/embed/xTuMdiCZnYw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <Rate allow-half />
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <iframe src="https://www.youtube.com/embed/sqwVvJL3WTw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <Rate allow-half />
        </CarouselItem>
      </Carousel>
    </Panel>
    <Panel name="5">
      Discuss
      <div slot="content">
        <center>No data yet</center>
        <Button shape="circle">Start Discuss</Button>
      </div>
    </Panel>
    <Panel name="6">
      Notes
      <div slot="content">
        <center>No data yet</center>
        <Button shape="circle">Add Notes</Button>
      </div>
    </Panel>
    <Panel name="6">
      More
      <div slot="content" class="buttonSet">
        <br />
        <Button Icon="md-arrow-back" type="info" long>Collection</Button>
        <br />
        <Button Icon="md-warning" type="warning" long>Report</Button>
        <br />
        <Button Icon="md-create" type="success" long>More Exercises</Button>
        <br />
      </div>
    </Panel>
  </Collapse>

</div>
</template>

<script>
import InputTag from 'vue-input-tag';
import Img404 from '../assets/404.png';
import {
  marked
} from 'marked';

import mockQua from '../assets/mock_qua.jpg';
import mockSol from '../assets/mock_sol.jpg'
// import mockSol1 from '../assets/mock_sol1.jpg'
// import mockSol2 from '../assets/mock_sol2.jpg'

export default {
  data() {
    return {
      fotoIndex: 0,
      Img404: Img404,
      mockQua: mockQua,
      // mockSol1:mockSol1,
      // mockSol2:mockSol2,
      mockSol: mockSol,
    };
  },
  mounted() {
    // this.getMedia();
  },
  methods: {
    blobToSrc(blob) {
      return window.URL.createObjectURL(blob);
    },
    removeTag(tags, tag) {
      const index = tags.indexOf(tag);
      tags.splice(index, 1);
    },
    addTag(tags) {
      if (tags.length) {
        tags.push(tags[tags.length - 1] + 1);
      } else {
        tags.push(0);
      }
    },
    compiledMarkdown: function() {
      return marked(this.input, {
        sanitize: true
      });
    }
  },
  computed: {
    hasFoto() {
      return this.fotos.length > 0;
    },
    foto() {
      return this.fotos[this.fotoIndex];
    },
    fotos() {
      return this.$store.state.fotos;
    }
  },
  components: {
    // InputTag,
  }
}
</script>


<style scoped>
.TImg {
  object-fit: fill;
  width: 100%;
  border-radius: 8px;
  max-height: 200px;
}

.CImg {
  width: 100%;
}

#history>>>.vue-input-tag-wrapper {
  border: 0;
}

div {
  text-align: left;
}

iframe {
  width: 100%;

}

.buttonSet>>>buttion {
  margin-top: 8px;
}
</style>
