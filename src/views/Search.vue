<template>
<div id="history">
  <mu-appbar style="width: 100%;position: sticky;top:0" color="primary">
    <mu-button icon slot="left" value="history">
      <mu-icon value="arrow_back_ios"></mu-icon>
    </mu-button>
    <center>Search</center>
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
  <img :src="foto?blobToSrc(foto.data):Img404">

  <!-- 答案区 -->
  <Collapse v-if="hasFoto" simple :value="[1,2,3,4,5,6]">
    <Panel name="1">
      Question
      <img :src="mockQua" slot="content"/>
    </Panel>

    <Panel name="2">
      Solution
      <div slot="content">
        <Carousel loop slot="content">
          <CarouselItem>
            <div class="demo-carousel">
              <img :src="mockSol1">
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              <img :src="mockSol2">
            </div>
            <Rate allow-half />
          </CarouselItem>
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
        <Button Icon="md-arrow-back" type="info">Collection</Button>
        <Button Icon="md-warning" type="warning">Report</Button>
        <Button Icon="md-create" type="success">More Exercises</Button>
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
import mockSol1 from '../assets/mock_sol1.jpg'
import mockSol2 from '../assets/mock_sol2.jpg'

export default {
  data() {
    return {
      fotoIndex: 0,
      Img404: Img404,
      mockQua:mockQua,
      mockSol1:mockSol1,
      mockSol2:mockSol2,
    }
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
      })
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
    InputTag,
  }
}
</script>


<style scoped>
img {
  object-fit: fill;
  width: 100%;
  border-radius: 8px;
  max-height: 200px;
}

#history >>> .vue-input-tag-wrapper {
  border: 0;
}

div {
  text-align: left;
}

iframe{
  width: 100%;

}

.buttonSet{
  text-align: right;
}
.buttonSet >>> buttion{
  margin-left: 8px; 
}
</style>
