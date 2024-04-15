<template>
  <div class="row">
    <div><h1>This is: {{ msg }}</h1></div>
    <div><div>A regular computer science major student</div></div>
    <div><img id="ProfilePicture" src="../assets/head.jpg" /></div>
    <div><a href="https://github.com/NakanoMiku39">My github Link here</a></div>
  </div>
</template>

<style>
#ProfilePicture {
  border-radius: 8px;
  width: 50%;
  height: auto;
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
