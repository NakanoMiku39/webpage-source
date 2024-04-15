<template>
  <div class="row">
    <div id="name"><h1>{{ msg }}</h1></div>
    <div><h3>A regular computer science major student</h3></div>
    <div><img id="ProfilePicture" src="../assets/head.jpg" /></div>
    <div><a href="https://github.com/NakanoMiku39"><img id="icon" src="https://img.shields.io/badge/Github-NakanoMiku39-white?style=flat&logo=github&label=Github"></a></div>
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
</style>

<script>
export default {
  name: 'Intro',
  props: {
    msg: String
  }
}
</script>
