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

  <h3 :v-if="typeof(foto)==undefined">no data</h3>

  <img :v-if="foto!=undefined" :src="blobToSrc(foto.data)" style="height:300px; width=100%; border-radius: 8px;">

  <div :v-if="foto!=undefined" class="container">
    <div class="row">
      <div class="col">
        <h3>Topic</h3>
      </div>
      <div class="col">
        <Page :total="3" :page-size="1" />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <h3>Answer</h3>
      </div>
      <div class="col">
        <Page :total="3" :page-size="1" />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <Button shape="circle">Write the answer</Button>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <h3>discuss</h3>

      </div>
      <div class="col">
        <Page :total="3" :page-size="1" />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <Button shape="circle">Write the discuss</Button>

      </div>
    </div>

    <div class="row">
      <div class="col">
        <h3>notes</h3>
      </div>
      <div class="col">
        <Page :total="3" :page-size="1" />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <Button shape="circle">add notes</Button>
      </div>
    </div>

  </div>
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
    foto() {
      console.log(this.$store.getters.getFoto(null));
      return this.$store.getters.getFoto(null);
    },

  },
  components: {
    InputTag,
  }
}
</script>


<style scoped>
img {
  object-fit: cover;
}

#history>>>.vue-input-tag-wrapper {
  border: 0;
}

div{
  text-align: left;
}
</style>
