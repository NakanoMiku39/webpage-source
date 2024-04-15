<template>
  <div class="row">
    <div id="name"><h1>{{ msg }}</h1></div>
    <div><h3>A regular computer science major student</h3></div>
    <div><img class="profile-picture" src="../assets/head.jpg" /></div>
    <div><a href="https://github.com/NakanoMiku39"><img class="icon" src="https://img.shields.io/badge/Github-NakanoMiku39-white?style=flat&logo=github&label=Github"></a></div>
    <div><a href="https://musedash.moe/player/308893f445f511eb94f50242ac110056"><img class="icon" src="https://img.shields.io/badge/musedash.moe-%E4%B8%89%E7%8E%96%E5%A4%A9%E4%B8%8B%E7%AC%AC%E4%B8%80%EF%BC%81%EF%BC%81-white?labelColor=%23fc00ff&color=white"></a></div>
    <div><a href="https://space.bilibili.com/7791787"><img class="icon" src="https://img.shields.io/badge/bilibili-NakanoMiku__39-white?logo=bilibili&labelColor=%23fb7299&color=white"></a></div>
    <div><a href="https://steamcommunity.com/profiles/76561198268467019/"><img class="icon" src="https://img.shields.io/badge/Steam-NakanoMiku-black?logo=steam&logoColor=%23171d25&labelColor=%23417a9b"></a></div>
  </div>
</template>

<style>
.row {
  display: flex;  /* 使用 Flexbox 布局 */
  flex-wrap: wrap;  /* 允许内容换行 */
  align-items: center;  /* 垂直居中对齐子项 */
  text-align: center;
  justify-content: space-around;  /* 子项在主轴线上均匀分布 */
}

.profile-picture {
  border-radius: 8px;
  width: 50%;  /* 根据容器宽度自动调整大小 */
  height: auto;  /* 保持图片原始比例 */
}

#name {
  border-bottom: 5px solid;  /* 修正，添加了边框样式定义 */
  padding-bottom: 5px;  /* 添加padding增加视觉效果 */
  font-size: large;  /* 调整字体大小为更大 */
}

.icon {
  width: 15vh;  /* 使用视口高度的一定比例作为图标宽度 */
  height: auto;  /* 保持图标的比例 */
  margin-right: 10px;  /* 添加右边距避免图标挤在一起 */
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
