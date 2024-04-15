<template>
<ul>
        <li><a href="#" @click="loadContent('Home.md')">Home</a></li>
        <li><a href="#" @click="loadContent('About.md')">About</a></li>
        <li><a href="#" @click="loadContent('2024-04-15.md')">2024-04-15</a></li>
      </ul>
<ContentBox :content="content"></ContentBox>
</template>

<style>
ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 7%;
  height: 100%; /* 全屏高度 */
  position: fixed; 
  overflow: auto; /* 如果导航栏选项多，允许滚动 */
}

li a {
    font-size: x-large;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

/* 鼠标移动到选项上修改背景颜色 */
li a:hover {
  background-color: #555;
  color: white;
}
</style>

<script>
import ContentBox from './components/ContentBox.vue'
import { fetchMarkdown } from './utils.js';

export default {
    name: 'Contents',
    components: {
        ContentBox
    },
    data() {
    return {
      content: 'What are you looking for 👀.'
    };
    },
    methods: {
    loadContent(fileName) {
      fetchMarkdown(fileName)
        .then(markdown => {
          this.content = markdown;
          
        })
        .catch(error => {
          console.error('Error loading the markdown file:', error);
          this.content = 'Failed to load content.';
        });
        console.log(this.content)
    }
}
  
}
</script>
  