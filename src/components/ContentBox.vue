<template>
<div id="contentbox" class="content-box" v-html="formattedContent"></div> 
</template>
  
<style>
#contentbox {
  margin-left:10%;
  padding:1px 16px;
  height:100%;
  overflow: auto;
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
  