<template>
<div id="app">
  <router-view class="router-content" />
  <mu-bottom-nav id="bottom-nav-bar" :value="$router.name">
      <mu-bottom-nav-item title="History" icon="restore" to="/history" value="history"></mu-bottom-nav-item>
      <mu-bottom-nav-item title="Home" icon="camera_alt" to="/" value="home"></mu-bottom-nav-item>
      <mu-bottom-nav-item title="More" icon="more_horiz" to="/search" value="more"></mu-bottom-nav-item>
  </mu-bottom-nav>
</div>
</template>

<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    height: 100vh;
    margin: 0px;
    overflow: hidden;
}
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
.router-content{
  height: calc(100% - 56px);
  overflow: scroll;
  overflow-x:hidden;
}
#bottom-nav-bar{
  // position: absolute;
  // top: calc(100vh - 56px);
  width: 100%;
}
</style>
