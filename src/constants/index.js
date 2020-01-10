// 项目版本号
const { version } = require('../../package')

// 模版下载地址 将下载模版放入家目录下隐藏文件夹./template
const defaultDownloadDirectory = `${process.env[process.platform === 'darwin' ? 'HOME' : 'USERPROFILE']}/.template`

module.exports = {
  version,
  defaultDownloadDirectory,
}
