<template>
<div id="home">
  <Modal id="camera-modal" v-model="isCameraOpen" fullscreen :closable="false" :mask-closable="false">

    <video v-show="!hasFoto" ref="video" style="width:100%;height:100%;object-fit:cover" autoplay="autoplay" playsinline></video>
    <canvas width=500 height=500 v-show="hasFoto" ref="canvas"></canvas>
    <input v-show="false" type="file" ref="CameraInput" accept="image/*">

    <div slot="footer" class="container">
      <div class="row align-items-end">
        <div class="col">
          <mu-button v-if="!hasFoto" flat>
            <mu-icon value="image"></mu-icon>
          </mu-button>
          <mu-button v-if="hasFoto" flat @click="openCamera()">
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
    <hr />
    <br /><br /><br /><br />
    <hr />
    <span>No More</span>
  </Card>
</div>
</template>

<script>
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

export default {
  data() {
    let u = navigator.userAgent;
    return {
      isCameraOpen: false,
      hasFoto: false,
      cropper: null,
      isAndroid: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
      isIOS: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
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
          height: window.innerHeight,
          facingMode: "environment"
        },
        audio: false
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
      ctx.drawImage(video, 0, 0);
      this.hasFoto = true;
      this.closeCamera();
      this.initCroppe();
    },
    drawToCanvas(imgData) {
      let vm=this;
      var cvs = this.$refs.canvas;
      var ctx = cvs.getContext('2d');
      var img = new Image;
      cvs.width = window.innerWidth;
      cvs.height = window.innerHeight;
      img.src = imgData;
      img.onload = function() { //必须onload之后再画
        cvs.width = img.width;
        cvs.height = img.height;
        ctx.drawImage(img, 0, 0);
        vm.isCameraOpen = true;
        vm.hasFoto = true;
        vm.initCroppe();
      }
    },
    openCamera() {
      if (this.isIOS) {
        let vm=this;
        console.log("isIOS");
        this.$refs['CameraInput'].onchange = function() {
          var file = this.files[0]; //获取input输入的图片
          if (!/image\/\w+/.test(file.type)) {
            alert("请确保文件为图像类型");
            return false;
          } //判断是否图片，在移动端由于浏览器对调用file类型处理不同，虽然加了accept = 'image/*'，但是还要再次判断
          var reader = new FileReader();
          reader.readAsDataURL(file); //转化成base64数据类型
          reader.onload = function(e) {
            vm.drawToCanvas(this.result);
          }
        }
        this.$refs['CameraInput'].click();
        // let uploadFile=new FormData();
        // let imgData=this.$refs.CameraInput.files[0];
        // uploadFile.append('file',imgData);
      } else {
        this.isCameraOpen = true;
        this.hasFoto = false;
        this.getMedia();
      }
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
