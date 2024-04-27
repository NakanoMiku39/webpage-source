<template>
  <div class="container">  <!-- 添加容器用于应用 flexbox -->
    <ul class="box column left">
      <li><a href="#" @click="loadContent('Home.md')">Home</a></li>
      <li><a href="#" @click="loadContent('About.md')">About</a></li>
      <li><a href="#" @click="loadContent('2024-04-27.md')">2024-04-27</a></li>
      <li><a href="#" @click="loadContent('2024-04-22.md')">2024-04-22</a></li>
      <li><a href="#" @click="loadContent('2024-04-20.md')">2024-04-20</a></li>
      <li><a href="#" @click="loadContent('2024-04-17.md')">2024-04-17</a></li>
      <li><a href="#" @click="loadContent('2024-04-16.md')">2024-04-16</a></li>
      <li><a href="#" @click="loadContent('2024-04-15.md')">2024-04-15</a></li>
    </ul>
    <div class="box column right">
      <ContentBox :content="content"></ContentBox>
    </div>
  </div>
</template>

<style>
.container {
  display: flex; /* 设置为 Flex 容器 */
}

.box.column {
  flex-grow: 1; /* 允许元素根据需要扩展填充空间 */
}

.box.column.left {
  flex-basis: 10%; /* 左侧列基础宽度 */
}

.box.column.right {
  flex-basis: 90%; /* 右侧列基础宽度 */
  margin-left: 1vw; /* 这可以保留，确保左右列之间有间隙 */
}

ul {
  list-style-type: none;
  margin: 10px;
  padding: 0;
  height: 80vh; /* 完全可以保留 */
  overflow: auto; /* 允许滚动 */
  border-right-style: solid;
  border-width: 1px;
}

li a {
  font-size: x-large;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.5s, color 0.5s;
  -webkit-transition: background-color 0.5s, color 0.5s; /* Safari */
}

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
      content: 'Loading content...'  // 设置初始加载文本或留空
    };
    },
    created() {
    this.loadContent('Home.md');  // 在组件创建后加载内容
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
    }
}
  
}
</script>
  