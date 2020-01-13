const readline = require('readline')

// 清屏幕
exports.clearConsole = title => {
  if (process.stdout.isTTY) {
    const blank = '\n'.repeat(process.stdout.rows)
    console.log(blank)
    // 移动光标到给定的 TTY stream 中指定的位置
    readline.cursorTo(process.stdout, 0, 0)
    // 从光标的当前位置向下清除给定的 TTY 流
    readline.clearScreenDown(process.stdout)
    if (title) {
      console.log(title)
    }
  }
}
