// 用于从公共文件夹或服务器获取 Markdown 文件内容
export function fetchMarkdown(fileName) {
    return fetch(`/src/markdowns/${fileName}`).then(response => response.text());
  }
  