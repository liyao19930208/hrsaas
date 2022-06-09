export const imagerror = {
  // 指令对象会在当前的dom元素插入到节点之后执行
  inserted(dom, options) {
    // options是指令中的变量的 解释其中有一个 属性叫做value
    // dom表示当前指令作用的dom对象
    // dom认为此时就是图片
    // 当图片有地址但是地址没有加载成功的时候 会报错  会出发图片的一个事件=>onerror
    dom.onerror = function() {
      // 当图片出现异常的时候 会将指令配置的默认图片设置为该图片的内容
      // dom 可以注册error事件
      dom.src = options.value // 这里不能写死
    }
  }
}
