// 获取 input 元素
var input = document.getElementById('input');
var messages = document.getElementById('messages');
console.log('input>>>', input);
console.log('message>>>>', messages);
console.log('hahhaha');

// 监听 input 键盘事件
input.addEventListener('keypress', (event) => {
  // 判断是否按下 enter 键
  if (event.keyCode === 13) {
    // 检查字段是否有效
    if (input.validity.valid) {
      // 使用 input 输入的值创建 DOM 元素
      const message = createMessage(input.value);
      console.log('message>>>>', message);
      // 将创建的 DOM 元素添加到消息列表中
      messages.appendChild(message);
      // 清除输入框的值
      input.value = '';
      // 滚动到消息列表底部
      messages.parentNode.scrollTop = messages.parentNode.scrollHeight;
    }
  }
});

// 将 input 的值转换成字符串
function createMessage(value) {
  return stringToDom(`
  <li>
    <div class="message message--mine" data-timestamp="${new Date().toString()}">${value}</div>
  </li>`
  );
}

// 将字符串转换成真实的 DOM
function stringToDom(string) {
  const template = document.createElement('template');
  template.innerHTML = string.trim();
  return template.content.firstChild;
}
