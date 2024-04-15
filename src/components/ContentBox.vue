<template>
<div id="contentbox" class="content-box" v-html="formattedContent"></div> 
</template>
  
<style>
#contentbox {
  margin-left:5vw;
  padding:1px 16px;
  height:80vh;
  overflow: auto;
  font-size: 20px;
}
</style>

<script>
import { marked } from 'marked'

export default {
    name: 'ContentBox',
    props: ['content'],
    computed: {
    formattedContent() {
        console.log(this.content)
      return marked(this.content);
    }
    }

}
</script>
  