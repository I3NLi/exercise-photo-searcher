<template>
<div id="home" >
  <Modal id="camera-modal" v-model="isCameraOpen" fullscreen :closable="false" :mask-closable="false">
    <video v-show="!hasFoto" ref="video" style="width:100%;height:100%;object-fit:cover" autoplay="autoplay"></video>
    <canvas width=500 height=500 v-show="hasFoto" ref="canvas"></canvas>
    <div slot="footer" class="container">
      <div class="row align-items-end">
        <div class="col">
          <mu-button v-show="!hasFoto" flat>
            <mu-icon value="image"></mu-icon>
          </mu-button>
          <mu-button v-show="hasFoto" flat @click="openCamera()">
            <mu-icon value="replay"></mu-icon>
          </mu-button>
        </div>
        <div class="col">
          <mu-button v-if="!hasFoto" large fab color="indigo" @click="takePhoto()">
            <mu-icon value="photo_camera"></mu-icon>
          </mu-button>

          <mu-button v-if="hasFoto" large fab color="success" @click="uploadCroppe()">
            <mu-icon value="done"></mu-icon>
          </mu-button>
        </div>
        <div class="col">
          <mu-button flat @click="closeModal">
            <mu-icon value="clear"></mu-icon>
          </mu-button>
        </div>
      </div>
    </div>
  </Modal>

  <div class="row align-items-center backplane">
    <Button type="info" shape="circle" icon="ios-person" style="position: absolute;  top: 5em;">sign up</Button>
    <div class="col-12">
      <mu-button large fab color="indigo" @click="openCamera">
        <mu-icon value="photo_camera"></mu-icon>
      </mu-button>
    </div>
  </div>

  <Card style="margin-top:-8px; border-radius: 10px;">
    <div slot="title" class="container">
      <div class="row">
        <div class="col-3">
          <Button type="info" shape="circle">AI</Button>
        </div>
        <div class="col-3">
          <Button type="success" shape="circle">ANA</Button>
        </div>
        <div class="col-3">
          <Button type="primary" shape="circle">ML</Button>
        </div>
        <div class="col-3">
          <Button type="warning" shape="circle">R</Button>
        </div>
      </div>

      <div class="row align-items-end">
        <div class="col-3">
          Artificial Intelligence
        </div>
        <div class="col-3">
          Analysis 3
        </div>
        <div class="col-3">
          Machine Learning
        </div>
        <div class="col-3">
          Robotics
        </div>
      </div>
    </div>

    <h5>New issues</h5>
    <hr/>
    <br/><br/><br/><br/>
    <hr/>
    <span>No More</span>
  </Card>
</div>
</template>

<script>
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

export default {
  data() {
    return {
      isCameraOpen: false,
      hasFoto: false,
      cropper: null,
    }
  },
  mounted() {
    // this.getMedia();
  },
  methods: {
    getMedia() {
      let constraints = {
        video: {
          width: window.innerWidth,
          height: window.innerHeight
        },
        audio: true
      };
      //获得video摄像头区域
      let video = this.$refs.video
      //这里介绍新的方法，返回一个 Promise对象
      // 这个Promise对象返回成功后的回调函数带一个 MediaStream 对象作为其参数
      // then()是Promise对象里的方法
      // then()方法是异步执行，当then()前的方法执行完后再执行then()内部的程序
      // 避免数据没有获取到
      let promise = navigator.mediaDevices.getUserMedia(constraints);
      promise.then(function(MediaStream) {
        video.srcObject = MediaStream;
        video.play();
      });
    },
    closeCamera() {
      let video = this.$refs.video;
      video.srcObject.getTracks().forEach(function(track) {
        track.stop();
      });
    },
    takePhoto() {
      //获得Canvas对象
      let video = this.$refs.video;
      let canvas = this.$refs.canvas;
      video.width = canvas.width = window.innerWidth;
      video.height = canvas.height = window.innerHeight;
      // canvas.width=video.width;
      // canvas.height=video.height;
      let ctx = canvas.getContext('2d');
      if (this.cropper != null) {
        this.cropper.destroy();
        this.cropper = null;
      }
      ctx.drawImage(video, 0, 0,video.width,video.height);
      this.hasFoto = true;
      this.closeCamera();
      this.initCroppe();
    },
    openCamera() {
      this.isCameraOpen = true;
      this.hasFoto = false;
      this.getMedia();
    },
    initCroppe() {
      let image = this.$refs.canvas;
      this.cropper = new Cropper(image, {
        // aspectRatio: 16 / 9,
        // dragMode:'crop',
        viewMode: 1,
        // crop(event) {
        //   console.log(event.detail.x);
        //   console.log(event.detail.y);
        //   console.log(event.detail.width);
        //   console.log(event.detail.height);
        //   console.log(event.detail.rotate);
        //   console.log(event.detail.scaleX);
        //   console.log(event.detail.scaleY);
        // },
      });
      this.cropper.crop();
    },
    uploadCroppe() {
      this.cropper.getCroppedCanvas().toBlob((blob) => {
        this.$store.commit('pushFoto', blob)
      });
      this.$router.push({
        path: "/search",
      });
    },
    closeModal() {
      this.isCameraOpen = false;
      this.closeCamera();
    }

  }
}
</script>


<style scoped>
#camera-modal>>>.ivu-modal-body {
  padding: 0;
}

#camera-modal>>>.ivu-modal-footer {
  border: 0;
}

canvas {
  width: 100%;
  max-width: 100%;
}

.backplane {
  height: 60vh;
  background: cornflowerblue;
}
</style>
