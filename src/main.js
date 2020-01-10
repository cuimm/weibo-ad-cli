const path = require('path')
const program = require('commander')
const { version } = require('./constants')
const actionsMap = require('./config/actions')

// 注册命令
Reflect.ownKeys(actionsMap).forEach(action => {
  program
    // 在帮助的第一行中自定义用法说明
    .usage('[commands] [project-name]')
    // 配置命令名称
    .command(action)
    // 配置命令别名
    .alias(actionsMap[action].alias)
    // 配置命令描述
    .description(actionsMap[action].description)
    // 命令执行方法
    .action(() => {
      if (action === '*') {
        console.log(actionsMap[action].description)
      } else {
        require(path.resolve(__dirname, action))(...process.argv.slice(3))
      }
    })
})

// 监听用户的help事件
program.on('--help', () => {
  console.log('\nExamples:')
  Reflect.ownKeys(actionsMap).forEach(action => {
    actionsMap[action].examples.forEach(example => {
      if (action !== '*') {
        console.log(`  ${example}`)
      }
    })
  })
})

// 解析用户传递的参数
program.version(version).parse(process.argv)
