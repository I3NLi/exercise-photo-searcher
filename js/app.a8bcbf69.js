(function(t){function e(e){for(var a,s,i=e[0],c=e[1],l=e[2],d=0,m=[];d<i.length;d++)s=i[d],n[s]&&m.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],a=!0,i=1;i<o.length;i++){var c=o[i];0!==n[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=o[0]))}return t}var a={},n={app:0},r=[];function s(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=a,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(o,a,function(e){return t[e]}.bind(null,a));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("cd49")},"0548":function(t,e,o){t.exports=o.p+"img/mock_sol1.00f7b645.jpg"},"16f4":function(t,e,o){t.exports=o.p+"img/404.37353558.png"},"3b26":function(t,e,o){"use strict";var a=o("b8c1"),n=o.n(a);n.a},"5c0b":function(t,e,o){"use strict";var a=o("5e27"),n=o.n(a);n.a},"5e27":function(t,e,o){},"86ee":function(t,e,o){t.exports=o.p+"img/mock_sol2.e58d0062.jpg"},"8d33":function(t,e,o){},aba8:function(t,e,o){"use strict";var a=o("8d33"),n=o.n(a);n.a},b641:function(t,e,o){t.exports=o.p+"img/mock_qua.c72ad128.jpg"},b8c1:function(t,e,o){},bcc8:function(t,e,o){},cd49:function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var a=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view",{staticClass:"router-content"}),o("mu-bottom-nav",{attrs:{id:"bottom-nav-bar",value:t.$router.name}},[o("mu-bottom-nav-item",{attrs:{title:"History",icon:"restore",to:"/history",value:"history"}}),o("mu-bottom-nav-item",{attrs:{title:"Home",icon:"camera_alt",to:"/",value:"home"}}),o("mu-bottom-nav-item",{attrs:{title:"More",icon:"more_horiz",to:"/search",value:"more"}})],1)],1)},r=[],s=(o("5c0b"),o("2877")),i={},c=Object(s["a"])(i,n,r,!1,null,null,null),l=c.exports,u=o("8c4f"),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"home"}},[o("Modal",{attrs:{id:"camera-modal",fullscreen:"",closable:!1,"mask-closable":!1},model:{value:t.isCameraOpen,callback:function(e){t.isCameraOpen=e},expression:"isCameraOpen"}},[o("video",{directives:[{name:"show",rawName:"v-show",value:!t.hasFoto,expression:"!hasFoto"}],ref:"video",staticStyle:{width:"100%",height:"100%","object-fit":"cover"},attrs:{autoplay:"autoplay",playsinline:""}}),o("canvas",{directives:[{name:"show",rawName:"v-show",value:t.hasFoto,expression:"hasFoto"}],ref:"canvas",attrs:{width:"500",height:"500"}}),o("div",{staticClass:"container",attrs:{slot:"footer"},slot:"footer"},[o("div",{staticClass:"row align-items-end"},[o("div",{staticClass:"col"},[o("mu-button",{directives:[{name:"show",rawName:"v-show",value:!t.hasFoto,expression:"!hasFoto"}],attrs:{flat:""}},[o("mu-icon",{attrs:{value:"image"}})],1),o("mu-button",{directives:[{name:"show",rawName:"v-show",value:t.hasFoto,expression:"hasFoto"}],attrs:{flat:""},on:{click:function(e){return t.openCamera()}}},[o("mu-icon",{attrs:{value:"replay"}})],1)],1),o("div",{staticClass:"col"},[t.hasFoto?t._e():o("mu-button",{attrs:{large:"",fab:"",color:"indigo"},on:{click:function(e){return t.takePhoto()}}},[o("mu-icon",{attrs:{value:"photo_camera"}})],1),t.hasFoto?o("mu-button",{attrs:{large:"",fab:"",color:"success"},on:{click:function(e){return t.uploadCroppe()}}},[o("mu-icon",{attrs:{value:"done"}})],1):t._e()],1),o("div",{staticClass:"col"},[o("mu-button",{attrs:{flat:""},on:{click:t.closeModal}},[o("mu-icon",{attrs:{value:"clear"}})],1)],1)])])]),o("div",{staticClass:"row align-items-center backplane"},[o("Button",{staticStyle:{position:"absolute",top:"5em"},attrs:{type:"info",shape:"circle",icon:"ios-person"}},[t._v("sign up")]),o("div",{staticClass:"col-12"},[o("input",{ref:"CameraInput",attrs:{"v-show":t.isIos,type:"file",accept:"image/*",capture:"camera"}}),o("mu-button",{attrs:{large:"",fab:"",color:"indigo"},on:{click:t.openCamera}},[o("mu-icon",{attrs:{value:"photo_camera"}})],1),o("mu-button",{attrs:{"v-show":t.isAndroid,large:"",fab:"",color:"indigo"},on:{click:t.openCamera}},[o("mu-icon",{attrs:{value:"photo_camera"}})],1)],1)],1),o("Card",{staticStyle:{"margin-top":"-8px","border-radius":"10px"}},[o("div",{staticClass:"container",attrs:{slot:"title"},slot:"title"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-3"},[o("Button",{attrs:{type:"info",shape:"circle"}},[t._v("AI")])],1),o("div",{staticClass:"col-3"},[o("Button",{attrs:{type:"success",shape:"circle"}},[t._v("ANA")])],1),o("div",{staticClass:"col-3"},[o("Button",{attrs:{type:"primary",shape:"circle"}},[t._v("ML")])],1),o("div",{staticClass:"col-3"},[o("Button",{attrs:{type:"warning",shape:"circle"}},[t._v("R")])],1)]),o("div",{staticClass:"row align-items-end"},[o("div",{staticClass:"col-3"},[t._v("\r\n          Artificial Intelligence\r\n        ")]),o("div",{staticClass:"col-3"},[t._v("\r\n          Analysis 3\r\n        ")]),o("div",{staticClass:"col-3"},[t._v("\r\n          Machine Learning\r\n        ")]),o("div",{staticClass:"col-3"},[t._v("\r\n          Robotics\r\n        ")])])]),o("h5",[t._v("New issues")]),o("hr"),o("br"),o("br"),o("br"),o("br"),o("hr"),o("span",[t._v("No More")])])],1)},m=[],p=(o("ac6a"),o("4917"),o("bab4")),f=o.n(p),h=(o("6107"),{data:function(){var t=navigator.userAgent;return{isCameraOpen:!1,hasFoto:!1,cropper:null,isAndroid:t.indexOf("Android")>-1||t.indexOf("Adr")>-1,isIOS:!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}},mounted:function(){},methods:{getMedia:function(){if(isIOS){var t=new FormData,e=this.$refs.CameraInput.files[0];t.append("file",e)}else{var o={video:{width:window.innerWidth,height:window.innerHeight,facingMode:"environment"},audio:!1},a=this.$refs.video,n=navigator.mediaDevices.getUserMedia(o);n.then(function(t){a.srcObject=t,a.play()})}},closeCamera:function(){var t=this.$refs.video;t.srcObject.getTracks().forEach(function(t){t.stop()})},takePhoto:function(){var t=this.$refs.video,e=this.$refs.canvas;t.width=e.width=window.innerWidth,t.height=e.height=window.innerHeight;var o=e.getContext("2d");null!=this.cropper&&(this.cropper.destroy(),this.cropper=null),o.drawImage(t,0,0),this.hasFoto=!0,this.closeCamera(),this.initCroppe()},openCamera:function(){this.isCameraOpen=!0,this.hasFoto=!1,this.getMedia()},initCroppe:function(){var t=this.$refs.canvas;this.cropper=new f.a(t,{viewMode:1}),this.cropper.crop()},uploadCroppe:function(){var t=this;this.cropper.getCroppedCanvas().toBlob(function(e){t.$store.commit("pushFoto",e)}),this.$router.push({path:"/search"})},closeModal:function(){this.isCameraOpen=!1,this.closeCamera()}}}),v=h,b=(o("aba8"),Object(s["a"])(v,d,m,!1,null,"5aafa880",null)),g=b.exports,w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"history"}},[o("mu-appbar",{staticStyle:{width:"100%",position:"sticky",top:"0"},attrs:{color:"primary"}},[o("mu-button",{attrs:{slot:"left",icon:"",value:"history"},slot:"left"},[o("mu-icon",{attrs:{value:"arrow_back_ios"}})],1),o("center",[t._v("History")]),o("mu-menu",{attrs:{slot:"right"},slot:"right"},[o("mu-button",{attrs:{icon:""}},[o("mu-icon",{attrs:{value:"menu",size:32}})],1),o("mu-list",{attrs:{slot:"content"},slot:"content"},[o("mu-list-item",{attrs:{button:""}},[o("mu-list-item-content",[o("mu-list-item-title",[t._v("Management")])],1)],1)],1)],1)],1),o("mu-list",[o("mu-sub-header",[t._v("Today")]),0==t.fotos.length?o("mu-list-item",{attrs:{button:"",to:"/"}},[t._v("\r\n      You don't have any search history, click here to start a new search.\r\n    ")]):t._e(),o("mu-container",t._l(t.fotos,function(e,a){return o("mu-card",{staticStyle:{width:"100%",margin:"0 auto","margin-bottom":"16px","border-radius":"8px"},attrs:{ket:a}},[o("mu-card-media",{attrs:{"sub-title":e.createAt.toString()}},[o("img",{staticStyle:{height:"300px","border-radius":"8px"},attrs:{src:t.blobToSrc(e.data)}})]),o("div",{staticClass:"row align-items-center",staticStyle:{padding:"8px"}},[o("div",{staticClass:"col-10",staticStyle:{"text-align":"left"}},[o("input-tag",{model:{value:e.tags,callback:function(o){t.$set(e,"tags",o)},expression:"foto.tags"}})],1),o("div",{staticClass:"col-2",staticStyle:{"text-align":"right"}},[o("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.star,expression:"!foto.star"}],attrs:{size:26,type:"md-star-outline",color:"#ff9900"},on:{click:function(t){e.star=!e.star}}}),o("Icon",{directives:[{name:"show",rawName:"v-show",value:e.star,expression:"foto.star"}],attrs:{size:26,type:"md-star",color:"#ff9900"},on:{click:function(t){e.star=!e.star}}})],1)])],1)}),1)],1),o("hr"),o("hr")],1)},y=[],_=o("74bf"),C=o.n(_),k={data:function(){return{}},mounted:function(){},methods:{blobToSrc:function(t){return window.URL.createObjectURL(t)},removeTag:function(t,e){var o=t.indexOf(e);t.splice(o,1)},addTag:function(t){t.length?t.push(t[t.length-1]+1):t.push(0)}},computed:{fotos:function(){return this.$store.state.fotos}},components:{InputTag:C.a}},x=k,S=(o("3b26"),Object(s["a"])(x,w,y,!1,null,"f634e52c",null)),O=S.exports,j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"history"}},[o("mu-appbar",{staticStyle:{width:"100%",position:"sticky",top:"0"},attrs:{color:"primary"}},[o("mu-button",{attrs:{slot:"left",icon:"",value:"history"},slot:"left"},[o("mu-icon",{attrs:{value:"arrow_back_ios"}})],1),o("center",[t._v("Search")]),o("mu-menu",{attrs:{slot:"right"},slot:"right"},[o("mu-button",{attrs:{icon:""}},[o("mu-icon",{attrs:{value:"menu",size:32}})],1),o("mu-list",{attrs:{slot:"content"},slot:"content"},[o("mu-list-item",{attrs:{button:""}},[o("mu-list-item-content",[o("mu-list-item-title",[t._v("Management")])],1)],1)],1)],1)],1),o("img",{attrs:{src:t.foto?t.blobToSrc(t.foto.data):t.Img404}}),t.hasFoto?o("Collapse",{attrs:{simple:"",value:[1,2,3,4,5,6]}},[o("Panel",{attrs:{name:"1"}},[t._v("\r\n      Question\r\n      "),o("img",{attrs:{slot:"content",src:t.mockQua},slot:"content"})]),o("Panel",{attrs:{name:"2"}},[t._v("\r\n      Solution\r\n      "),o("div",{attrs:{slot:"content"},slot:"content"},[o("Carousel",{attrs:{slot:"content",loop:""},slot:"content"},[o("CarouselItem",[o("div",{staticClass:"demo-carousel"},[o("img",{attrs:{src:t.mockSol1}})])]),o("CarouselItem",[o("div",{staticClass:"demo-carousel"},[o("img",{attrs:{src:t.mockSol2}})]),o("Rate",{attrs:{"allow-half":""}})],1)],1),o("Button",{attrs:{shape:"circle"}},[t._v("Write a Solution")])],1)]),o("Panel",{attrs:{name:"4"}},[t._v("\r\n      Tutorial\r\n      "),o("Carousel",{attrs:{slot:"content",loop:""},slot:"content"},[o("CarouselItem",[o("div",{staticClass:"demo-carousel"},[o("iframe",{attrs:{src:"https://www.youtube.com/embed/xTuMdiCZnYw",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),o("Rate",{attrs:{"allow-half":""}})],1),o("CarouselItem",[o("div",{staticClass:"demo-carousel"},[o("iframe",{attrs:{src:"https://www.youtube.com/embed/sqwVvJL3WTw",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),o("Rate",{attrs:{"allow-half":""}})],1)],1)],1),o("Panel",{attrs:{name:"5"}},[t._v("\r\n      Discuss\r\n      "),o("div",{attrs:{slot:"content"},slot:"content"},[o("center",[t._v("No data yet")]),o("Button",{attrs:{shape:"circle"}},[t._v("Start Discuss")])],1)]),o("Panel",{attrs:{name:"6"}},[t._v("\r\n      Notes\r\n      "),o("div",{attrs:{slot:"content"},slot:"content"},[o("center",[t._v("No data yet")]),o("Button",{attrs:{shape:"circle"}},[t._v("Add Notes")])],1)]),o("Panel",{attrs:{name:"6"}},[t._v("\r\n      More\r\n      "),o("div",{staticClass:"buttonSet",attrs:{slot:"content"},slot:"content"},[o("Button",{attrs:{Icon:"md-arrow-back",type:"info"}},[t._v("Collection")]),o("Button",{attrs:{Icon:"md-warning",type:"warning"}},[t._v("Report")]),o("Button",{attrs:{Icon:"md-create",type:"success"}},[t._v("More Exercises")])],1)])],1):t._e()],1)},I=[],M=o("16f4"),F=o.n(M),T=o("0e54"),$=o("b641"),A=o.n($),N=o("0548"),P=o.n(N),B=o("86ee"),R=o.n(B),E={data:function(){return{fotoIndex:0,Img404:F.a,mockQua:A.a,mockSol1:P.a,mockSol2:R.a}},mounted:function(){},methods:{blobToSrc:function(t){return window.URL.createObjectURL(t)},removeTag:function(t,e){var o=t.indexOf(e);t.splice(o,1)},addTag:function(t){t.length?t.push(t[t.length-1]+1):t.push(0)},compiledMarkdown:function(){return Object(T["marked"])(this.input,{sanitize:!0})}},computed:{hasFoto:function(){return this.fotos.length>0},foto:function(){return this.fotos[this.fotoIndex]},fotos:function(){return this.$store.state.fotos}},components:{InputTag:C.a}},L=E,U=(o("efb4"),Object(s["a"])(L,j,I,!1,null,"6e2bc87d",null)),z=U.exports;a["default"].use(u["a"]);var D=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:g},{path:"/history",name:"history",component:O},{path:"/search",name:"search",component:z}]}),H=o("2f62");a["default"].use(H["a"]);var W=new H["a"].Store({state:{fotos:[]},getters:{},mutations:{pushFoto:function(t,e){t.fotos.push({data:e,createAt:new Date,tags:["math"],star:!1})}},actions:{}}),q=o("9483");Object(q["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var J=o("30f4"),Q=(o("d6f6"),o("e069")),Y=o.n(Q);o("dcad"),o("ab8b"),o("3e48");a["default"].use(Y.a),a["default"].use(J["a"]),a["default"].config.productionTip=!1,new a["default"]({router:D,store:W,render:function(t){return t(l)}}).$mount("#app")},efb4:function(t,e,o){"use strict";var a=o("bcc8"),n=o.n(a);n.a}});
//# sourceMappingURL=app.a8bcbf69.js.map