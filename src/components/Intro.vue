<template>
  <div class="row">
    <div id="name"><h1>{{ msg }}</h1></div>
    <div><h3>A regular computer science major student</h3></div>
    <div><img id="ProfilePicture" src="../assets/head.jpg" /></div>
    <div><a href="https://github.com/NakanoMiku39"><img id="icon" src="https://img.shields.io/badge/Github-NakanoMiku39-white?style=flat&logo=github&label=Github"></a></div>
    <div><a href="https://musedash.moe/player/308893f445f511eb94f50242ac110056"><img id="icon" src="https://img.shields.io/badge/musedash.moe-%E4%B8%89%E7%8E%96%E5%A4%A9%E4%B8%8B%E7%AC%AC%E4%B8%80%EF%BC%81%EF%BC%81-white?labelColor=%23fc00ff&color=white"></a></div>
    <div><a href="https://space.bilibili.com/7791787"><img id="icon" src="https://img.shields.io/badge/bilibili-NakanoMiku__39-white?logo=bilibili&labelColor=%23fb7299&color=white"></a></div>
  </div>
</template>

<style>
#ProfilePicture {
  border-radius: 8px;
  width: 50%;
  height: auto;
}

#name {
  border-bottom: 5px;
  border-bottom-style: solid;
}

#icon {
  height: 25px;
  width: auto;
}
</style>

<script>
export default {
  name: 'Intro',
  props: {
    msg: String
  }
}
</script>
