// 第一步 获取节点
const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// 第二步 fill的事件监听
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// 第四步 循环empty盒子并设置事件监听
for (const empty of empties) {
  // 当某被拖动的对象在另一对象容器范围内拖动时触发此事件
  empty.addEventListener("dragover", dragOver);
  // 当被鼠标拖动的对象进入其容器范围内时触发此事件
  empty.addEventListener("dragenter", dragEnter);
  // 当被鼠标拖动的对象离开其容器范围内时触发此事件
  empty.addEventListener("dragleave", dragLeave);
  //  在一个拖动过程中，释放鼠标键时触发此事件
  empty.addEventListener("drop", dragDrop);
}
// 第三步 fill拖动函数
function dragStart() {
  console.log(this)
  this.className += " hold";
  // 清除原来格子中的图片
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  this.className = "fill";
}
// 第五步 empty函数
function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = "empty";
}
function dragDrop() {
  this.className = "empty";
  // dragEnd将.fill元素恢复为可见
  this.append(fill);
}
