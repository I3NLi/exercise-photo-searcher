<template>
<div id="history">
  <mu-appbar style="width: 100%;position: sticky;top:0" color="primary">
    <mu-button icon slot="left" value="history">
      <mu-icon value="arrow_back_ios"></mu-icon>
    </mu-button>
    <center>History</center>
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

  <mu-list>
    <mu-sub-header>Today</mu-sub-header>

    <mu-list-item v-if="fotos.length==0" button to="/">
      You don't have any search history, click here to start a new search.
    </mu-list-item>

    <mu-container>
      <mu-card style="width: 100%;  margin: 0 auto;margin-bottom:16px; border-radius: 8px;" v-for="(foto,index) in fotos" :ket="index">
        <mu-card-media :sub-title="foto.createAt.toString()">
          <img :src="blobToSrc(foto.data)" style="height:300px; width=100%; border-radius: 8px;">
        </mu-card-media>
        <!-- <mu-card-title title="Content Title" sub-title="Content Title"></mu-card-title> -->
        <div class="row align-items-center" style="padding:8px">
          <div class="col-10"  style="text-align:left;">
            <input-tag v-model="foto.tags"/>
            <!-- <Tag v-for="item in foto.tags" :key="item" :name="item" type="border" color="primary" @on-close="removeTag(foto.tags,item)">{{item}}</Tag>
            <Tag type="border" @click="addTag(foto.tags)">+ Add</Tag> -->
          </div>
          <div class="col-2" style="text-align:right; ">
            <Icon :size="26" v-show="!foto.star" type="md-star-outline" @click="foto.star=!foto.star" color="#ff9900"/>
            <Icon :size="26" v-show="foto.star" type="md-star" @click="foto.star=!foto.star" color="#ff9900"/>
          </div>
        </div>
      </mu-card>
    </mu-container>
  </mu-list>
  <hr/><hr/>
</div>
</template>

<script>
import InputTag from 'vue-input-tag';
export default {
  data() {
    return {

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
  },
  computed: {
    fotos() {
      return this.$store.state.fotos;
    }
  },
  components:{
    InputTag,
  }
}
</script>


<style scoped>
img {
  object-fit: cover;
}
#history >>>.vue-input-tag-wrapper{
  border: 0;
}
</style>
